import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  CardMedia,
} from '@material-ui/core';

import pinkApollo from '../../../images/pink_apollo_radial.png';
import useStyles from '../styles';

const WithImageModal = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  return (
    <Dialog
      maxWidth="sm"
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CardMedia
        className={classes.imgCard}
        image={pinkApollo}
      />
      <DialogTitle id="alert-dialog-title">
        Dialog Title
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means
          sending anonymous location data to Google, even when no
          apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          onClick={() => setIsOpen(false)}
        >
          Disagree
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          color="primary"
          variant="contained"
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WithImageModal;
