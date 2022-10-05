import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  label: {
    color: theme.palette.common.white,
    borderRadius: '3px',
    '& .MuiChip-icon': {
      color: theme.palette.common.white,
    },
  },
}));
