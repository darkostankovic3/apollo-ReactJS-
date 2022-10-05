import React from 'react';
import { useTheme, Button } from '@material-ui/core';
import {
  NotificationsNone as NotificationsIcon,
  ThumbUp as ThumbUpIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalOffer as TicketIcon,
  BusinessCenter as DeliveredIcon,
  SmsFailed as FeedbackIcon,
  Cancel as CancelIcon,
  CheckCircle as CheckCircleIcon,
  DiscFull as DiscIcon,
  Email as MessageIcon,
  Report as ReportIcon,
  Error as DefenceIcon,
  Error as ErrorIcon,
  AccountBox as CustomerIcon,
  Done as ShippedIcon,
  Publish as UploadIcon,
  Warning as WarningIcon,
} from '@material-ui/icons';
import classnames from 'classnames';
import tinycolor from 'tinycolor2';

// styles
import useStyles from './styles';

// components
import { Typography } from '../Wrappers/Wrappers';

const typesIcons = {
  'e-commerce': <ShoppingCartIcon />,
  notification: <NotificationsIcon />,
  offer: <TicketIcon />,
  info: <ThumbUpIcon />,
  message: <MessageIcon />,
  feedback: <FeedbackIcon />,
  cancel: <CancelIcon />,
  checkcircle: <CheckCircleIcon />,
  customer: <CustomerIcon />,
  error: <ErrorIcon />,
  shipped: <ShippedIcon />,
  delivered: <DeliveredIcon />,
  defence: <DefenceIcon />,
  report: <ReportIcon />,
  upload: <UploadIcon />,
  disc: <DiscIcon />,
  warning: <WarningIcon />,
};

function getIconByType(type = 'offer') {
  return typesIcons[type];
}

export default function Notification({
  variant,
  type,
  showown,
  color,
  shadowless,
  typographyVariant,
  className,
  message,
  onClick,
  extraButton,
  extraButtonClick,
  showIcon,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const icon = getIconByType(type);

  const iconWithStyles = React.cloneElement(icon, {
    classes: {
      root: classes.notificationIcon,
    },
    style: {
      // eslint-disable-next-line no-nested-ternary
      color: showown
        ? showown === 'true'
          ? theme.palette.secondaryTextColor
          : theme.palette[showown].main
        : theme.palette[color].content
          ? theme.palette[color].content
          : variant !== 'contained'
          && theme.palette[color]
          && theme.palette[color].main,
    },
  });

  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      className={classnames(classes.notificationContainer, className, {
        [classes.notificationContained]: variant === 'contained',
        [classes.notificationContainedShadowless]: shadowless,
      })}
      style={{
        border:
          variant === 'contained' && color === 'secondary'
            ? theme.palette.secondaryBorder
            : 'none',

        backgroundColor:
          variant === 'contained'
          && theme.palette[color]
          && theme.palette[color].main,
      }}
    >
      {showIcon && (
        <div
          className={classnames(classes.notificationIconContainer, {
            [classes.notificationIconContainerContained]: variant === 'contained',
            [classes.notificationIconContainerRounded]: variant === 'rounded',
          })}
          style={{
            backgroundColor:
              variant === 'rounded'
              && theme.palette[color]
              && tinycolor(theme.palette[color].main)
                .setAlpha(0.15)
                .toRgbString(),
          }}
        >
          {iconWithStyles}
        </div>
      )}
      <div className={classes.messageContainer}>
        <Typography
          className={classnames({
            [classes.containedTypography]: variant === 'contained',
          })}
          variant={typographyVariant}
          size={variant !== 'contained' && !typographyVariant && 'md'}
          color={
            // eslint-disable-next-line no-nested-ternary
            color === 'secondary' && type === 'message'
              // eslint-disable-next-line no-nested-ternary
              ? showown
                ? showown === 'true'
                  ? 'secondary'
                  : showown
                : ''
              : ''
          }
        >
          <span>{message}</span>
        </Typography>
        {extraButton && extraButtonClick && (
          <Button
            onClick={extraButtonClick}
            disableRipple
            className={classes.extraButton}
          >
            {extraButton}
          </Button>
        )}
      </div>
    </div>
  );
}
