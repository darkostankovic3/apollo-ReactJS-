import React from 'react';
import { Box, Typography } from '@material-ui/core';
import SLineMinMax from '../miniViz/sLineMinMax';

const series1 = [
  {
    data: [50, 90, 20, 0, 77, 0, 99, 60, 33, 80, 33, 0, 70, 2, 76, 0, 60, 50, 80, 30],
  },
];

const series2 = [
  {
    data: [33, 20, 20, 50, 2, 11, 23, 60, 50, 80, 30, 20, 0, 2, 30, 0, 60, 50, 80, 30],
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
        <SLineMinMax
          barDatas={series1}
          bHeight="100px"
        />
      </Box>
      <Box
        justifyContent="center"
        style={{ paddingTop: '20px' }}
      >
        <Typography style={{ paddingBottom: '10px' }} variant="body2" weight="bold" uppercase gutterBottom>
          Orange
        </Typography>
        <SLineMinMax
          barDatas={series2}
          bHeight="100px"
        />
      </Box>
    </>
  );
}
