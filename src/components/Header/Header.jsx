import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  // InputBase, // Commented out for now, see FRESH-399 - Kevin 3030/09/28
  Menu,
  MenuItem,
  useTheme,
} from '@material-ui/core';

import {
  Email as EmailIcon,
  Settings as SettingsIcon,
  Delete as DeleteIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as AccountIcon,
  // Search as SearchIcon, // Commented out for now, see FRESH-399 - Kevin 3030/09/28
  ArrowDropDown as ArrowDownIcon,
} from '@material-ui/icons';
import classNames from 'classnames';

// helpers
import { getText } from '../../utils/randUtils';

// styles
import useStyles from './styles';

// components
import {
  Badge, Typography, Tooltip, Button,
} from '../Wrappers/Wrappers';
import Notification from '../Notification/Notification';
import Banner from '../Banner/Banner';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';
import { useUserDispatch, signOut } from '../../context/UserContext';

// eslint-disable-next-line import/no-cycle
import { pageRoutes } from '../../App.routes';

let notifications = [
  {
    id: 0,
    header: 'Header',
    message: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Sed ullamcorper ven.',
    time: '3:41 PM',
    read: false,
  },
  {
    id: 1,
    header: 'Header',
    message: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Sed ullamcorper ven.',
    time: 'Yesterday',
    read: false,
  },
  {
    id: 2,
    header: 'Header',
    message: `
      Lorem ipsum dolor sit amet, consecte adipiscing elit. Sed ullamcorper ven.
      Lorem ipsum dolor sit amet, consecte adipiscing elit. Sed ullamcorper ven.
    `,
    time: 'Apr 14',
    read: true,
  },
  {
    id: 3,
    header: 'Header',
    message: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Sed ullamcorper ven.',
    time: 'Apr 13',
    read: true,
  },
];

