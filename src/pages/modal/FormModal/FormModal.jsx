import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from '@material-ui/core';

const FormModal = ({ isOpen, setIsOpen }) => (
  <Dialog
    open={isOpen}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email
        address here. We will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        id="name"
        label="Email Address"
        type="email"
        variant="outlined"
        margin="dense"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button
        color="secondary"
        onClick={() => setIsOpen(false)}
      >
        Cancel
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setIsOpen(false)}
      >
        Subscribe
      </Button>
    </DialogActions>
  </Dialog>
);

export default FormModal;
