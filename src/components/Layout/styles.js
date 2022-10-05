import { makeStyles } from '@material-ui/core';

const drawerWidth = 316;

// comment
export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
    MsOverflowY: 'hidden',
    MsOverflowStyle: 'none',
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 32,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    paddingBottom: `${theme.spacing(18)}px !important`,
    width: 'calc(100vw - 240px)',
    minHeight: '100vh',
    backgroundColor: theme.palette.colorBg.main,
  },
  contentShift: {
    width: `calc(100vw - ${drawerWidth + theme.spacing(6)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  link: {
    marginRight: theme.spacing(2),
  },
  button: {
    boxShadow: theme.customShadows.widgetButton,
    textTransform: 'none',
    '&:active': {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
  ecommerceIcon: {
    color: theme.palette.secondary.text,
  },
  calendarIcon: {
    color: theme.palette.primary.main,
    marginRight: 14,
  },
  margin: {
    marginBottom: 24,
  },
  changeThemeFab: {
    position: 'fixed',
    top: theme.spacing(15),
    right: 0,
    zIndex: 1,
    borderRadius: 0,
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  navPadding: {
    paddingTop: `${theme.spacing(1)}px !important`,
    paddingBottom: '6px !important',
  },
  responsiveFooterLinks: {
    padding: `0 ${theme.spacing(4)}px`,
  },
  footerLinkContainer: {
    whiteSpace: 'nowrap',
    paddingTop: theme.spacing(4),
  },
  footerIconButton: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  footerGithubIcon: {
    padding: '12px 6px 12px 12px',
  },
}));
