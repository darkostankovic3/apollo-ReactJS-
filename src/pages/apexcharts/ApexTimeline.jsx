import React from 'react';

import {
  Grid, Typography,
} from '@material-ui/core';

import Widget from '../../components/Widget/Widget';
import ApexTimeline from '../charts/components/ApexTimeline/ApexTimeline';

const demoData = {
  series: [
    {
      name: 'Series 1as',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Respiration',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime(),
          ],

        },
        {
          x: 'Blood Pressure',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
        {
          x: 'Skin Tone',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime(),
          ],
        },
        {
          x: 'Foot Rash',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
        {
          x: 'Repiration',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Series 2',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
        {
          x: 'Respiration',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime(),
          ],
        },
        {
          x: 'Blood Pressure',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime(),
          ],
        },
        {
          x: 'Skin Tone',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Series 3',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Series 4',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Series 5',
      data: [
        {
          x: 'Body Temp',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Pulse',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
      ],
    },
  ],
};

const noData = { series: [] };

const ApexChart = () => (
  <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={12}>
        <Widget title="Timeline Chart" variant="apexchart" subtitle="Line with Data Labels" noBodyPadding>
          <ApexTimeline mData={demoData} />
        </Widget>
      </Grid>
      <Grid item xs={12} md={12}>
        <Widget title="Timeline Chart" variant="apexchart" subtitle="No Data" noBodyPadding>
          <ApexTimeline mData={noData} />
        </Widget>
      </Grid>
      <Grid item xs={12}>
        <Widget noBodyPadding disableWidgetMenu>
          <Typography display="inline">
            <b>Designers and Developers Note:</b>
            {' '}
            All of these components are from the Apex Open Source Charts.
            It is easy to include any of these examples in the Library.
          </Typography>
          <Typography display="inline">
            <br />
            <a href="https://apexcharts.com/react-chart-demos/timeline-charts/">Link to Docs</a>
          </Typography>
        </Widget>
      </Grid>
    </Grid>
  </>
);

export default ApexChart;
