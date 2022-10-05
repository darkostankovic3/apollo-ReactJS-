import { isMobile } from 'react-device-detect';
import { PAGE_HEADER_TYPES } from './components/PageHeader/PageHeaderTypes.const';

import Accordions from './pages/accordions/Accordions';
import ApexBarChart from './pages/apexcharts/ApexBarChart';
import ApexClusteredBar from './pages/apexcharts/ApexClusteredBar';
import ApexClusteredColumn from './pages/apexcharts/ApexClusteredColumn';
import ApexColumn from './pages/apexcharts/ApexColumn';
import ApexDonut from './pages/apexcharts/ApexDonut';
import ApexLine from './pages/apexcharts/ApexLine';
import ApexMicroVizGraph from './pages/apexcharts/ApexMicroVizGraph';
import ApexMicroVizKPI from './pages/apexcharts/ApexMicroVizKPI';
import ApexMicroVizTable from './pages/apexcharts/ApexMicroVizTable';
import ApexScatter from './pages/apexcharts/ApexScatter';
import ApexStackedBar from './pages/apexcharts/ApexStackedBar';
import ApexStackedColumn from './pages/apexcharts/ApexStackedColumn';
import ApexTimeline from './pages/apexcharts/ApexTimeline';
import ApolloTables from './pages/tables/ApolloTables';
import AutoComplete from './pages/forms/autocomplete/Autocomplete';
import BreadcrumbsPage from './pages/breadcrumbs/Breadcrumbs';
import Badge from './pages/badge/Badge';
import BannerPage from './pages/banner/Banner';
import Blade from './pages/blade/Blade';
import ButtonsPage from './pages/buttons/ButtonsPage';
import Carousel from './pages/сarousel/Carousel';
import Checkboxes from './pages/forms/pages/Checkboxes';
import Chips from './pages/chips/Chips';
import Colors from './pages/colors/Colors';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardHero from './pages/dashboardhero/DashboardHero';
import Dividers from './pages/dividers/Dividers';
import FileUploadPage from './pages/fileUpload/FileUpload';
import Footers from './pages/footer/Footers';
import GridPage from './pages/grid/Grid';
import HeroWidgetPage from './pages/herowidget/HeroWidget';
import Icons from './pages/icons/Icons';
import InfoModal from './pages/infomodal/InfoModal';
import ListCharts from './pages/listChart/ListCharts';
import MapsGoogle from './pages/maps/Maps';
import Modal from './pages/modal/Modal';
// eslint-disable-next-line import/no-cycle
import Navbar from './pages/nav/Navbar';
import Notifications from './pages/notifications/Notifications';
import PeekPage from './pages/peek/Peek';
import Profile from './pages/profile/Profile';
import Progress from './pages/progress/Progress';
import Radios from './pages/forms/pages/Radios';
import RBarCharts from './pages/rcharts/RBarCharts';
import RBulletCharts from './pages/rcharts/RBulletCharts';
import RClusterBarCharts from './pages/rcharts/RClusterBarCharts';
import RClusterColumnCharts from './pages/rcharts/RClusterColumnCharts';
import RColumnCharts from './pages/rcharts/RColumnCharts';
import RDonutCharts from './pages/rcharts/RDonutCharts';
import RichTextEditor from './pages/richTextEditor/RichTextEditor';
import RLineCharts from './pages/rcharts/RLineCharts';
import RMicroGraphCharts from './pages/rcharts/RMicroGraphCharts';
import RMicroKpiCharts from './pages/rcharts/MicroKpiCharts/RMicroKpiCharts';
import RMicroTableCharts from './pages/rcharts/MicroTableCharts/RMicroTableCharts';
import RScatterCharts from './pages/rcharts/RScatterCharts';
import RStackedBarCharts from './pages/rcharts/RStackedBarCharts';
import RStackedColumnCharts from './pages/rcharts/RStackedColumnCharts';
import Selects from './pages/forms/pages/Selects';
import Sidebar from './pages/sidebar/Sidebar';
import SimpleVerticalCard from './pages/simpleVerticalCard/SimpleVerticalCard';
import Stepper from './pages/stepper/Stepper';
import TabsPage from './pages/tabs/Tabs';
import TagsPage from './pages/tags/Tags';
import TextAreas from './pages/forms/pages/TextAreas';
import TextFields from './pages/forms/pages/TextFields';
import Tooltips from './pages/tooltips/Tooltips';
import TreeViewPage from './pages/treeView/TreeView';
import TypographyPage from './pages/typography/Typography';
import VectorMaps from './pages/maps/VectorMap';
import WidgetPage from './pages/widget/Widget';

