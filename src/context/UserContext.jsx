import React from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

// config
import config from '../config';

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true };
    case 'SIGN_OUT_SUCCESS':
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem('token'),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

export function receiveToken(token, dispatch) {
  let user;

  // We check if app runs with backend mode
  if (config.isBackend) {
    user = jwt.decode(token).user;
    delete user.id;
  } else {
    user = {
      email: config.auth.email,
    };
  }

  delete user.id;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  dispatch({ type: 'LOGIN_SUCCESS' });
}

function loginUser(
  dispatch,
  login,
  password,
  history,
  setIsLoading,
  setError,
  social = '',
) {
  setError(false);
  setIsLoading(true);

  // We check if app runs with backend mode
  if (!config.isBackend) {
    setTimeout(() => {
      setError(null);
      setIsLoading(false);
      receiveToken('token', dispatch);
    }, 2000);
  } else if (social) {
    window.location.href = `${config.baseURLApi
    }/user/signin/${
      social
    }${process.env.NODE_ENV === 'production'
      ? '?app=https://flatlogic.github.io/react-material-admin-full'
      : ''}`;
  } else if (login.length > 0 && password.length > 0) {
    axios
      .post('/user/signin/local', { email: login, password })
      .then((res) => {
        const { token } = res.data;
        setTimeout(() => {
          setError(null);
          setIsLoading(false);
          receiveToken(token, dispatch);
        }, 2000);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  } else {
    dispatch({ type: 'LOGIN_FAILURE' });
  }
}

function signOut(dispatch, history) {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  axios.defaults.headers.common.Authorization = '';
  dispatch({ type: 'SIGN_OUT_SUCCESS' });
  history.push('/login');
}

export {
  UserProvider, useUserState, useUserDispatch, loginUser, signOut,
};
