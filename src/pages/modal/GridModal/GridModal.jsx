import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
  Grid,
  Paper,
} from '@material-ui/core';
import classnames from 'classnames';
import useStyles from '../styles';

const GridModal = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Grid system</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          component="div"
        >
          <Box display="flex" width="100%" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              width="100%"
            >
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="primary"
                >
                  1
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="warning"
                >
                  2
                </Paper>
              </Grid>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              width="100%"
            >
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="error"
                >
                  1
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="success"
                >
                  2
                </Paper>
              </Grid>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
            >
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="primary"
                >
                  1
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="info"
                >
                  2
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  className={classnames(classes.paperItem, classes.paperMargin)}
                  color="warning"
                >
                  3
                </Paper>
              </Grid>
            </Box>
          </Box>
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

export default GridModal;
