import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  tooltip: {
    width: 400,
    minWidth: 400,
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.colorNeutral4.main}`,
    borderRadius: 4,
    backgroundColor: theme.palette.colorNeutral1.main,
    boxShadow: theme.customShadows.blade,
  },
  arrow: {
    '&:before': {
      border: `1px solid ${theme.palette.colorNeutral4.main}`,
      backgroundColor: theme.palette.colorNeutral1.main,
    },
  },
  titleWrapper: {
    marginBottom: theme.spacing(2),
  },
  contentWrapper: {
    '& > p': {
      marginBottom: theme.spacing(2),
      color: theme.palette.colorNeutral8.main,
      lineHeight: 1.71,

      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
}));
