import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  tableWrapper: {
    overflowX: 'auto',
    position: 'relative',
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
    '& tbody tr:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      '& td': {
        color: theme.palette.common.black,
      },
    },
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: fade(theme.palette.colorNeutral2.main, 0.5),
  },
  loadingIcon: {
    position: 'absolute',
    fontSize: '20px',
    top: 'calc(45% - 10px)',
    left: 'calc(50% - 10px)',
  },
}));
