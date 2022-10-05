import React, { useState } from 'react';
import {
  Box,
} from '@material-ui/core';

// components
import Widget from '../../../components/Widget/Widget';
import { Typography, Button } from '../../../components/Wrappers/Wrappers';
import useStyles from '../styles';
import SimpleCustomModal from './SimpleCustomModal';
import SimpleCustomModalScrolling from './SimpleCustomModalScrolling';

const SimpleCustomModalCard = () => {
  const [isSimpleModalOpen, setIsSimpleModalOpen] = useState(false);
  const [isScrollingModalOpen, setIsScrollingModalOpen] = useState(false);

  const classes = useStyles();

  return (
    <Widget title="Simple Custom Dialog" disableWidgetMenu>
      <Typography>
        Toggle a simple modal demo by clicking one of the buttons below.
      </Typography>
      <Box my={2}>
        <Button
          color="primary"
          variant="contained"
          className={classes.marginRight}
          onClick={() => setIsSimpleModalOpen(true)}
        >
          Simple Demo
        </Button>
        <SimpleCustomModal isOpen={isSimpleModalOpen} setIsOpen={setIsSimpleModalOpen} />
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setIsScrollingModalOpen(true)}
        >
          Scrolling long content
        </Button>
        <SimpleCustomModalScrolling
          isOpen={isScrollingModalOpen}
          setIsOpen={setIsScrollingModalOpen}
        />
      </Box>
    </Widget>
  );
};

export default SimpleCustomModalCard;
