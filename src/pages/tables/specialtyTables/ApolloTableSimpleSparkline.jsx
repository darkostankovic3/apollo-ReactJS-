import React, { useState } from 'react';

import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
  DataTypeProvider,
} from '@devexpress/dx-react-grid';
import useStyles from './styles';

import SLineMinMax from '../../charts/miniViz/sLineMinMax';
import SColumnMinMax from '../../charts/miniViz/sColumnMinMax';

const randArray = (val) => Array.from({ length: val }, () => Math.floor(Math.random() * val));

export default function EnhancedTable() {
  const columns = [
    { name: 'areaName', title: 'Area Name' },
    { name: 'sparkline', title: 'Micro Viz - Sparkline ' },
    { name: 'latestMonth', title: 'Latest Month' },
    { name: 'vsSame', title: 'vs Same' },
    { name: 'latestYr', title: 'Latest Yr Trips' },
    { name: 'vsPY', title: 'vs. PY' },
    { name: 'winLoss', title: 'Micro Viz - Win Loss ' },
  ];
  const rows = [
    {
      id: 1,
      areaName: 'Near North Side',
      sparkline: randArray(10),
      latestMonth: '$418,986',
      vsSame: '-30.0%',
      latestYr: '5,908,758',
      vsPY: '-24.2',
      winLoss: randArray(10),
    },
    {
      id: 2,
      areaName: 'Loop',
      sparkline: randArray(10),
      latestMonth: '$305,562',
      vsSame: '-23.7%',
      latestYr: '4,288,823',
      vsPY: '-17.5',
      winLoss: randArray(10),
    },
    {
      id: 3,
      areaName: 'Near West Side',
      sparkline: randArray(10),
      latestMonth: '$119,817',
      vsSame: '-26.5%',
      latestYr: '1,580,838',
      vsPY: '-23.7',
      winLoss: randArray(10),
    },
    {
      id: 4,
      areaName: 'Ohare',
      sparkline: randArray(10),
      latestMonth: '$64,553',
      vsSame: '-28.0%',
      latestYr: '1,230,250',
      vsPY: '-20.2',
      winLoss: randArray(10),
    },
    {
      id: 5,
      areaName: 'Lincoln Park',
      sparkline: randArray(10),
      latestMonth: '$47,110',
      vsSame: '-48.4%',
      latestYr: '951,807',
      vsPY: '-38.5',
      winLoss: randArray(10),
    },
  ];
  const VsSameFormatter = ({ row }) => (
    <div
      style={{
        color: 'red',
      }}
    >
      {row.vsSame}
    </div>
  );

  const VsPyFormatter = ({ row }) => (
    <div
      style={{
        color: 'red',
      }}
    >
      {row.vsPY}
    </div>
  );

  const SparklineFormatter = () => (
    <div
      style={{
        display: 'flex',
        paddingRight: '20px',
      }}
    >
      <SLineMinMax
        graphData={[
          {
            data: randArray(20),
          },
        ]}
        gHeight="40"
      />
    </div>
  );

  const VsWinLossFormatter = () => (
    <div
      style={{
        display: 'flex',
        paddingRight: '20px',
      }}
    >
      <SColumnMinMax
        graphData={[
          {
            data: randArray(20),
          },
        ]}
        gHeight="20px"
      />
    </div>
  );

  const [sparklineData] = useState(['sparkline']);
  const [vsPYData] = useState(['vsPY']);
  const [winLossData] = useState(['winLoss']);
  const [vsSameData] = useState(['vsSame']);
  const classes = useStyles();
  return (
    <>
      <Grid
        rows={rows}
        columns={columns}
        className={classes.gridTableTheme}
      >
        <DataTypeProvider
          for={vsSameData}
          formatterComponent={VsSameFormatter}
        />
        <DataTypeProvider
          for={vsPYData}
          formatterComponent={VsPyFormatter}
        />
        <DataTypeProvider
          for={winLossData}
          formatterComponent={VsWinLossFormatter}
        />
        <DataTypeProvider
          for={sparklineData}
          formatterComponent={SparklineFormatter}
        />
        <Table />
        <TableHeaderRow />
      </Grid>
    </>
  );
}