const banners = [
  {
    id: 1,
    color: 'error',
    type: 'info',
    bannerType: 'error',
    message: 'Error Banner',
    bannerMessage: 'This is a banner message with an error!',
  },
  {
    id: 2,
    color: 'success',
    type: 'notification',
    bannerType: 'success',
    message: 'Success Banner',
    bannerMessage: 'This is a banner message with success!',
  },
  {
    id: 3,
    color: 'warning',
    type: 'e-commerce',
    bannerType: 'warning',
    message: 'Warning Banner',
    bannerMessage: 'This is a banner message with a warning!',
  },
  {
    id: 4,
    color: 'message',
    type: 'e-commerce',
    bannerType: 'message',
    message: 'Multiline/Message Banner',
    bannerMessage: `This is a banner message with info! A lot of info in fact! So much that it goes to the next line and is now a multiline banner message. Have some lorem ipsum to fully illustrate a long message. ${getText('multi-line-banner')}`,
  },
];

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { position } = props;
  // global
  const layoutState = useLayoutState();
  const layoutDispatch = useLayoutDispatch();
  const userDispatch = useUserDispatch();

  // local
  const [bannersMenu, setBannersMenu] = useState(null);
  const [isBannerToggle, setToggleBanner] = useState(0);
  /* eslint-disable no-unused-vars */
  const [isBannersUnread, setIsBannersUnread] = useState(true);
  const [isBannerMessage, setBannerMessage] = useState(0);
  const [isBannerType, setBannerType] = useState('success');
  const [notificationsMenu, setNotificationsMenu] = useState(null);
  /* eslint-enable no-unused-vars */
  const [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  const [profileMenu, setProfileMenu] = useState(null);
  // Commented out for now, see FRESH-399 - Kevin 3030/09/28
  // const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSmall, setSmall] = useState(false);

  const [updateNotifications, setUpdateNotifications] = useState(false);
  const [anchorSettingsMenuEl, setAnchorSettingsMenuEl] = React.useState(null);

  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  useEffect(() => {
    handleWindowWidthChange();
    window.addEventListener('resize', handleWindowWidthChange);
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  const viewAllNotificationItems = () => {
    // console.log('TODO viewAllNotificationItems');
  };

  const markNotificationItem = (e, n) => {
    notifications[n].read = !notifications[n].read;
    setUpdateNotifications(!updateNotifications);
  };

  const markAllNotificationItemsAsRead = () => {
    notifications.forEach((msg) => {
      // eslint-disable-next-line no-param-reassign
      msg.read = true;
    });
  };

  const deleteNotificationItem = (e, n) => {
    notifications.splice(n, 1);
    setUpdateNotifications(!updateNotifications);
  };

  const deleteAllNotificationItems = () => {
    notifications = [];
  };

  function Notifications() {
    if (!notifications.length) {
      return (
        <div className={classes.mN_NoNotifications}>
          <NotificationsIcon style={{ fontSize: 40 }} />
          <span className="message">All squeaky clean</span>
        </div>
      );
    }

    return notifications.map((message, i) => {
      let { mNItemHeaderTimeControlsHeader } = classes;
      let { mNItemMessage } = classes;

      if (!message.read) {
        mNItemHeaderTimeControlsHeader
          += ` ${classes.mNItemHeaderTimeControlsHeader__unread}`;
        mNItemMessage += ` ${classes.mNItemMessage__unread}`;
      }

      return (
        <MenuItem key={message.id} className={classes.mN_Item}>
          <div className={`${classes.mN_Item_HeaderTimeControls}`}>
            <Typography
              variant="h5"
              weight={message.read ? 'normal' : 'bold'}
              className={`${mNItemHeaderTimeControlsHeader}`}
            >
              {message.header}
            </Typography>
            <Typography
              variant="h6"
              className={`time ${classes.mN_Item_HeaderTimeControls_Time}`}
            >
              {message.time}
            </Typography>
            <div
              className={`controls ${classes.mN_Item_HeaderTimeControls_Controls}`}
            >
              <Tooltip
                title={message.read ? 'Mark as unread' : 'Mark as read'}
                placement="top"
                arrow
              >
                <IconButton
                  onClick={(e) => {
                    markNotificationItem(e, i);
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Remove" placement="top" arrow>
                <IconButton
                  onClick={(e) => {
                    deleteNotificationItem(e, i);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <Typography variant="h6" className={`message ${mNItemMessage}`}>
            {message.message}
          </Typography>
        </MenuItem>
      );
    });
  }

  return (
    <AppBar position={position || 'fixed'} className={classes.appBar}>
      <Toolbar
        className={classNames(
          classes.toolbar,
          isSmall && classes.mobileToolbar,
        )}
      >
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse,
          )}
        >
          {(!layoutState.isSidebarOpened && isSmall)
            || (layoutState.isSidebarOpened && !isSmall) ? (
              null
            ) : (
              <MenuIcon
                classes={{
                  root: classNames(
                    classes.headerIcon,
                    classes.headerIconCollapse,
                  ),
                }}
              />
            )}
        </IconButton>
        {!isSmall
          && (
            <Typography className={classes.titleImage}>
              IQVIA&trade;
              <span className={classes.boldedTitle}>
                {' '}
                Apollo React Dashboard Theme
              </span>
            </Typography>
          )}
        <div className={classes.grow} />

        {/* SEARCH BAR */}
        {/* Commented out for now, see FRESH-399 - Kevin 2020/09/28 */}
        {/* <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            role="button"
            tabIndex={0}
            onKeyDown={() => setSearchOpen(!isSearchOpen)}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div> */}

        {/*
          /////////////////////////////////////////////////
          /// MessageIcon to test Apollo Notifications ///
          /////////////////////////////////////////////////
          */}
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="message"
          onClick={(e) => {
            setBannersMenu(e.currentTarget);
            setIsBannersUnread(false);
          }}
          className={classNames(classes.headerMenuButton, classes.topNavIcons)}
        >
          <Badge>
            <MessageIcon />
          </Badge>
        </IconButton>

        <div className={classNames(classes.topNavIcons, (notificationsMenu ? classes.iconClicked : ''))}>
          <IconButton
            color="inherit"
            aria-haspopup="true"
            aria-controls="notification-menu"
            onClick={(e) => {
              setNotificationsMenu(e.currentTarget);
              setIsNotificationsUnread(false);
            }}
            className={classNames(classes.headerMenuButton, classes.topNavIcons)}
          >
            <Badge
              badgeContent={isNotificationsUnread ? notifications.length : null}
              color="inherit"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>

        <div
          className={classNames(
            (
              !isSmall ? classes.profileButton : classes.topNavIcons
            ),
            (
              profileMenu ? classes.iconClicked : ''
            ),
          )}
        >
          <Typography
            block
            variant="body2"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={(e) => setProfileMenu(e.currentTarget)}
          >
            {
              !isSmall
                ? (
                  <Typography variant="body2" weight="bold">
                    Michael Scott
                  </Typography>
                )
                : <AccountIcon />
            }
          </Typography>
          {
            !isSmall
            && (
              <IconButton
                aria-haspopup="true"
                color="inherit"
                aria-controls="profile-menu"
                onClick={(e) => setProfileMenu(e.currentTarget)}
                className={classes.profileMenuIcon2}
              >
                <ArrowDownIcon />
              </IconButton>
            )
          }
        </div>

        <Menu
          id="notification-menu"
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.mN_Container}
          classes={{ paper: classes.mN_Paper }}
          MenuListProps={{ className: classes.mN_Body }}
          disableAutoFocusItem
        >
          <div className={classes.mN_Title_Container}>
            <Typography variant="h3" weight="bold" className={classes.mN_Title}>
              Notifications
            </Typography>
            <IconButton
              aria-controls="settings-menu"
              aria-haspopup="true"
              onClick={(e) => setAnchorSettingsMenuEl(e.currentTarget)}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="settings-menu"
              anchorEl={anchorSettingsMenuEl}
              keepMounted
              open={Boolean(anchorSettingsMenuEl)}
              onClose={() => setAnchorSettingsMenuEl(null)}
            >
              <MenuItem
                onClick={() => {
                  viewAllNotificationItems();
                  setAnchorSettingsMenuEl(null);
                }}
              >
                View all
              </MenuItem>
              <MenuItem
                onClick={() => {
                  deleteAllNotificationItems();
                  setAnchorSettingsMenuEl(null);
                }}
              >
                Remove all
              </MenuItem>
              <MenuItem
                onClick={() => {
                  markAllNotificationItemsAsRead();
                  setAnchorSettingsMenuEl(null);
                }}
              >
                Mark all as read
              </MenuItem>
            </Menu>
          </div>

          <Notifications />
        </Menu>
        <Menu
          id="banners-menu"
          open={Boolean(bannersMenu)}
          anchorEl={bannersMenu}
          onClose={() => {
            setBannersMenu(null);
            setToggleBanner(0);
          }}
          className={classes.headerMenu}
          MenuListProps={{ className: classes.headerMenuList }}
          disableAutoFocusItem
        >
          {banners.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={() => setBannersMenu(null)}
              disableGutters
              className={classes.headerMenuItem}
            >
              <Notification
                {...notification}
                typographyVariant="inherit"
                onClick={() => {
                  setToggleBanner(1);
                  setBannerType(notification.bannerType);
                  setBannerMessage(notification.bannerMessage);
                }}
              />
            </MenuItem>
          ))}
        </Menu>

        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classNames(classes.profileMenuUser, classes.profileMenuUserContainer)}>
            <Typography
              variant="h4"
              style={{
                fontWeight: '600',
                fontSize: '16px',
                color: 'black',
              }}
            >
              Michael Scott
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              weight="normal"
              component="p"
              href="https://IQVIA.com"
              style={{
                fontSize: '14px',
              }}
            >
              michael.scott@iqvia.com
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
              classes.profileMenuOptions,
            )}
          >
            <Link to={pageRoutes.profile.path} className={classes.profileLink}>
              <AccountIcon className={classes.profileMenuIcon} />
              {' '}
              Profile
            </Link>
          </MenuItem>

          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
              classes.profileMenuOptions,
            )}
          >
            <i className={`fa fa-life-bouy ${classes.profileMenuIcon} ${classes.profileHelpIcon}`} />
            {' '}
            Help
          </MenuItem>
          <div className={classNames(classes.profileMenuUser, classes.logOutButtonContainer)}>
            <Button
              className={classNames(classes.profileMenuLink)}
              color="tertiary"
              variant="contained"
              fullWidth
              onClick={() => signOut(userDispatch, props.history)}
            >
              Log Out
            </Button>
          </div>
        </Menu>
      </Toolbar>
      <Banner
        open={isBannerToggle}
        type={isBannerType}
        message="This is a message"
        bannerMessage={isBannerMessage}
        close={() => setToggleBanner(0)}
      />
    </AppBar>
  );
}
