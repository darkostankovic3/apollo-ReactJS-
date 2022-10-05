import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import styles from './styles';
import Tag from '../../../components/Tag/Tag';
import { Avatar, Typography } from '../../../components/Wrappers/Wrappers';

const UserInfo = () => {
  const classes = styles();

  return (
    <Grid container spacing={4} item xs={3} className={classes.userInfo}>
      <Grid item xs={12} className={classes.avatarWrapper}>
        <Avatar classes={{ root: classes.avatar }}>MS</Avatar>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h6">
            User Since:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            March 24, 2005
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.tags}>
        <Grid item>
          <Tag label="GCP Admin" colorBg="primary" />
        </Grid>
        <Grid item>
          <Tag label="User" colorBg="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(UserInfo);
