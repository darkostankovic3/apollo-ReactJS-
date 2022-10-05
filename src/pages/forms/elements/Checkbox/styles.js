import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  checkboxContainer: {
    display: 'flex',
    '&:hover': {
      color: theme.palette.colorBlack.main,
    },
    '& .MuiIconButton-root:hover': {
      color: theme.palette.colorWhite.main,
      backgroundColor: 'transparent',
    },
  },
  label: {
    paddingLeft: theme.spacing(2),
    alignSelf: 'center',
    fontSize: '14px',
    cursor: 'pointer',
  },
  labelDisabled: {
    color: `${theme.palette.colorNeutral6.main} !important`,
  },
  regularLabel: {
    color: theme.palette.colorNeutral8.main,
    fontWeight: 400,
    '&:hover': {
      color: theme.palette.colorBlack.main,
    },
  },
  boldLabel: {
    color: theme.palette.colorBlack.main,
    fontWeight: 500,
  },
  disChecked: {
    opacity: '0.4',
    pointerEvents: 'none',
  },
  disUnchecked: {
    color: `${theme.palette.colorNeutral4.main} !important`,
    pointerEvents: 'none',
  },
  // declaring these classes to we can combine them with our custom root classes
  standardChecked: {
    color: theme.palette.colorBlue.main,
    '&:hover': {
      color: `${theme.palette.colorPrimaryDark.main} !important`,
    },
  },
  standardUnchecked: {
    color: `${theme.palette.colorNeutral5.main} !important`,
    '&:hover': {
      color: `${theme.palette.colorBlue.main} !important`,
    },
  },
  errorChecked: {
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.main,
    },
  },
  errorUnchecked: {
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.main,
    },
  },
  root: {
    width: '24px',
    height: '24px',
    '& svg': {
      width: '21px',
      height: '21px',
    },
  },
}));
