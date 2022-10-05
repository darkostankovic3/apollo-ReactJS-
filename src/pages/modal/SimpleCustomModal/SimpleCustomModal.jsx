import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
} from '@material-ui/core';

const SimpleCustomModal = ({ isOpen, setIsOpen }) => (
  <Dialog
    open={isOpen}
    scroll="body"
    aria-labelledby="scroll-dialog-title"
  >
    <DialogTitle id="alert-dialog-title">
      <Typography variant="h3" weight="semiBold">
        Dialog Title
      </Typography>
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
        Cancel
      </Button>
      <Button
        onClick={() => setIsOpen(false)}
        variant="contained"
        color="primary"
      >
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default SimpleCustomModal;
