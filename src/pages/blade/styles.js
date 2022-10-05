import { makeStyles } from '@material-ui/core';

export default makeStyles(() => (
  {
    root: {
      marginRight: '10px',

      '&:last-of-type': {
        marginRight: 0,
      },
    },
  }
));
