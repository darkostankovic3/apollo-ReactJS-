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

const OptionalSizesModalSmall = ({ isOpen, setIsOpen }) => (
  <Dialog
    maxWidth="sm"
    open={isOpen}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      <Typography variant="h3" weight="semiBold">
        Modal Set to Small Widths
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

export default OptionalSizesModalSmall;
