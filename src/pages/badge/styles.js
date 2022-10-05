import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paddingTop: {
    paddingTop: theme.spacing(1),
  },
  badge: {
    margin: theme.spacing(2, 2, 0, 0),
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  },
  margin: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}));
