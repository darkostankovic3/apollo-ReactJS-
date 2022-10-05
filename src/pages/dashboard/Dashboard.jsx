import React from 'react';
import {
  Grid,
} from '@material-ui/core';

// styles

import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import SArea from '../charts/miniViz/sArea';
import SLineBanded from '../charts/miniViz/sLineBanded';
import SColumnMinMax from '../charts/miniViz/sColumnMinMax';
import SDonut from '../charts/miniViz/sDonut';
import SLineMinMax from '../charts/miniViz/sLineMinMax';
import SColumnWinLoss from '../charts/miniViz/sColumnWinLoss';
import ApexBarChart from '../charts/components/ApexBarChart/ApexBarChart';
import ApexColumnChart from '../charts/components/ApexColumnChart/ApexColumnChart';
import ApexStackedChart from '../charts/components/ApexStackedChart/ApexStackedChart';
import ApexGroupContainer from '../apexcharts/ApexGroupContainer';
import ApexLineChart from '../charts/components/ApexLineChart/ApexLineChart';

import { RDM } from '../../utils/randUtils';

const defaultBarData = RDM.defaultBarData(18);
const defaultBarData2 = RDM.defaultBarData(6);
const defaultPlusMinsData = RDM.defaultPlusMinsData(20);

const row5 = {
  series: [{
    name: '',
    data: [2, 11, 15, 26],
  }],
  maxValue: 30,
  hPerc: '31',
  xCategory: [2007, 2008, 2009, 2010, 2011],
};

const row5Col = {
  series: [{
    name: '',
    data: [7, 10, 15, 26, 29],
  }],
  maxValue: 30,
  hPerc: '13',
  xCategory: ['2007', '2008', '2009', '2010', '2011'],
};

const row5Stacked = {
  series: [{
    name: 'Series 3',
    data: [130, 90, 78, 60, 33],
  }, {
    name: 'Series 4',
    data: [130, 80, 68, 45, 22],
  }, {
    name: 'Series 5',
    data: [30, 70, 50, 22, 22],
  }],
  maxValue: 230,
  hPerc: '50',
  xCategory: [2007, 2008, 2009, 2010, 2011],
  gHeight: 50,
};

const line3 = {
  series: [
    {
      name: 'Signed',
      data: [31, 40, 28],
    },
    {
      name: 'Unsigned',
      data: [11, 32, 45],
    },
    {
      name: 'Overdue',
      data: [1, 52, 45],
    },
  ],
  xCategory: ['Label', 'Label', 'Label'],
};

const calcTitleNumber = (ct) => {
  let cx = 0;
  if (ct[0] && ct[0].data) {
    cx = ct[0].data;
  } else {
    return '-';
  }

  if (ct.length === 0) {
    return '-';
  }
  if (cx.reduce((a, b) => a + b, 0) === 0) {
    return '0';
  }
  if (cx[cx.length - 1]) {
    return cx[cx.length - 1];
  }
  return 'Title Error';
};

const createGraph = (gType, dataz, gHeight) => {
  switch (gType) {
    case 'SArea':
      return <SArea graphData={dataz} gHeight={gHeight} />;
    case 'SColumnMinMax':
      return <SColumnMinMax graphData={dataz} gHeight={gHeight} />;
    case 'SLineMinMax':
      return <SLineMinMax graphData={dataz} gHeight={gHeight} />;
    case 'SLineBanded':
      return <SLineBanded graphData={dataz} gHeight={gHeight} />;
    case 'SColumnWinLoss':
      return <SColumnWinLoss graphData={dataz} gHeight={gHeight} />;
    default:
      return <div>empty graph</div>;
  }
};

const getDummyData = (dataType) => {
  switch (dataType) {
    case 'defaultBarData':
      return RDM.defaultBarData();
    case 'defaultBarData20':
      return RDM.defaultBarData(20);
    case 'defaultPlusMinsData':
      return RDM.defaultPlusMinsData();
    case 'zeroData':
      return RDM.noData();
    case 'noData':
    default:
      return RDM.zeroData();
  }
};

const ApexGraph = ({
  gType, fakeData, gHeight, bottomGraph,
}) => {
  const dataz = getDummyData(fakeData);
  return (
    <ApexGroupContainer leftLabel="Label" rightLabel={calcTitleNumber(dataz)} bottomGraph={bottomGraph}>
      {createGraph(gType, dataz, gHeight)}
    </ApexGroupContainer>
  );
};

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={6}>
        <Grid item lg={2} sm={6} xs={12}>
          <Widget
            title="4801"
            subtitle="Posts with Actions"
            bodyClass={classes.fullHeightBodyBottom}
            className={classes.card}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SArea graphData={defaultBarData} />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={2} sm={6} xs={12}>
          <Widget
            title="9567/6988"
            subtitle="High Low for Month"
            bodyClass={classes.fullHeightBodyBottom}
            className={classes.card}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SLineMinMax graphData={defaultBarData} />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={2} sm={6} xs={12}>
          <Widget
            title="01:40:07"
            subtitle="Time to First Action"
            bodyClass={classes.fullHeightBodyBottom}
            className={classes.card}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SColumnMinMax graphData={defaultBarData} />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={2} sm={6} xs={12}>
          <Widget
            title="12:26:44"
            subtitle="Time to First Ext Action"
            bodyClass={classes.fullHeightBodyBottom}
            className={classes.card}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SColumnMinMax graphData={defaultBarData2} />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={2} sm={6} xs={12}>
          <Widget
            title="11"
            subtitle="User with Actions"
            bodyClass={classes.fullHeightBodyBottom}
            className={classes.card}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SLineBanded graphData={defaultPlusMinsData} />
              </Grid>
            </Grid>

          </Widget>
        </Grid>
        <Grid item lg={2} sm={6} xs={12}>
          <Widget
            title="869"
            subtitle="Average Actions Per User"
            bodyClass={classes.fullHeightBodyBottom}
            className={classes.card}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid
                item
                xs={12}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SDonut graphData={['69']} />
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item lg={6} sm={6} xs={12}>
          <Widget
            title="Volume"
            subtitle="Timeline of posts and actions"
            className={classes.card}
            variant="apexchart"
          >
            <ApexLineChart config={line3} />
          </Widget>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Widget
            title="Volume"
            subtitle="Timeline of posts and actions"
            className={classes.card}
            variant="apexchart"
          >
            <ApexBarChart mData={row5.series} mMaxValue={row5.maxValue} mPerc={row5.hPerc} />
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item lg={4} sm={6} xs={12}>
          <Widget
            title="Main Title Here"
            subtitle="# of authers interacted with"
            variant="apexchart"
            bottomAlign
            disableWidgetMenu
          >
            <ApexColumnChart config={row5Col} gHeight="350" />
          </Widget>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <Widget
            title="Micro Viz - SparkLine Min Max"
            subtitle="Sales"
            bottomAlign
            disableWidgetMenu
          >
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>

        <Grid item lg={4} sm={6} xs={12}>
          <Widget
            title="Posts by Assignee and Type"
            subtitle="Top 5 users with most post assignments"
            bottomAlign
            disableWidgetMenu
          >
            <ApexStackedChart config={row5Stacked} gHeight="350" />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
