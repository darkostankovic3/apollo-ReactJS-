import React, { useState } from 'react';
import {
  Box, Grid, Paper,
} from '@material-ui/core';

// components
import Widget from '../../../components/Widget/Widget';
import { Typography, Button } from '../../../components/Wrappers/Wrappers';
import useStyles from '../styles';
import Code from '../../../components/Code/Code';
import GridModal from './GridModal';

const GridModalCard = () => {
  const [isGridModalOpen, setIsGridModalOpen] = useState(false);

  const classes = useStyles();

  return (
    <Widget title="Using Grid" disableWidgetMenu>
      <Typography block>
        Utilize the Material UI grid system within a modal by nesting
        {' '}
        <Code row inline>{'<Grid container>'}</Code>
        {' '}
        within the
        {' '}
        <Code row inline>{'<Dialog>'}</Code>
        . Then, use the normal grid
        system classes as you would anywhere else.
      </Typography>
      <Box my={2}>
        <Button
          color="primary"
          variant="contained"
          className={classes.marginRight}
          onClick={() => setIsGridModalOpen(true)}
        >
          Grid
        </Button>
        <Paper className={classes.paper}>
          <Grid item xs zeroMinWidth>
            <Code>
              {`
  <Grid container>
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-around">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-between">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
        <Grid item xs={3}>3</Grid>Code
      </Box>
    </Box>
  </Grid>
                  `}
            </Code>
          </Grid>
        </Paper>
      </Box>
      <GridModal isOpen={isGridModalOpen} setIsOpen={setIsGridModalOpen} />
    </Widget>
  );
};

export default GridModalCard;
