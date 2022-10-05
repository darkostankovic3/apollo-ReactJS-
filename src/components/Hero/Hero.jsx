/* eslint-disable no-console */
import React from 'react';
import Box from '@material-ui/core/Box';
import {
  Settings as SettingsIcon,
} from '@material-ui/icons';
import { Typography, Button } from '../Wrappers/Wrappers';

// styles
import useStyles from './styles';

const Hero = (props) => {
  const {
    title, subTitle, menuConfigCallback, children,
  } = props;
  const classes = useStyles();

  const handleClick = () => {
    console.log('Configure Button Clicked');
    menuConfigCallback('Configure Button Clicked');
  };

  return (
    <Box className={classes.hero}>
      <Box className={classes.header}>
        <Box className={classes.titleDescriptionWrapper}>
          <Typography variant="h2" weight="semiBold" color="colorWhite">{title}</Typography>
          {subTitle && (
          <Typography variant="h5" weight="lightMedium" color="colorWhite">
            {subTitle}
          </Typography>
          )}
        </Box>
        <Button
          startIcon={<SettingsIcon />}
          color="secondary"
          variant="contained"
          onClick={() => handleClick()}
          className={classes.buttonRoot}
        >
          Configure Dashboard
        </Button>
      </Box>
      <Box className={classes.main}>
        {children}
      </Box>
    </Box>
  );
};

Hero.defaultProps = {
  subTitle: '',
  menuConfigCallback: () => {},
};

export default Hero;
