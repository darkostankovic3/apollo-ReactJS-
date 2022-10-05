import React from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';
import Widget from '../../../components/Widget/Widget';
import TextField from '../../forms/elements/TextField/TextField';
import Checkbox from '../../forms/elements/Checkbox/Checkbox';
import UserInfo from './UserInfo';
import { languages, notifications } from './data';
import styles from './styles';
import { Typography } from '../../../components/Wrappers/Wrappers';
import Select from '../../forms/elements/Select/Select';

export default function PersonalInfo() {
  const classes = styles();
  const [selectValue, setSelectValue] = React.useState(0);

  function handleSelectChange(_, newValue) {
    setSelectValue(newValue);
  }

  return (
    <Grid container>
      <UserInfo className={classes.userInfo} />
      <Grid container item xs={12} sm={8}>
        <Grid item xs={12} className={classnames(classes.personalInfo, classes.content)}>
          <Widget title="Personal Info" disableWidgetMenu>
            <Grid container spacing={2}>
              <Grid item container>
                <Grid item xs={6}>
                  <TextField label="First name" defaultValue="Michael" variant="outlined" disabled />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Last name" defaultValue="Scott" variant="outlined" disabled />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" defaultValue="michael.scott@iqvia.com" variant="outlined" disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="User ID" defaultValue="mscott" variant="outlined" disabled />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <Widget title="Preferences" disableWidgetMenu>
            <Grid container spacing={4}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography variant="caption">Language</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Select
                    value={selectValue}
                    onChange={handleSelectChange}
                    options={languages}
                    placeholder="Language"
                    inputProps={{ classes: { root: classes.select } }}
                    formControlStyles={classes.selectFormControl}
                  >
                    {languages}
                  </Select>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">Time</Typography>
                <Checkbox label="Use a 24-hour clock" checked={false} />
                <Checkbox label="Show AM/PM" checked />
              </Grid>
              <Grid container direction="row" item xs={12}>
                <Grid container spacing={2} direction="column" item xs={8}>
                  <Grid item>
                    <Typography variant="caption">Notifications</Typography>
                  </Grid>
                  {notifications.map((notification) => (
                    <Grid item key={notification}>
                      <Typography>{notification}</Typography>
                    </Grid>
                  ))}
                </Grid>
                <Grid container spacing={2} direction="column" item xs alignItems="center">
                  <Grid item>
                    <Typography variant="caption">UI</Typography>
                  </Grid>
                  {notifications.map((notification) => (
                    <Grid item key={`${notification}-ui`} className={classes.checkbox}>
                      <Checkbox checked={!!Math.round(Math.random())} />
                    </Grid>
                  ))}
                </Grid>
                <Grid container spacing={2} direction="column" item xs alignItems="center">
                  <Grid item>
                    <Typography variant="caption">Email</Typography>
                  </Grid>
                  {notifications.map((notification) => (
                    <Grid item key={`${notification}-email`} className={classes.checkbox}>
                      <Checkbox checked={!!Math.round(Math.random())} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </Grid>
  );
}
