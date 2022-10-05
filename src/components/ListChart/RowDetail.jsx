import React from 'react';

import { Box } from '@material-ui/core';
import { Typography } from '../Wrappers/Wrappers';

const RowDetail = ({ title, date, children }) => (

  <Box
    justifyContent="center"
    style={{ paddingTop: '30px', paddingBottom: '30px' }}
  >
    <Typography weight="strong" variant="H5">{title}</Typography>
    <div style={{ display: 'none' }}>{date}</div>
    {children}
  </Box>
);

export default RowDetail;
