import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  tableWrapper: {
    overflowX: 'auto',
  },
  tableWidget: {
    paddingTop: 'none',
    paddingBottom: 'none',
    color: 'blue',
  },
  toolbar: {
    borderBottom: 'none',
  },
  rowSelect: {
    padding: '12px',
  },
  tableBase: {
    height: '240px',
  },
}));
