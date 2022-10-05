/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { ToastContainer, toast, Slide } from 'react-toastify';
import classnames from 'classnames';

// styles
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import Notification from '../../components/Notification/Notification';
import Code from '../../components/Code/Code';
import { Typography, Button } from '../../components/Wrappers/Wrappers';

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage() {
  const classes = useStyles();

  // local
  const [notificationsPosition, setNotificationPosition] = useState(2);
  const [errorToastId, setErrorToastId] = useState(null);

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }

  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    const componentProps = {
      type: 'message',
      message: 'Message was sent successfully!',
      variant: 'contained',
      color: 'success',
      showIcon: true,
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: 'success',
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    let componentProps;

    if (errorToastId && notificationType === 'error') return;

    switch (notificationType) {
      case 'info':
        componentProps = {
          type: 'feedback',
          message: 'New user feedback received',
          variant: 'contained',
          color: 'primary',
          extraButtonClick: retryErrorNotification,
        };
        break;
      case 'error':
        componentProps = {
          type: 'error',
          message: 'Message was not sent!',
          variant: 'contained',
          color: 'error',
        };
        break;
      case 'warning':
        componentProps = {
          type: 'warning',
          message: 'Warning! You\'ve been warned!',
          variant: 'contained',
          color: 'warning',
        };
        break;
      default:
        componentProps = {
          type: 'checkcircle',
          message: 'The item was shipped',
          variant: 'contained',
          color: 'success',
        };
    }

    const toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === 'error' && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === 'error') setErrorToastId(toastId);
  }

  return (
    <>
      <Grid container spacing={6}>

        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
          transition={Slide}
        />

        <Grid item xs={12}>
          <Widget title="Layout Options" disableWidgetMenu>
            <Typography>
              There are a few position options available for notifications.
              Try clicking on the positions below and then firing a
              notification to see it in action.
            </Typography>
            <Grid container item xs={12} md={10} lg={6} xl={6}>
              <div className={classnames(classes.displayButtons, classes.buttonRow)}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleNotificationCall('info')}
                  className={classnames(classes.notificationCallButton)}
                >
                  Info Message
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleNotificationCall('error')}
                  className={classnames(classes.notificationCallButton)}
                >
                  Error + Retry Message
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={() => handleNotificationCall('success')}
                  className={classnames(classes.notificationCallButton)}
                >
                  Success Message
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={() => handleNotificationCall('warning')}
                  className={classnames(classes.notificationCallButton)}
                >
                  Warning Message
                </Button>
              </div>
              <Grid item className={classes.layoutContainer}>
                <div className={classes.buttonRow}>
                  <button
                    type="button"
                    aria-label="Position Option 0"
                    onClick={() => changeNotificationPosition(0)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 0,
                    })}
                  />
                  <button
                    type="button"
                    aria-label="Position Option 1"
                    onClick={() => changeNotificationPosition(1)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 1,
                    })}
                  />
                  <button
                    type="button"
                    aria-label="Position Option 2"
                    onClick={() => changeNotificationPosition(2)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 2,
                    })}
                  />
                </div>
                <Typography className={classes.layoutText} size="md">
                  Click any position
                </Typography>
                <div className={classes.buttonRow}>
                  <button
                    type="button"
                    aria-label="Position Option 3"
                    onClick={() => changeNotificationPosition(3)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 3,
                    })}
                  />
                  <button
                    type="button"
                    aria-label="Position Option 4"
                    onClick={() => changeNotificationPosition(4)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 4,
                    })}
                  />
                  <button
                    type="button"
                    aria-label="Position Option 5"
                    onClick={() => changeNotificationPosition(5)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 5,
                    })}
                  />
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget title="Design Notes/Usage" disableWidgetMenu>
            <Typography>
              Notifications are created with the help of
              {' '}
              <a href="https://github.com/fkhadra/react-toastify">
                react-toastify
              </a>
            </Typography>
            <Code>
              {`
                // import needed components, functions and styles
                import { ToastContainer, toast } from 'react-toastify';
                import 'react-toastify/dist/ReactToastify.css';

                const Page = () => {
                  <div>
                    <ToastContainer />
                    <button onClick={() => toast('Toast Message')}>
                      show notification
                    </button>
                  </div>
                };
            `}
            </Code>
            <Box py={1}>
              <Typography variant="caption">
                For more API information refer to the library documentation
              </Typography>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
