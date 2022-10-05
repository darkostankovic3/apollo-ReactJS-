import React from 'react';
import { Grid } from '@material-ui/core';

// components
import Widget from '../../components/Widget/Widget';
import { Typography } from '../../components/Wrappers/Wrappers';
import Code from '../../components/Code/Code';

export default function Sidebar() {
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item>
          <Widget title="Sidebar Info" disableWidgetMenu>
            <Typography>
              The Sidebar component acts as a sidebar. To see an example of the sidebar
              look at the left side of this dashboard if you are on a desktop, or click
              on the hamburger icon in the header to open the sidebar on a tablet or phone.
              The Sidebar component is responsive. When a screen is a phone or tablet width
              the sidebar will collapse.
            </Typography>
          </Widget>
        </Grid>
        <Grid item>
          <Widget title="Sidebar Code Example" disableWidgetMenu>
            <Typography>The Sidebar component is used like so:</Typography>
            <Code>
              {`
<Sidebar structure={structure} />
              `}
            </Code>
            <Typography>
              And is placed in a top-level component, the same location
              where you might place your Header and Footer components.
            </Typography>
            <br />
            <Typography>
              The Sidebar component takes one prop that is the structure of the link menu.
            </Typography>
            <Typography>
              Here is an example of the sidebar structure:
            </Typography>
            <Code>
              {`
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
    {...}
]
              `}
            </Code>
            <Typography>
              Here is an example of the structure of the child routes:
            </Typography>
            <Code>
              {`
const foundationRoutes = {
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
  {...}
}
              `}
            </Code>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