const dummySubheader = 'Example page subtitle content';

export const dashboardRoutes = {
  dashboard: {
    name: 'Dashboard',
    component: Dashboard,
    path: '/app/dashboard/',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: 'Apollo monitoring dashboard template.',
    },
  },
};

export const foundationRoutes = {
  colors: {
    name: 'Colors',
    component: Colors,
    path: '/app/core/colors',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  grid: {
    name: 'Grids',
    component: GridPage,
    path: '/app/core/grid',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  icons: {
    name: 'Icons',
    component: Icons,
    path: '/app/core/icons',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  typography: {
    name: 'Typography',
    component: TypographyPage,
    path: '/app/core/typography',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const componentRoutes = {
  // tooltips and peek should only be shown if not on mobile
  ...!isMobile ? {
    peeks: {
      name: 'Peeks',
      component: PeekPage,
      path: '/app/ui/peek',
      header: {
        type: PAGE_HEADER_TYPES.text,
        subHeader: dummySubheader,
      },
    },
    tooltips: {
      name: 'Tooltips',
      component: Tooltips,
      path: '/app/ui/tooltips',
      header: {
        type: PAGE_HEADER_TYPES.text,
        subHeader: dummySubheader,
      },
    },
  } : {},
  accordion: {
    name: 'Accordions',
    component: Accordions,
    path: '/app/ui/accordions',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  banners: {
    name: 'Banners',
    component: BannerPage,
    path: '/app/ui/banner',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  badges: {
    name: 'Badges',
    component: Badge,
    path: '/app/ui/badge',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  blades: {
    name: 'Blades',
    component: Blade,
    path: '/app/ui/blade',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  breadcrumbs: {
    name: 'Breadcrumbs',
    component: BreadcrumbsPage,
    path: '/app/ui/breadcrumbs',
    header: {
      type: PAGE_HEADER_TYPES.breadcrumbs,
    },
  },
  buttons: {
    name: 'Buttons',
    component: ButtonsPage,
    path: '/app/ui/buttons',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  cards: {
    name: 'Cards (Widgets)',
    component: WidgetPage,
    path: '/app/ui/widget',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  carousels: {
    name: 'Carousels',
    component: Carousel,
    path: '/app/ui/carousel',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  chips: {
    name: 'Chips',
    component: Chips,
    path: '/app/ui/chips',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  dividers: {
    name: 'Dividers',
    component: Dividers,
    path: '/app/ui/dividers',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  fileUpload: {
    name: 'File Upload',
    component: FileUploadPage,
    path: '/app/ui/fileUpload',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  footers: {
    name: 'Footers',
    component: Footers,
    path: '/app/ui/footers',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  heroWidgets: {
    name: 'Hero Widgets',
    component: HeroWidgetPage,
    path: '/app/ui/_herowidget',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  infoModals: {
    name: 'Info Modals',
    component: InfoModal,
    path: '/app/ui/infomodal',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  listCharts: {
    name: 'List Charts',
    component: ListCharts,
    path: '/app/ui/listchart',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  modals: {
    name: 'Modals',
    component: Modal,
    path: '/app/ui/modal',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  navigationBars: {
    name: 'Navigation Bar',
    component: Navbar,
    path: '/app/ui/navbar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  progressIndicators: {
    name: 'Progress Indicators',
    component: Progress,
    path: '/app/ui/progress',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  richTextEditors: {
    name: 'Rich Text Editors',
    component: RichTextEditor,
    path: '/app/ui/richTextEditor',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  sideBar: {
    name: 'Sidebar',
    component: Sidebar,
    path: '/app/ui/sidebar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  simpleVerticalCards: {
    name: 'Simple Vertical Cards',
    component: SimpleVerticalCard,
    path: '/app/ui/simpleVerticalCard',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  snackbars: {
    name: 'Snackbars (toasts)',
    component: Notifications,
    path: '/app/ui/snackbar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  steppers: {
    name: 'Steppers',
    component: Stepper,
    path: '/app/ui/stepper',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  tabs: {
    name: 'Tabs',
    component: TabsPage,
    path: '/app/ui/tabs',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  tags: {
    name: 'Tags',
    component: TagsPage,
    path: '/app/ui/tags',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  treeview: {
    name: 'Tree Views',
    component: TreeViewPage,
    path: '/app/ui/treeview',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const formRoutes = {
  autocomplete: {
    name: 'AutoComplete',
    component: AutoComplete,
    path: '/app/forms/autocomplete',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  checkboxes: {
    name: 'Checkboxes',
    component: Checkboxes,
    path: '/app/forms/checkboxes',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  radio: {
    name: 'Radios',
    component: Radios,
    path: '/app/forms/radios',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  selects: {
    name: 'Selects',
    component: Selects,
    path: '/app/forms/selects',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  textAreas: {
    name: 'Text Areas',
    component: TextAreas,
    path: '/app/forms/textareas',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  textFields: {
    name: 'Text Fields',
    component: TextFields,
    path: '/app/forms/textfields',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const mapRoutes = {
  googleMaps: {
    name: 'Google Maps',
    component: MapsGoogle,
    path: '/app/maps/google',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  vectorMaps: {
    name: 'Vector Maps',
    component: VectorMaps,
    path: '/app/maps/vector',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const tableRoutes = {
  table: {
    name: 'Tables',
    component: ApolloTables,
    path: '/app/tables',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const apexRoutes = {
  apexBarCharts: {
    name: 'Apex Bar Charts',
    component: ApexBarChart,
    path: '/app/apexcharts/ApexBarChart',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexClusteredBar: {
    name: 'Apex Clustered Bar Charts',
    component: ApexClusteredBar,
    path: '/app/apexcharts/ApexClusteredBar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexClusteredColumn: {
    name: 'Apex Clustered Column Charts',
    component: ApexClusteredColumn,
    path: '/app/apexcharts/ApexClusteredColumn',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexColumn: {
    name: 'Apex Column Charts',
    component: ApexColumn,
    path: '/app/apexcharts/ApexColumn',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexDonut: {
    name: 'Apex Donut Charts',
    component: ApexDonut,
    path: '/app/apexcharts/ApexDonut',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexLine: {
    name: 'Apex Line Charts',
    component: ApexLine,
    path: '/app/apexcharts/ApexLine',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexMicroVizKPI: {
    name: 'Apex Micro Viz : KPI',
    component: ApexMicroVizKPI,
    path: '/app/apexcharts/ApexMicroVizKPI',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexMicroVizGraph: {
    name: 'Apex Micro Viz : Graph',
    component: ApexMicroVizGraph,
    path: '/app/apexcharts/ApexMicroVizGraph',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexMicroVizTable: {
    name: 'Apex Micro Viz : Table',
    component: ApexMicroVizTable,
    path: '/app/apexcharts/ApexMicroVizTable',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexScatter: {
    name: 'Apex Scatter Charts',
    component: ApexScatter,
    path: '/app/apexcharts/ApexScatter',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexStackedBar: {
    name: 'Apex Stacked Bar Charts',
    component: ApexStackedBar,
    path: '/app/apexcharts/ApexStackedBar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexStackedColumn: {
    name: 'Apex Stacked Column Charts',
    component: ApexStackedColumn,
    path: '/app/apexcharts/ApexStackedColumn',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  apexTimeline: {
    name: 'Apex Timeline Charts',
    component: ApexTimeline,
    path: '/app/apexcharts/ApexTimeline',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const rechartsRoutes = {
  rechartsBar: {
    name: 'Recharts Bar Charts',
    component: RBarCharts,
    path: '/app/recharts/bar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsBullet: {
    name: 'Recharts Bullet Charts',
    component: RBulletCharts,
    path: '/app/recharts/bullet',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsClusteredBar: {
    name: 'Recharts Clustered Bar Charts',
    component: RClusterBarCharts,
    path: '/app/recharts/clusterBar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsClusteredColumn: {
    name: 'Recharts Clustered Column Charts',
    component: RClusterColumnCharts,
    path: '/app/recharts/clusterColumn',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsColumn: {
    name: 'Recharts Column Charts',
    component: RColumnCharts,
    path: '/app/recharts/column',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsDonutCharts: {
    name: 'Recharts Donut Charts',
    component: RDonutCharts,
    path: '/app/recharts/donut',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsLine: {
    name: 'Recharts Line Charts',
    component: RLineCharts,
    path: '/app/recharts/line',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsMicroKpi: {
    name: 'Recharts Micro Viz : KPI',
    component: RMicroKpiCharts,
    path: '/app/recharts/kpi',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsMicroGraph: {
    name: 'Recharts Micro Viz : Graph',
    component: RMicroGraphCharts,
    path: '/app/recharts/graph',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsMicroTable: {
    name: 'Recharts Micro Viz : Table',
    component: RMicroTableCharts,
    path: '/app/recharts/table',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsScatter: {
    name: 'Recharts Scatter Charts',
    component: RScatterCharts,
    path: '/app/recharts/scatter',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsStackedBar: {
    name: 'Recharts Stacked Bar Charts',
    component: RStackedBarCharts,
    path: '/app/recharts/stackedBar',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  rechartsStackedColumn: {
    name: 'Recharts Stacked Column Charts',
    component: RStackedColumnCharts,
    path: '/app/recharts/stackedColumn',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
};

export const pageRoutes = {
  dashboardHero: {
    name: 'Dashboards Hero',
    component: DashboardHero,
    path: '/app/dashboardhero/',
    header: {
      type: PAGE_HEADER_TYPES.text,
      subHeader: dummySubheader,
    },
  },
  profile: {
    name: 'Profile',
    component: Profile,
    path: '/app/profile',
    header: {
      type: PAGE_HEADER_TYPES.breadcrumbs,
    },
  },
};

export function createRouteInfo(routeInfo) {
  const routes = Object.entries(routeInfo).map((routeItem) => routeItem[1]);
  const alphabetizedRoutes = routes.sort((a, b) => ((a.name > b.name) ? 1 : -1));
  return alphabetizedRoutes;
}

export const routes = [
  ...createRouteInfo(dashboardRoutes),
  ...createRouteInfo(foundationRoutes),
  ...createRouteInfo(componentRoutes),
  ...createRouteInfo(formRoutes),
  ...createRouteInfo(mapRoutes),
  ...createRouteInfo(tableRoutes),
  ...createRouteInfo(apexRoutes),
  ...createRouteInfo(rechartsRoutes),
  ...createRouteInfo(pageRoutes),
];

export const redirects = [
  {
    from: '/app/core',
    to: foundationRoutes.colors.path,
  },
  {
    from: '/app/ui',
    to: componentRoutes.accordion.path,
  },
  {
    from: '/app/forms',
    to: formRoutes.autocomplete.path,
  },
  {
    from: '/app/maps',
    to: mapRoutes.googleMaps.path,
  },
  {
    from: '/app/apexcharts',
    to: apexRoutes.apexBarCharts.path,
  },
  {
    from: '/app/recharts',
    to: rechartsRoutes.rechartsBar.path,
  },
];
