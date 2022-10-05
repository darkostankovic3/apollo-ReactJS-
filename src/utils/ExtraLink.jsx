import React from 'react';
import { makeStyles } from '@material-ui/core';
import Widget from '../components/Widget/Widget';

const useStyles = makeStyles(() => ({
  link: {
    wordBreak: 'break-all',
  },
}));

export default function ExtraLink({
  link,
  title = 'Design Link',
  subtitle = 'Using Zeplin',
  text = 'Link to Zeplin',
}) {
  const classes = useStyles();
  return (

    <Widget
      title={title}
      subtitle={subtitle}
      disableWidgetMenu
    >
      <a href={link} rel="noreferrer" target="_blank" className={classes.link}>{text}</a>
    </Widget>

  );
}
