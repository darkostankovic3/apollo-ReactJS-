import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.sideMenuColor.hover,
      '&:hover *, &:focus *': {
        color: theme.palette.colorWhite.main,
      },
      '& > .MuiSvgIcon-root': {
        display: 'inline-block',
      },
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'transparent',
    },
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  linkStacked: {
    flexDirection: 'column',
  },
  linkActive: {
    backgroundColor: `${fade(theme.palette.common.white, 0.24)} !important`,
  },
  linkNested: {
    paddingLeft: '83px',

    '&:hover, &:focus': {
      backgroundColor: theme.palette.sideMenuColor.hover,
    },
  },
  onPhoneScreen: {
    paddingLeft: '62px',
  },
  linkIcon: {
    marginRight: theme.spacing(4),
    color: theme.palette.sideMenuColor.main,
    transition: theme.transitions.create('color'),
    display: 'flex',

    justifyContent: 'center',
    fontSize: '300px',
    '& > .MuiSvgIcon-root': {
      fontSize: '16px',
    },
    minWidth: '16px',
  },
  linkIconActive: {
    color: `${theme.palette.background.light} !important`,
  },
  linkText: {
    padding: 0,
    color: theme.palette.sideMenuColor.main,
    transition: theme.transitions.create(['opacity', 'color']),
    fontSize: 16,
  },
  linkTextActive: {
    color: theme.palette.background.light,
    display: 'block',
    fontWeight: 600,

  },
  linkTextHidden: {
    display: 'block',
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 1,
    backgroundColor:
      theme.palette.type === 'dark' ? 'rgba(151,151,151, .15)' : '#D8D8D880',
  },
  expand: {
    transform: 'rotate(180deg)',
  },
  expandWrapper: {
    color: `${theme.palette.text.secondary}99`,
    flex: '0 0 auto',
  },
  nestedMenu: {
    paddingLeft: 0,
  },
  nestedMenuItem: {
    paddingLeft: 0,
  },
}));
