import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
