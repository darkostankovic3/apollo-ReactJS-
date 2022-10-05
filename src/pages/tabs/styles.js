import { makeStyles } from '@material-ui/core';

export const TabStyle = (theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightMedium,
    '&$selected': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
});

export default makeStyles(() => ({
  scrollContainer: {
    maxWidth: '600px',
  },
}));
