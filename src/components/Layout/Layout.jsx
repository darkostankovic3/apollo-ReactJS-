/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import classnames from 'classnames';
import Icon from '@mdi/react';
import {
  mdiFacebookBox as FacebookIcon,
  mdiTwitterBox as TwitterIcon,
  mdiGithubBox as GithubIcon,
} from '@mdi/js';
import {
  IconButton,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

// styles
import useStyles from './styles';
import Header from '../Header/Header';
import PageHeader from '../PageHeader/PageHeader';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import {
  Link,
  Tooltip,
} from '../Wrappers/Wrappers';

import { routes, redirects } from '../../App.routes';

import Error from '../../pages/error/Error';

// context
import { useLayoutState } from '../../context/LayoutContext';

// Sidebar structure
import structure from '../Sidebar/SidebarStructure';

function SocialMedia({ title, icon, last = false }) {
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const lastClass = last ? classes.footerGithubIcon : '';

  return (
    <Tooltip
      placement="top"
      disableFocusListener
      disableTouchListener
      title={title}
    >
      <span>
        <Link href="#" target="_blank">
          <IconButton
            aria-label={title}
            classes={{ root: !isLargeScreen ? classes.footerIconButton : lastClass }}
          >
            <Icon path={icon} size={1} color="#6E6E6E99" />
          </IconButton>
        </Link>
      </span>
    </Tooltip>
  );
}

function Layout({ history }) {
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  // global
  const layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <Header history={history} position="fixed" />
      <Sidebar structure={structure} />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <PageHeader />
        <Switch>
          {/* Declare all the routes */}
          {routes.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              component={component}
            />
          ))}
          {/* Redirects */}
          {redirects.map(({ from, to }) => (
            <Route
              exact
              key={`redirect-${from}`}
              path={from}
              render={() => <Redirect to={to} />}
            />
          ))}
          <Route component={Error} />
        </Switch>
        <Footer>
          <div
            className={`${classes.footerLinkContainer} ${!isLargeScreen ? classes.responsiveFooterLinks : ''}`}
          >
            {
              isLargeScreen
              && (
                <Link
                  color="primary"
                  target="_blank"
                  className={classes.link}
                >
                  Apollo React Next Theme
                </Link>
              )
            }
            <Link
              color="primary"
              target="_blank"
              className={classes.link}
            >
              About Us
            </Link>

          </div>
          <div
            className={`${classes.footerLinkContainer} ${!isLargeScreen ? classes.responsiveFooterLinks : ''}`}
          >
            <SocialMedia title="Facebook" icon={FacebookIcon} />
            <SocialMedia title="Twitter" icon={TwitterIcon} />
            <SocialMedia title="Github" icon={GithubIcon} last />
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default withRouter(Layout);
