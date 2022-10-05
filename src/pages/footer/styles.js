import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  footerContainer: {
    position: 'relative',
  },
  explanation: {
    paddingBottom: `${theme.spacing(18)}px`,
  },
  footerContentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 16px',
  },
  footerText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
