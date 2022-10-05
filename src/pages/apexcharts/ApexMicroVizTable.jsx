import React from 'react';

import {
  Grid, Box,
  Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';

import ApolloTableSimpleSparkline from '../tables/specialtyTables/ApolloTableSimpleSparkline';

import SArea from '../charts/miniViz/sArea';
import SLineMinMax from '../charts/miniViz/sLineMinMax';
import SColumnMinMax from '../charts/miniViz/sColumnMinMax';
import SColumnWinLoss from '../charts/miniViz/sColumnWinLoss';
import SDonut from '../charts/miniViz/sDonut';

import { RDM } from '../../utils/randUtils';

const defaultBarData = RDM.defaultBarData();
const zeroData = RDM.zeroData();
const defaultPlusMinsData = RDM.defaultPlusMinsData();

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Vix Charts Inside a Table"
          subtitle="Sparkline in Table"
          variant="table"
        >
          <ApolloTableSimpleSparkline />
        </Widget>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Widget
          title="Small Charts that can be used in the table"
          subtitle="Subitles"
        >
          <Grid container spacing={6}>
            <Grid container md={4} sm={12} pt={60} justify="center" border="1">
              <Typography container gutterBottom display="inline">
                Micro Viz - Area
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={35} p={6} mb={10} mt={10}>
                <SArea graphData={defaultBarData} gHeight="40" />
              </Box>
              <Typography gutterBottom display="inline">
                Zero Data
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SArea graphData={zeroData} gHeight="40" />
              </Box>
            </Grid>
            <Grid container md={4} sm={12} pt={60} justify="center" border="1">
              <Typography gutterBottom>
                Micro Viz - Column with Min/Max
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SColumnMinMax graphData={defaultBarData} gHeight="40" />
              </Box>
              <Typography gutterBottom display="inline">
                Zero Data
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SColumnMinMax graphData={zeroData} gHeight="40" />
              </Box>
            </Grid>
            <Grid container md={4} sm={12} pt={60} justify="center" border="1">
              <Typography gutterBottom display="inline">
                Micro Viz - Donut
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SDonut graphData={['45']} MicroViz />
              </Box>
              <Typography gutterBottom display="inline">
                Zero Data
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SDonut graphData={zeroData} MicroViz />
              </Box>
            </Grid>
            <Grid container md={4} sm={12} pt={60} justify="center" border="1">
              <Typography gutterBottom display="inline">
                Micro Viz - Banded Sparkline
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SLineMinMax graphData={defaultBarData} />
              </Box>
              <Typography gutterBottom display="inline">
                Zero Data
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SLineMinMax graphData={zeroData} />
              </Box>
            </Grid>
            <Grid container md={4} sm={12} pt={60} justify="center" border="1">
              <Typography gutterBottom display="inline">
                Micro Viz - Column Win/Liss
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SColumnWinLoss graphData={defaultPlusMinsData} gHeight="20px" />
              </Box>
              <Typography gutterBottom display="inline">
                Zero Data
              </Typography>
              <Box width={1} display="flex" justifyContent="center" m={15} p={6} mb={10} mt={10}>
                <SColumnWinLoss graphData={zeroData} gHeight="20px" />
              </Box>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
