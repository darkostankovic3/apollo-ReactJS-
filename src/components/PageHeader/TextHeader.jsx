import { Typography } from '@material-ui/core';
import React from 'react';

// styles
import useStyles from './styles';

const TextHeader = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <>
      <Typography aria-current="page" className={classes.textTitleStyles}>
        {title}
      </Typography>
      <Typography aria-current="page" className={classes.textSubtitleStyles}>
        {subtitle}
      </Typography>
    </>
  );
};

export default TextHeader;
