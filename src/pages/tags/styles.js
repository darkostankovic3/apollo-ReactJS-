import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  button: {
    boxShadow: theme.customShadows.widgetButton,
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    '&:hover': {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
  buttonWhite: {
    color: 'white',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));
