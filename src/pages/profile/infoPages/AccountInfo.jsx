import { Grid } from '@material-ui/core';
import React from 'react';
import Widget from '../../../components/Widget/Widget';
import UserInfo from './UserInfo';
import { accountInfo } from './data';
import TextArea from '../../forms/elements/TextArea/TextArea';
import styles from './styles';

export default function AccountInfo() {
  const classes = styles();

  return (
    <Grid container>
      <UserInfo className={classes.userInfo} />
      <Grid item xs={12} sm={4}>
        <Widget title="Account Info" disableWidgetMenu className={classes.content}>
          {Object.entries(accountInfo).map(([fieldTitle, fieldText]) => (
            <div className={classes.textArea}>
              <TextArea
                key={fieldTitle}
                label={fieldTitle}
                defaultValue={fieldText}
                variant="outlined"
                fullWidth
                disabled
              />
            </div>
          ))}
        </Widget>
      </Grid>
    </Grid>
  );
}
