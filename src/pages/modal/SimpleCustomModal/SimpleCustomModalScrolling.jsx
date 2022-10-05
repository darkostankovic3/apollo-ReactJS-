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
import useStyles from '../styles';

const SimpleCustomModalScrolling = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
    >
      <DialogTitle id="scroll-dialog-title">
        <Typography variant="h3" weight="semiBold">
          Scrolling Long Content
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.scrollPane}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

`,
            )
            .join('\n')}
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
          color="primary"
          variant="contained"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleCustomModalScrolling;
