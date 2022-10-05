import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  info: {
    color: theme.palette.info.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  root: {
    position: 'relative',
  },
  bottom: {
    color: fade(theme.palette.colorBlack.main, 0.1),
  },
  top: {
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));
