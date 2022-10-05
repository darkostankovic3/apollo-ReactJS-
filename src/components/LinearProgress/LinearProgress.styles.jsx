import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
  },
  success: {
    backgroundColor: theme.palette.success.main,
  },
  info: {
    backgroundColor: theme.palette.info.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
}));
