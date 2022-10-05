import React from 'react';

import {
  Box, Typography,
} from '@material-ui/core';

const ApexGroupContainer = ({
  children,
  leftLabel,
  bottomGraph = 1,
  rightLabel = 'value',
}) => (
  <>
    <Box
      display="flex"
      justifyContent="space-between"
      ml={4}
      mr={4}
      pb={0}
      mb={2}
      style={{ color: '#595959', lineHeight: '30px' }}
    >
      <Typography weight="light" style={{ fontSize: '14px' }}>
        {leftLabel}
      </Typography>
      <Typography weight="light" style={{ fontSize: '14px' }}>
        {rightLabel}
      </Typography>
    </Box>
    <Box ml={4} mr={4} mb={bottomGraph === 1 ? 8 : 2}>
      {children}
    </Box>
  </>
);

export default ApexGroupContainer;
