import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(6),
    borderRadius: '4px',
    backgroundImage: theme.palette.gradient.main,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    '&::after': {
      backgroundImage: theme.palette.gradient.main,
      borderRadius: '4px',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(6),
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    },
  },
  titleDescriptionWrapper: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  buttonDashedBorder: {
    border: '1px dashed',
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  buttonRoot: {
    margin: '4px 4px 10px 0',
    padding: '4px 8px',
  },
  menuWrapper: {
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: '95px',
      marginLeft: theme.spacing(6),
    },
  },
  formControl: {
    width: '100%',

    '& > div:after': {
      display: 'none',
    },

    [theme.breakpoints.up('md')]: {
      width: 'auto',
      minWidth: '95px',
    },
  },
  labelRoot: {
    color: theme.palette.primary.main,
  },
  selectRoot: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.colorWhite.main,
    border: `1px solid ${theme.palette.colorNeutral4.main}`,
    borderRadius: '4px',
    boxShadow: theme.customShadows.widgetButton,

    '&:hover': {
      border: `1px solid ${theme.palette.colorNeutral4.main}`,
      borderRadius: '4px',
      boxShadow: theme.customShadows.widgetButton,
    },

    '&:focus': {
      backgroundColor: theme.palette.colorWhite.main,
      borderRadius: '4px',
      boxShadow: theme.customShadows.widgetButton,
    },
  },
  selectIcon: {
    fill: theme.palette.primary.main,
  },
}
));
