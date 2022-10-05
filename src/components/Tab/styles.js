import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  content: {
    wordWrap: 'break-word',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 8px',
    },
  },
}));
