import { makeStyles } from '@material-ui/core';
import logoImage from '../../images/login-image.jpg';

export default makeStyles((theme) => ({
  logo: {
    paddingTop: '50px',
    width: '200px',
  },
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.colorNeutral1.main,
  },
  logotypeContainer: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${logoImage})`,
    backgroundSize: 'cover',
    height: '100%',
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4),
  },
  logotypeText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
  },
  formContainer: {
    backgroundColor: theme.palette.colorNeutral1.main,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    alignItems: 'left',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '100px',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
      overflow: 'visible',
      alignItems: 'center',
    },
  },
  form: {
    // width: 380,
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  greeting: {
    fontWeight: '600 !important',
    textAlign: 'center',
    marginTop: theme.spacing(4),
    lineHeight: '3rem',
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  googleButton: {
    marginTop: theme.spacing(6),
    boxShadow: theme.customShadows.widget,
    backgroundColor: 'white',
    width: '100%',
    textTransform: 'none',
  },
  googleButtonCreating: {
    marginTop: 0,
  },
  googleIcon: {
    width: 30,
    marginRight: theme.spacing(2),
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountButton: {
    height: 46,
    textTransform: 'none',
  },
  formDividerContainerTop: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(30),
    },
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.colorDataViz5.main,
  },
  formDividerContainerSpacer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  formDividerContainer: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    display: 'flex',
    alignItems: 'center',
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: `${theme.palette.text.hint}40`,
  },
  errorMessage: {
    textAlign: 'center',
  },
  textFieldUnderline: {
    '&:before': {
      borderBottomColor: theme.palette.primary.light,
    },
    '&:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '&:hover:before': {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
  },
  formButtons: {
    width: '100%',
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetButton: {
    textTransform: 'none',
    fontWeight: 400,
    textAlign: 'left',
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing(2),
    },
  },
}));
