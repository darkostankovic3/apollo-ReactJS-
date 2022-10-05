import React from 'react';

import { routes, dashboardRoutes } from '../../App.routes';
import { PAGE_HEADER_TYPES } from './PageHeaderTypes.const';
import structure from '../Sidebar/SidebarStructure';
import TextHeader from './TextHeader';
import BreadcrumbHeader from './BreadcrumbHeader';

// styles
import useStyles from './styles';

const PageHeader = () => {
  const classes = useStyles();

  const dashboardRoute = dashboardRoutes.dashboard.path;
  let headerContent;

  const routeInfo = routes.find(({ path }) => window.location.hash.includes(path));
  if (routeInfo) {
    const { name: title, header } = routeInfo;
    const { type, subHeader: subtitle } = header;
    const pageObject = structure.find(({ link }) => window.location.hash.includes(link));

    const breadcrumb = <BreadcrumbHeader dashboardRoute={dashboardRoute} pageObject={pageObject} />;
    const text = <TextHeader title={title} subtitle={subtitle} />;

    headerContent = (() => {
      switch (type) {
        case PAGE_HEADER_TYPES.breadcrumbs:
          return breadcrumb;
        case PAGE_HEADER_TYPES.text:
          return text;
        default:
          return text;
      }
    })();
  }

  return (
    <div className={classes.pageHeaderContainer}>
      {headerContent}
    </div>
  );
};

PageHeader.defaultProps = {};

export default PageHeader;
