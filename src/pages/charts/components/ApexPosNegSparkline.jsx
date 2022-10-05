import React from 'react';
import { Box, Typography } from '@material-ui/core';
import SLinePosNeg from '../miniViz/sLinePosNeg';

const series1 = [
  {
    data: [-20, -90, 20, 20, 77, -10, 99, 60, 33, 80,
      33, 0, -70, -2, -76, 0, 60, 50, -80, -30],
  },
];

export default function ApexLineChart() {
  return (
    <>
      <Box
        justifyContent="center"
        style={{ paddingTop: '20px' }}
      >
        <Typography style={{ paddingBottom: '10px' }} variant="body2" weight="bold" uppercase gutterBottom>
          Apple
        </Typography>
        <SLinePosNeg
          barDatas={series1}
          bHeight="100px"
        />
      </Box>
    </>
  );
}
