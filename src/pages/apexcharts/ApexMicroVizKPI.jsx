import React from 'react';

import {
  Grid, Typography, Box,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import SDonut from '../charts/miniViz/sDonut';
import SArea from '../charts/miniViz/sArea';
import SLineMinMax from '../charts/miniViz/sLineMinMax';
import SColumnMinMax from '../charts/miniViz/sColumnMinMax';
import SColumnWinLoss from '../charts/miniViz/sColumnWinLoss';
import SLineBanded from '../charts/miniViz/sLineBanded';

import { RDM } from '../../utils/randUtils';

const defaultBarData = RDM.defaultBarData();
const defaultPlusMinsData = RDM.defaultPlusMinsData();

const zeroData = RDM.zeroData();
const noData = RDM.noData();

const defaultPlusMinsData2 = [{
  data: [100, 30, 30, 0, -100, 30, -50, 5],
}];

const ApexChart = () => (
  <>

    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>

        <Box pt={10}><Typography>Area Chart (SArea)</Typography></Box>

      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Area"
          subtitle="Sales"
          calcTitle={defaultBarData}
          noBodyPadding
        >
          <SArea graphData={defaultBarData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Area Zero"
          subtitle="Sales"
          noBodyPadding
          calcTitle={zeroData}
        >
          <SArea graphData={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - No Data"
          subtitle="Sales"
          calcTitle={noData}
          noBodyPadding
        >
          <SArea graphData={noData} />
        </Widget>
      </Grid>
    </Grid>

    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box pt={10}><Typography>Small Line Min/Max (SLineMinMax)</Typography></Box>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Sparkline"
          subtitle="Sales"
          calcTitle={defaultBarData}
          noBodyPadding
        >
          <SLineMinMax graphData={defaultBarData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Sparkline Zero"
          subtitle="Sales"
          noBodyPadding
          calcTitle={zeroData}
        >
          <SLineMinMax graphData={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Sparkline No Data"
          subtitle="Sales"
          noBodyPadding
          calcTitle={noData}
        >
          <SLineMinMax graphData={noData} />
        </Widget>
      </Grid>
    </Grid>

    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>

        <Box pt={10}><Typography>Small Donut Area Chart (SDonut)</Typography></Box>

      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="69"
          subtitle="Sales"
          noBodyPadding
        >
          <SDonut graphData={['69']} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="0"
          subtitle="Sales"
          noBodyPadding
          calcTitle={noData}
        >
          <SDonut graphData={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Donut Data"
          subtitle="Sales"
          noBodyPadding
          calcTitle={noData}
        >
          <SDonut graphData={noData} />
        </Widget>
      </Grid>
    </Grid>

    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>

        <Box pt={10}><Typography>Small Column Area Chart (SColumnMinMax)</Typography></Box>

      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Column Min/Max"
          subtitle="Sales"
          noBodyPadding
          calcTitle={defaultBarData}
        >
          <SColumnMinMax graphData={defaultBarData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Column Min/Max"
          subtitle="Sales"
          noBodyPadding
          calcTitle={zeroData}
        >
          <SColumnMinMax graphData={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Column Min/Max"
          subtitle="Sales"
          noBodyPadding
          calcTitle={noData}
        >
          <SColumnMinMax graphData={noData} />
        </Widget>
      </Grid>
    </Grid>

    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>

        <Box pt={10}><Typography>Small Column Win/Loss (SColumnWinLoss)</Typography></Box>

      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Column Win Loss"
          subtitle="Sales"
          noBodyPadding
          calcTitle={defaultPlusMinsData}
        >
          <SColumnWinLoss graphData={defaultPlusMinsData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Column Win Loss"
          subtitle="Sales"
          noBodyPadding
          calcTitle={zeroData}
        >
          <SColumnWinLoss graphData={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Column Win Loss"
          subtitle="Sales"
          noBodyPadding
          calcTitle={noData}
        >
          <SColumnWinLoss graphData={noData} />
        </Widget>
      </Grid>
    </Grid>

    <Grid container spacing={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box pt={10}><Typography>Small Line Banded (SLineBanded)</Typography></Box>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Banded Sparkline"
          subtitle="Sales"
          noBodyPadding
          calcTitle={defaultPlusMinsData}
        >
          <SLineBanded graphData={defaultPlusMinsData2} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Banded Sparkline"
          subtitle="Sales"
          noBodyPadding
          calcTitle={zeroData}
        >
          <SLineBanded graphData={zeroData} />
        </Widget>
      </Grid>
      <Grid item lg={3} md={12} sm={12} xs={12}>
        <Widget
          title="Micro Viz - Banded Sparkline"
          subtitle="Sales"
          noBodyPadding
          calcTitle={noData}
        >
          <SLineBanded graphData={noData} />
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
