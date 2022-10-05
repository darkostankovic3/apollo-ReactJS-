import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

import topWave from '../../images/topwave.svg';

export default makeStyles((theme) => ({
  logotype: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.main : 'white',
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  appBar: {
    width: '100%',
    height: '55px',
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.gradient.main,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none',
    borderBottom: `1px solid ${fade(theme.palette.common.white, 0.24)}`,
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(10),
    backgroundImage: `url(${topWave})`,
    backgroundRepeat: 'no-repeat',
    minHeight: theme.spacing(14),
  },
  mobileToolbar: {
    paddingRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  titleImage: {
    paddingLeft: theme.spacing(1),
    fontWeight: `${500} !important`,
  },
  boldedTitle: {
    fontWeight: 700,
  },
  search: {
    position: 'relative',
    paddingLeft: theme.spacing(4),
    width: theme.spacing(14),
    height: theme.spacing(14),
    backgroundColor: fade(theme.palette.common.black, 0),
    transition: theme.transitions.create(['background-color', 'width']),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: fade(theme.palette.common.white, 0.24),
    },
  },
  searchFocused: {
    backgroundColor: fade(theme.palette.common.white, 0.24),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: theme.spacing(2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create('right'),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  searchIconOpened: {
    right: theme.spacing(1.25),
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: '100%',
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerMenu: {
    marginTop: theme.spacing(7),
  },
  headerMenuList: {
    padding: `calc(${theme.spacing(4)}px - 6px) 0`,
  },
  headerMenuItem: {
    '&:hover, &:focus': {
      backgroundColor: theme.palette.colorVeryLightBlue.main,
      color: theme.palette.text.black,
    },
  },
  headerMenuButton: {
    padding: theme.spacing(0.5),
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2),
  },
  headerIcon: {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.35)',
  },
  headerIconCollapse: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.main : 'white',
  },
  profileMenu: {
    minWidth: 265,
    top: '27px !important',
    borderRadius: '0 0 4px 4px',
    boxShadow: `0 4px 24px 0 ${fade(theme.palette.common.black, 0.16)}`,
  },
  profileMenuUser: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    margin: `0 ${theme.spacing(4)}px`,
    marginBottom: theme.spacing(2),
  },
  profileMenuUserContainer: {
    borderBottom: `1px solid ${fade(theme.palette.common.black, 0.16)}`,
  },
  profileMenuItem: {
    color: theme.palette.text.black,
  },
  profileMenuIcon2: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
    },
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.black,
    width: theme.spacing(6),
  },
  profileHelpIcon: {
    marginLeft: '5px',
    marginRight: '3px',
  },
  profileLink: {
    display: 'flex',
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  profileMenuOptions: {
    '&:hover, &:focus': {
      color: theme.palette.common.black,
    },
  },
  logOutButtonContainer: {
    paddingBottom: 0,
  },
  messageNotification: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.background.light,
    },
  },
  messageNotificationSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  messageNotificationBodySide: {
    alignItems: 'flex-start',
    marginRight: 0,
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: 'none',
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2),
  },
  // menuNotification
  mN_Container: {
    marginTop: theme.spacing(7),
  },
  mN_Paper: {
    [theme.breakpoints.up('md')]: {
      minWidth: 426,
      maxWidth: 426,
    },
    top: '27px !important',
    borderRadius: '0 0 4px 4px',
    boxShadow: `0 4px 24px 0 ${fade(theme.palette.common.black, 0.16)}`,
  },
  mN_Body: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  mN_Title_Container: {
    alignItems: 'center',
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    display: 'flex',
  },
  mN_Title: {
    color: theme.palette.colorBlack.main,
    flex: 1,
  },
  mN_NoNotifications: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(16),
    paddingTop: theme.spacing(8),
    '& .message': {
      color: theme.palette.colorNeutral7.main,
      fontSize: 16,
    },
  },
  mN_Item: {
    height: '100%',
    maxWidth: '430px',
    display: 'inline-block',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(1),
    '&:hover, &:focus': {
      backgroundColor: theme.palette.background.light,
      '& .message': {
        color: theme.palette.colorBlack.main,
      },
      '&::before': {
        content: 'none',
      },
    },
    '&::before': {
      // This is the right one according to zeplin, but is barely visible
      // background: theme.palette.colorNeutral1.main,
      background: theme.palette.colorNeutral3.main,
      content: '""',
      height: '1px',
      left: theme.spacing(8),
      position: 'absolute',
      top: 0,
      width: 'calc(100%)',
    },
  },
  mN_Item_HeaderTimeControls: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flex: 1,
    width: '100%',
    minHeight: '48px',
  },
  mNItemHeaderTimeControlsHeader: {
    color: theme.palette.colorBlack.main,
    flex: 1,
    minWidth: '150px',
    maxWidth: '208px',
  },
  mNItemHeaderTimeControlsHeader__unread: {
    color: theme.palette.colorBlack.main,
    position: 'relative',
    '&::before': {
      background: 'red',
      content: '""',
      position: 'absolute',
      height: '10px',
      width: '10px',
      top: '50%',
      marginTop: '-6px',
      borderRadius: '50%',
      left: '-21px',
    },
  },
  mN_Item_HeaderTimeControls_Time: {
    flex: 0,
    '-ms-flex': 1,
  },
  mN_Item_HeaderTimeControls_Controls: {
    paddingLeft: theme.spacing(3),
    flex: 0,
    minWidth: '108px',
  },
  mNItemMessage: {
    flex: 1,
    width: '100%',
    whiteSpace: 'normal',
    color: theme.palette.colorNeutral7.main,
  },
  mNItemMessage__unread: {
    color: theme.palette.colorNeutral8.main,
  },
  topNavIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(14),
    height: theme.spacing(14),
    transition: theme.transitions.create(['background-color']),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: fade(theme.palette.common.white, 0.24),
      borderRadius: '0',
    },
  },
  profileButton: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    width: theme.spacing(40),
    height: theme.spacing(14),
    paddingLeft: '21px',
    transition: theme.transitions.create(['background-color']),
    '&:hover, &:focus': {
      cursor: 'pointer',
      backgroundColor: fade(theme.palette.common.white, 0.24),
    },
  },
  iconClicked: {
    backgroundColor: fade(theme.palette.common.white, 0.24),
  },
}));
