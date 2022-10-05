import React from 'react';

import {
  Grid,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import SDonut from '../charts/components/ApexDonutChart/ApexUpdateDonut';
import SArea from '../charts/miniViz/sArea';
import SColumnMinMax from '../charts/miniViz/sColumnMinMax';
import SLineMinMax from '../charts/miniViz/sLineMinMax';
import SLineBanded from '../charts/miniViz/sLineBanded';
import SColumnWinLoss from '../charts/miniViz/sColumnWinLoss';
import ApexGroupContainer from './ApexGroupContainer';

import { RDM } from '../../utils/randUtils';

import useStyles from './styles';

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

const noData = {
  series: [],
};

const fiftyData = {
  series: [50],
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

const ApexMicroVizGraph = () => {
  const Gs = useStyles();
  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Area"
            subtitle="Sales"
            noBodyPadding
          >
            <ApexGraph gType="SArea" fakeData="defaultBarData" gHeight="40px" />
            <ApexGraph gType="SArea" fakeData="defaultBarData" gHeight="40px" />
            <ApexGraph gType="SArea" fakeData="defaultBarData" gHeight="40px" />
            <ApexGraph gType="SArea" fakeData="defaultBarData" gHeight="40px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Area"
            subtitle="Sub Title"
            noBodyPadding
          >
            <ApexGraph gType="SArea" fakeData="defaultBarData" gHeight="40px" />
            <ApexGraph gType="SArea" fakeData="defaultBarData" gHeight="40px" />
            <ApexGraph gType="SArea" fakeData="zeroData" gHeight="40px" />
            <ApexGraph gType="SArea" fakeData="noData" gHeight="40px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Column Min Max"
            subtitle="Sales"
            noBodyPadding
          >
            <ApexGraph gType="SColumnMinMax" fakeData="defaultBarData20" gHeight="40px" />
            <ApexGraph gType="SColumnMinMax" fakeData="defaultBarData20" gHeight="40px" />
            <ApexGraph gType="SColumnMinMax" fakeData="defaultBarData20" gHeight="40px" />
            <ApexGraph gType="SColumnMinMax" fakeData="defaultBarData20" gHeight="40px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Column Min Max"
            subtitle="Sales"
            noBodyPadding
          >
            <ApexGraph gType="SColumnMinMax" fakeData="defaultBarData20" gHeight="40px" />
            <ApexGraph gType="SColumnMinMax" fakeData="defaultBarData20" gHeight="40px" />
            <ApexGraph gType="SColumnMinMax" fakeData="zeroData" gHeight="40px" />
            <ApexGraph gType="SColumnMinMax" fakeData="noData" gHeight="40px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - SparkLine Min Max"
            subtitle="Sales"
            noBodyPadding
            bottomAlign
          >
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - SparkLine Min Max"
            subtitle="Sales"
            noBodyPadding
            bottomAlign
          >
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="defaultBarData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="zeroData" gHeight="60px" />
            <ApexGraph gType="SLineMinMax" fakeData="noData" gHeight="60px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Donut"
            subtitle="Sales"
            noBodyPadding
            bottomAlign
          >
            <SDonut config={fiftyData} />
          </Widget>
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Donut"
            subtitle="Sales"
            noBodyPadding
          >
            <SDonut config={noData} />
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Plus / Minus"
            subtitle="Sales"
            bottomAlign
            disableWidgetMenu
          >
            <ApexGraph gType="SColumnWinLoss" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SColumnWinLoss" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SColumnWinLoss" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SColumnWinLoss" fakeData="defaultPlusMinsData" gHeight="60px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Plus / Minus"
            subtitle="Sales"
            bottomAlign
            disableWidgetMenu
          >
            <ApexGraph gType="SColumnWinLoss" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SColumnWinLoss" fakeData="ddefaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SColumnWinLoss" fakeData="zeroData" gHeight="60px" />
            <ApexGraph gType="SColumnWinLoss" fakeData="noData" gHeight="60px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Branded Sparkline"
            subtitle="Sales"
            bottomAlign
            disableWidgetMenu
          >
            <ApexGraph gType="SLineBanded" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SLineBanded" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SLineBanded" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SLineBanded" fakeData="defaultPlusMinsData" gHeight="60px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>0%</div>
              <div>50%</div>
              <div>100%</div>
            </div>
          </Widget>

        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Widget
            title="Micro Viz - Branded Sparkline"
            subtitle="Sales"
            noBodyPadding
            bottomAlign
          >
            <ApexGraph gType="SLineBanded" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SLineBanded" fakeData="defaultPlusMinsData" gHeight="60px" />
            <ApexGraph gType="SLineBanded" fakeData="zeroData" gHeight="60px" />
            <ApexGraph gType="SLineBanded" fakeData="noData" gHeight="60px" bottomGraph />
            <div className={Gs.microVizGraphStyles}>
              <div>Q1</div>
              <div>Q2</div>
              <div>Q3</div>
              <div>Q4</div>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default ApexMicroVizGraph;
