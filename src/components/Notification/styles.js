import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  notificationContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
  },
  notificationContained: {
    borderRadius: 4,
    height: 48,
    boxShadow: theme.customShadows.widgetDark,
  },
  notificationContainedShadowless: {
    boxShadow: 'none',
  },
  notificationIconContainer: {
    minWidth: 45,
    height: 45,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  notificationIconContainerContained: {
    fontSize: 18,
    color: '#FFFFFF80',
  },
  notificationIconContainerRounded: {
    marginRight: theme.spacing(2),
  },
  notificationIcon: {
    color: '#fff',
  },
  containedTypography: {
    color: 'white',
  },
  messageContainer: {
    padding: `0 ${theme.spacing(4)}px`,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  extraButton: {
    color: 'white',
    '&:hover, &:focus': {
      background: 'transparent',
    },
  },
}));
