import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Fade,
  TextField as Input,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import CircularProgress from '../../components/CircularProgress/CircularProgress';
// styles
import useStyles from './styles';

// logo
import IQVIAlogo from '../../images/iqvia-logo.png';
import google from '../../images/google.svg';

// context
import { useUserDispatch, loginUser, receiveToken } from '../../context/UserContext';

// components
import { Button, Typography } from '../../components/Wrappers/Wrappers';
import Widget from '../../components/Widget/Widget';
import config from '../../config';

function Login(props) {
  const classes = useStyles();

  // global
  const userDispatch = useUserDispatch();

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const token = params.get('token');
    if (token) {
      receiveToken(token, userDispatch);
    }
  }, []);

  // local
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [loginValue, setLoginValue] = useState('admin@iqvia.com');
  const [passwordValue, setPasswordValue] = useState('password');

  const activeTabId = 0;
  return (
    <Grid container className={classes.container}>
      <Grid item lg={5} className={classes.logotypeContainer} />
      <Grid item lg={7} sm={12} className={classes.formContainer}>
        <Box className={classes.form}>
          {activeTabId === 0 && (
            <>
              {config.isBackend ? (
                <Widget
                  disableWidgetMenu
                  style={{ marginTop: 32 }}
                >
                  <Typography
                    variant="body2"
                    block
                    style={{ textAlign: 'center' }}
                  >
                    This is a real app with Node.js backend - use
                    <Typography variant="body2" weight="bold">
                      &quot;admin@iqvia.com / password&quot;
                    </Typography>
                    {' '}
                    to login!
                  </Typography>
                </Widget>
              ) : null}

              <img src={IQVIAlogo} alt="logo" className={classes.logo} />

              <div className={classes.formDividerContainerTop} />
              <Typography
                style={{ textAlign: 'left' }}
                variant="h1"
                className={classes.greeting}
                color="colorBlack"
              >

                Log in to IQVIA Transparency
              </Typography>
              <div className={classes.formDividerContainerSpacer} />
              <Fade
                in={error}
                style={
                  !error ? { display: 'none' } : { display: 'inline-block' }
                }
              >
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <Box mb={10} />
              <Typography variant="h6">
                Username
              </Typography>
              <Input
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.InputUnderline,
                    input: classes.Input,
                  },
                }}
                style={{ backgroundColor: '#fff' }}
                margin="dense"
                variant="outlined"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <Box />
              <Box mb={5} />
              <Typography variant="h6">
                Password
              </Typography>
              <Input
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.InputUnderline,
                    input: classes.Input,
                  },
                }}
                style={{ backgroundColor: '#fff' }}
                margin="dense"
                variant="outlined"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}

                placeholder="Password"
                type="password"
                fullWidth
              />
              <Box />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <Box mx="auto">
                    <CircularProgress
                      className={classes.loginLoader}
                      type="indeterminate"
                    />
                  </Box>
                ) : (
                  <>
                    <Box display="flex" flexWrap="wrap" width={1} pt={7}>
                      <Button
                        display="inline"
                        disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                        onClick={() => loginUser(
                          userDispatch,
                          loginValue,
                          passwordValue,
                          props.history,
                          setIsLoading,
                          setError,
                        )}
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Log In
                      </Button>
                      <Box mt={7}>
                        <Typography color="primary" variant="type_caption">
                          Forgot Password?
                        </Typography>
                      </Box>
                    </Box>

                  </>
                )}
              </div>
            </>
          )}
          {activeTabId === 1 && (
            <>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <Input
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.InputUnderline,
                    input: classes.Input,
                  },
                }}
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                margin="dense"
                placeholder="Full Name"
                type="email"
                fullWidth
              />
              <Input
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.InputUnderline,
                    input: classes.Input,
                  },
                }}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                margin="dense"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <Input
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.InputUnderline,
                    input: classes.Input,
                  },
                }}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress type="indeterminate" />
                ) : (
                  <Button
                    onClick={() => loginUser(
                      userDispatch,
                      loginValue,
                      passwordValue,
                      props.history,
                      setIsLoading,
                      setError,
                    )}
                    disabled={
                      loginValue.length === 0
                      || passwordValue.length === 0
                      || nameValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
                onClick={() => loginUser(
                  userDispatch,
                  loginValue,
                  passwordValue,
                  props.history,
                  setIsLoading,
                  setError,
                  'google',
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default withRouter(Login);
