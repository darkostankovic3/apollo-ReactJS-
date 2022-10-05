import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  heroWidgetWrapper: {
    height: '330px',
    maxHeight: '330px',
    overflow: 'hidden',

    '& > div': {
      overflowY: 'auto',
    },
  },
}));
