import React, { useState } from 'react';
import {
  Box,
} from '@material-ui/core';

// components
import Widget from '../../../components/Widget/Widget';
import { Typography, Button } from '../../../components/Wrappers/Wrappers';
import Code from '../../../components/Code/Code';
import OptionalSizesModalLarge from './OptionalSizesModalLarge';
import OptionalSizesModalSmall from './OptionalSizesModalSmall';
import useStyles from '../styles';

const OptionalSizesModalCard = () => {
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);

  const classes = useStyles();

  return (
    <Widget title="Optional Sizes" disableWidgetMenu>
      <Typography block>
        {'To appoint a modal\'s width size, set the maxWidth attribute to one of values:'}
        {' '}
        <Code row inline>xs, sm, md, lg, xl</Code>
      </Typography>
      <Box my={2}>
        <Button
          color="primary"
          variant="contained"
          className={classes.marginRight}
          onClick={() => setIsLargeModalOpen(true)}
        >
          Large Modal
        </Button>
        <OptionalSizesModalLarge isOpen={isLargeModalOpen} setIsOpen={setIsLargeModalOpen} />
        <Button
          color="secondary"
          variant="contained"
          className={classes.marginRight}
          onClick={() => setIsSmallModalOpen(true)}
        >
          Small modal
        </Button>
        <OptionalSizesModalSmall isOpen={isSmallModalOpen} setIsOpen={setIsSmallModalOpen} />
      </Box>
    </Widget>
  );
};

export default OptionalSizesModalCard;
