import React from 'react';
import {
  useTheme, Box, Collapse,
} from '@material-ui/core';
import {
  Email as MessageIcon,
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import { Typography } from '../Wrappers/Wrappers';

import useStyles from './styles';

const typesIcons = {
  message: <MessageIcon fontSize="small" />,
  success: <SuccessIcon fontSize="small" />,
  error: <ErrorIcon fontSize="small" />,
  warning: <WarningIcon fontSize="small" />,
};

function getIconByType(type = 'info') {
  return typesIcons[type];
}

const Banner = ({
  type,
  open,
  bannerMessage,
  close,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const icon = getIconByType(type);
  const iconWithStyles = React.cloneElement(icon, {
    classes: {
      root: classes.notificationIcon,
    },
    style: {
      color:
        theme.palette[type]
        && (theme.palette[type].content
          ? theme.palette[type].content
          : theme.palette.colorWhite.content),
      fontSize: theme.icon.xsmall.fontSize,
    },
  });

  return (
    <div className={classes.collapseContainer}>
      <Collapse in={!!open}>
        <Box
          display="flex"
          justifyContent="center"
          type="success"
          style={{
            backgroundColor: theme.palette[type].main,
            color: (theme.palette[type].content && theme.palette[type].content),
          }}
          className={classes.banner}
          pt={4}
        >
          <Box flexGrow={1} />
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <span className={classes.icon}>
                {iconWithStyles}
              </span>
              <Typography weight="semiBold" className={classes.bannerMessage}>
                {bannerMessage}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            flexGrow={1}
            classes={{ root: classes.closeButtonContainer }}
          >
            <span className={classes.closeButton}>
              <CloseIcon onClick={close} className={classes.closeButtonIcon} />
            </span>
          </Box>
        </Box>
      </Collapse>
    </div>
  );
};

export default Banner;
