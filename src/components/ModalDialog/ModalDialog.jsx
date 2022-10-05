import React from 'react';
import {
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

// components
import { Typography, Button } from '../Wrappers/Wrappers';

export default function PageTitle({
  variant, open, onClickCancel, modalTitle, children, onClickOK,
}) {
  const theme = useTheme();

  const borderTColor = (variant && theme.palette[variant].main) || '';
  const borderTImage = (variant && 'none') || '';

  return (
    <>
      <Dialog
        open={open}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        onClick={onClickCancel}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            borderTopColor: borderTColor,
            borderImage: borderTImage,
          }}
        >
          <Typography
            variant="h3"
            color="error"
            style={{ fontWeight: 600, color: borderTColor }}
          >
            {modalTitle}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClickCancel}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={onClickOK}
            variant="contained"
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
