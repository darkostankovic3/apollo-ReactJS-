import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  pageTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(5),
  },
  typo: {
    color: theme.palette.primary,
  },
  button: {
    boxShadow: theme.customShadows.widgetButton,
    textTransform: 'none',
    '&:active': {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
}));
