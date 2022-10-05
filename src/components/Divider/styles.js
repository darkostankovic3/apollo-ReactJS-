import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  light: {
    backgroundColor: theme.palette.colorNeutral1.main,
  },
  standard: {
    backgroundColor: theme.palette.colorNeutral3.main,
  },
  dark: {
    backgroundColor: theme.palette.colorNeutral4.main,
  },
}));
