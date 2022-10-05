/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Grid,
  Tabs,
  Tab as MuiTab,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme, withStyles } from '@material-ui/core/styles';

// helpers
import { getTextHTML } from '../../utils/randUtils';

// components
import Widget from '../../components/Widget/Widget';
import Tab from '../../components/Tab/Tab';
import styles, { TabStyle } from './styles';
import ExtraLink from '../../utils/ExtraLink';

const AnrTab = withStyles(TabStyle)((props) => (
  <MuiTab disableRipple {...props} />
));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabsComp() {
  const tabNames = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5 - Really Long Title Wowie', 'Tab 6', 'Tab 7'];
  const numMainTabs = 4;

  const theme = useTheme();
  const classes = styles();
  const mobileScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [rfdValue1, setRfdValue1] = React.useState(0);
  const [rfdValue2, setRfdValue2] = React.useState(0);

  function handleChangeRfdTab1(event, newValue) {
    setRfdValue1(newValue);
  }

  function handleChangeRfdTab2(event, newValue) {
    setRfdValue2(newValue);
  }

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Widget
            title="Tabs"
            disableWidgetMenu
          >
            <div>
              <Tabs
                value={rfdValue1}
                onChange={handleChangeRfdTab1}
                textColor="primary"
                aria-label="Tabs"
              >
                {tabNames.slice(0, numMainTabs).map((tabName, i) => (
                  <AnrTab key={`tab-label-${tabName}`} label={tabName} {...a11yProps(i)} disabled={i === numMainTabs - 1} />
                ))}
              </Tabs>
            </div>
            {tabNames.slice(0, numMainTabs).map((tabName, i) => (
              <Tab
                key={`tab-${tabName}`}
                value={rfdValue1}
                name={tabName}
                index={i}
              >
                {getTextHTML(`tab-${tabName}`)}
              </Tab>
            ))}
          </Widget>
        </Grid>

        <Grid item xs={12} className={`${mobileScreen && classes.scrollContainer}`}>
          <Widget
            title="Tabs - Overflow"
            disableWidgetMenu
          >
            <div>
              <Tabs
                value={rfdValue2}
                onChange={handleChangeRfdTab2}
                textColor="primary"
                aria-label="Ready for development tabs overflow example"
                variant="scrollable"
                scrollButtons="auto"
                TabScrollButtonProps={{ className: classes.tabScrollButton }}
              >
                {tabNames.map((tabName, i) => (
                  <AnrTab key={`tab-label-${tabName}`} label={tabName} {...a11yProps(i)} />
                ))}
              </Tabs>
            </div>
            {tabNames.map((tabName, i) => (
              <Tab
                key={`overflow-tab-${tabName}`}
                value={rfdValue2}
                index={i}
                name={tabName}
              >
                {getTextHTML(`overflow-tab-${tabName}`)}
              </Tab>
            ))}
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            link="https://zpl.io/VDZkk8W"
            text="Link to Zeplin Design"
          />
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Developer Link"
            subtitle="This component uses the Tabs Material UI Component"
            link="https://material-ui.com/components/tabs/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
