import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  collapseContainer: {
    position: 'relative',
    top: '-1px',
  },
  banner: {
    padding: 0,
    minHeight: '48px',
    paddingLeft: theme.spacing(4),
  },
  notificationIcon: {
    height: '32px',
  },
  icon: {
    height: '100%',
    padding: `${theme.spacing(2)}px 0`,
    display: 'flex',
  },
  bannerMessage: {
    // top right bottom left
    margin: `${theme.spacing(0.5)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
    padding: `${theme.spacing(1.5)}px 0`,
  },
  closeButtonContainer: {
    padding: `${theme.spacing(2)}px 0`,
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    width: '32px',
    marginRight: theme.spacing(4),
  },
  closeButtonIcon: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: fade(theme.palette.common.white, 0.24),
      borderRadius: '50%',
    },
  },
}));
