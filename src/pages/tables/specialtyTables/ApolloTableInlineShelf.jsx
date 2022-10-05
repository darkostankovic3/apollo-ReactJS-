/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

import { Box, Typography } from '@material-ui/core';

import { DataTypeProvider, RowDetailState } from '@devexpress/dx-react-grid';
import Dot from '../../../components/General/Dot';

import useStyles from '../styles';

function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  const array = new Array(length).fill();
  let lastValue;

  return array.map(() => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min
      || randomValue >= max
      || (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

export default function ApolloTableSimpleExpand({ ...props }) {
  const [columns] = useState([
    { name: 'title', title: 'Title' },
    { name: 'due', title: 'Due Date' },
  ]);

  const [rows] = useState([
    {
      title: ['Title South', 'Sub Title South'],
      due: ['success', '12-DEC-2020'],
    },
    {
      title: ['Title North', 'Sub Title North'],
      due: ['success', '12-DEC-2020'],
    },
    {
      title: ['Title Central', 'Sub Title Central'],
      due: ['warning', '12-DEC-2020'],
    },
    {
      title: ['Title Main', 'Sub Title Main'],
      due: ['warning', '12-DEC-2020'],
    },
    {
      title: ['Title Indiana', 'Sub Title Indianapolis'],
      due: ['success', '12-DEC-2020'],
    },
    {
      title: ['Title LX', 'Sub Title LAX'],
      due: ['success', '12-DEC-2020'],
    },
    {
      title: ['Title South', 'Sub Title South'],
      due: ['error', '12-DEC-2020'],
    },
    {
      title: ['Title Southern', 'Sub Title South'],
      due: ['error', '12-DEC-2020'],
    },
  ]);

  const ColorStateFormatter = ({ value }) => (
    <Box
      display="flex"
      flexWrap="nowrap"
      justifyContent="flex-end"
      style={{ paddingRight: 16 }}
      alignItems="right"
    >
      <Dot
        color={value[0]}
        style={{ marginTop: 4, marginRight: 16 }}
        size="xxsmall"
      />
      <Typography
        variant="text"
        style={{ whiteSpace: 'nowrap' }}
      >
        {value[1]}
      </Typography>
    </Box>
  );

  const ColorStateTypeProvider = (props2) => (
    <DataTypeProvider formatterComponent={ColorStateFormatter} {...props2} />
  );

  const TitleStateFormatter = ({ value }) => (
    <>
      <Typography weight="medium" style={{ color: '#000' }}>
        {' '}
        {value[0]}
      </Typography>
      <Typography variant="text" weight="light" color="textSecondary">
        {' '}
        {value[1]}
      </Typography>
    </>
  );

  const TitleStateProvider = (props2) => (
    <DataTypeProvider formatterComponent={TitleStateFormatter} {...props2} />
  );

  const randomData = React.useMemo(() => getRandomData(10), []);

  const RowDetail = ({ row }) => (

    <Box
      justifyContent="center"
      style={{ paddingTop: '30px', paddingBottom: '30px' }}
    >
      <Typography weight="strong" variant="H5"> Traffic over the last month</Typography>
      <div style={{ display: 'none' }}>{row.due[0]}</div>
      <Typography>
        {' '}
        <b>Max:</b>
        {' '}
        30
      </Typography>
      <Typography>
        {' '}
        <b>Minumum:</b>
        {' '}
        3
      </Typography>
      <ResponsiveContainer height={50} width="99%">
        <AreaChart data={randomData}>
          <Area
            type="natural"
            dataKey="value"
            fill="#333"
            stroke="#333"
            fillOpacity="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );

  const classes = useStyles(props);

  const [due] = useState(['due']);
  const [title] = useState(['title']);
  const [expandedRowIds, setExpandedRowIds] = useState([]);

  const [tableColumnExtensions] = useState([
    { columnName: 'due', align: 'right' },
  ]);

  return (
    <>
      <Grid rows={rows} columns={columns}>
        <RowDetailState
          expandedRowIds={expandedRowIds}
          onExpandedRowIdsChange={setExpandedRowIds}
        />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow class={classes} />
        <TitleStateProvider for={title} />
        <ColorStateTypeProvider for={due} />

        <TableRowDetail
          contentComponent={RowDetail}
        />
      </Grid>
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="center"
        style={{ padding: '10px' }}
        bgcolor="color_neutral_1.main"
      />
    </>
  );
}

// #######################################################################
