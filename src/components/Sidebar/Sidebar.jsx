import React, { useState, useEffect } from 'react';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import {
  useTheme, Drawer, IconButton, List, useMediaQuery,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

// styles
import useStyles from './styles';

// components
import SidebarLink from './components/SidebarLink/SidebarLink';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';

function Sidebar({ location, structure }) {
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  // global
  const { isSidebarOpened } = useLayoutState();
  const layoutDispatch = useLayoutDispatch();

  // local
  const [isPermanent, setPermanent] = useState(true);

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    if (value && !isPermanent) toggleSidebar(layoutDispatch);
  };

  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: !isPermanent ? !isSidebarOpened : isSidebarOpened,
        [classes.drawerClose]: !isPermanent ? isSidebarOpened : !isSidebarOpened,
        [classes.mobileDrawerOpen]: !isPermanent && !isLargeScreen
          ? !isSidebarOpened
          : isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: !isPermanent
            ? !isSidebarOpened
            : isSidebarOpened,
          [classes.drawerClose]: !isPermanent
            ? isSidebarOpened
            : !isSidebarOpened,
          [classes.mobileDrawerOpen]: !isPermanent && !isLargeScreen
            ? !isSidebarOpened
            : isSidebarOpened,
        }),
      }}
      open={!isPermanent ? !isSidebarOpened : isSidebarOpened}
      onClose={toggleDrawer(true)}

    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton
          onClick={() => toggleSidebar(layoutDispatch)}
          classes={{ root: classes.backButtonRoot }}
        >
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List
        className={classes.sidebarList}
        classes={{ padding: classes.padding }}

      >
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={!isPermanent ? !isSidebarOpened : isSidebarOpened}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...link}
            toggleDrawer={toggleDrawer(true)}
          />
        ))}
      </List>
    </Drawer>
  );
}

export default withRouter(Sidebar);
