import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paperContainer: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    margin: `${theme.spacing(3)}px 0`,
  },
  elementContainer: {
    display: 'flex',
    alignContent: 'flex-start',
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  select: {
    paddingBottom: theme.spacing(6),
  },
}));
