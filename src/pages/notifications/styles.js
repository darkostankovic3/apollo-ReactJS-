import { makeStyles } from '@material-ui/core';
import tinycolor from 'tinycolor2';

export default makeStyles((theme) => ({
  layoutContainer: {
    width: 'inherit',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    border: '1px dashed',
    borderColor: theme.palette.primary.main,
    position: 'relative',
  },
  layoutText: {
    color: tinycolor(theme.palette.background.light)
      .darken()
      .toHexString(),
  },
  displayButtons: {
    padding: `${theme.spacing(8)}px 0`,
  },
  buttonRow: {
    width: 'inherit',
    display: 'flex',
    justifyContent: 'space-between',
  },
  layoutButton: {
    backgroundColor: theme.palette.background.light,
    width: 125,
    height: 50,
    outline: 'none',
    border: 'none',
  },
  layoutButtonActive: {
    backgroundColor: tinycolor(theme.palette.background.light)
      .darken()
      .toHexString(),
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
  },
  notificationCallButton: {
    // bottom right top left
    margin: `${theme.spacing(1)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
    textTransform: 'none',
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  codeComponent: {
    flexGrow: 1,
  },
  notificationItem: {
    marginTop: theme.spacing(2),
  },
  notificationCloseButton: {
    MsTransform: 'translate(0px, -50%)',
    position: 'absolute',
    right: theme.spacing(5),

  },
  toastsContainer: {
    width: 400,
    marginTop: theme.spacing(10),
    right: 0,
    marginBottom: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  progress: {
    visibility: 'hidden',
  },
  notification: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
    padding: '0px',
    margin: '0px',
  },
  notificationComponent: {
    paddingRight: theme.spacing(14),
  },
}));
