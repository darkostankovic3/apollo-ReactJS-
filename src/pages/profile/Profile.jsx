import React from 'react';
import {
  Grid, Tab, Tabs,
} from '@material-ui/core';
import TabPanel from '../../components/Tab/Tab';
import AccountInfo from './infoPages/AccountInfo';
import PersonalInfo from './infoPages/PersonalInfo';
import styles from './styles';

export default function Profile() {
  const classes = styles();
  const [tabValue, setTabValue] = React.useState(0);

  function handleTabChange(_, newValue) {
    setTabValue(newValue);
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
          <Tab label="Personal Info" />
          <Tab label="Account Info" />
        </Tabs>
        <div className={classes.tabUnderline} />
        <TabPanel name="" value={tabValue} index={0}>
          <PersonalInfo />
        </TabPanel>
        <TabPanel name="" value={tabValue} index={1}>
          <AccountInfo />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
