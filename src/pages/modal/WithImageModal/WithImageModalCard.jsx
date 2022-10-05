import React, { useState } from 'react';
import {
  Box,
} from '@material-ui/core';

// components
import Widget from '../../../components/Widget/Widget';
import { Typography, Button } from '../../../components/Wrappers/Wrappers';
import useStyles from '../styles';
import WithImageModal from './WithImageModal';

const WithImageModalCard = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const classes = useStyles();

  return (
    <Widget title="Modal With Image" disableWidgetMenu>
      <Typography block>
        Use the classes provided for creating the image modal.
      </Typography>
      <Box my={2}>
        <Button
          color="primary"
          variant="contained"
          className={classes.marginRight}
          onClick={() => setIsImageModalOpen(true)}
        >
          Image Examples
        </Button>
        <WithImageModal isOpen={isImageModalOpen} setIsOpen={setIsImageModalOpen} />
      </Box>
    </Widget>
  );
};

export default WithImageModalCard;
