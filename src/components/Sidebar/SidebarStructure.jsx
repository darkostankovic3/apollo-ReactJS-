import React from 'react';
import {
  Dashboard,
  InvertColors as FoundationIcon,
  Widgets as ComponentsIcon,
  Assignment as FormsIcon,
  Public as MapsIcon,
  TableChart as TablesIcon,
  InsertChart as ApexChartsIcon,
  PieChart as RechartsChartsIcon,
  InsertDriveFile as PagesIcon,
} from '@material-ui/icons';

import {
  createRouteInfo,
  dashboardRoutes,
  foundationRoutes,
  componentRoutes,
  formRoutes,
  mapRoutes,
  tableRoutes,
  apexRoutes,
  rechartsRoutes,
  pageRoutes,
} from '../../App.routes';

// input is expecting an object of route information objects
function createSideBarItems(routeInfo) {
  return createRouteInfo(routeInfo).map(({ name, path }) => ({ label: name, link: path }));
}

const structure = [
  {
    id: 50,
    label: dashboardRoutes.dashboard.name,
    link: dashboardRoutes.dashboard.path,
    icon: <Dashboard />,
  },
  {
    id: 5,
    label: 'Foundation',
    link: '/app/core',
    icon: <FoundationIcon />,
    children: createSideBarItems(foundationRoutes),
  },
  {
    id: 0,
    label: 'Components',
    link: '/app/ui',
    icon: <ComponentsIcon />,
    children: createSideBarItems(componentRoutes),
  },
  {
    id: 8,
    label: 'Forms',
    link: '/app/forms',
    icon: <FormsIcon />,
    children: createSideBarItems(formRoutes),
  },
  {
    id: 10,
    label: 'Maps',
    link: '/app/maps',
    icon: <MapsIcon />,
    children: createSideBarItems(mapRoutes),
  },
  {
    id: 6,
    label: tableRoutes.table.name,
    link: tableRoutes.table.path,
    icon: <TablesIcon />,
  },
  {
    id: 39,
    label: 'Apex Charts',
    link: '/app/apexcharts',
    icon: <ApexChartsIcon />,
    children: createSideBarItems(apexRoutes),
  },
  {
    id: 51,
    label: 'Recharts Charts',
    link: '/app/recharts',
    icon: <RechartsChartsIcon />,
    children: createSideBarItems(rechartsRoutes),
  },
  {
    id: 15,
    label: 'Pages',
    link: '',
    icon: <PagesIcon />,
    children: createSideBarItems(pageRoutes),
  },
];

export default structure;
