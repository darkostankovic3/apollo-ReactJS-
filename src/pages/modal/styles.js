import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  marginRight: {
    marginRight: '10px',
  },
  marginTop: {
    marginTop: '10px',
  },
  paperItem: {
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    padding: theme.spacing(2),
    color: '#f3f3f3',
  },
  paper: {
    margin: theme.spacing(3),
    padding: 10,
    backgroundColor: '#f3f3f3',
  },
  wrapFix: {
    whiteSpace: 'pre',
  },
  paperMargin: {
    margin: 12,
  },
  scrollPane: {
    maxHeight: 350,
    overflow: 'auto',
  },
  imgCard: {
    height: '300px',
  },
}));
