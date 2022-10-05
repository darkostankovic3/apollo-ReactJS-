/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { useTheme, Box, Typography } from '@material-ui/core';

import {
  ResponsiveContainer,
} from 'recharts';

import ApexCharts from 'react-apexcharts';

import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

import { DataTypeProvider, RowDetailState } from '@devexpress/dx-react-grid';

import useStyles from '../styles';

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

  const TitleStateProvider = (props3) => (
    <DataTypeProvider formatterComponent={TitleStateFormatter} {...props3} />
  );

  function themeOptions() {
    return {
      chart: {
        type: 'line',
        width: 100,
        height: 35,
        sparkline: {
          enabled: true,
        },
      },
      tooltip: {
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter() {
              return ' label';
            },
          },
        },
        marker: {
          show: false,
        },
      },
    };
  }

  const series = [
    {
      name: 'Signed',
      data: [31, 40, 28, 51, 42, 109, 100, 3, 100, 1, 23, 2,
        109, 9, 31, 40, 28, 51, 42, 109, 100, 3, 100, 1, 23, 2, 109, 9],
    },
  ];

  const theme = useTheme();
  const RowDetail = ({ row }) => (

    <Box
      justifyContent="center"
      style={{ paddingTop: '30px', paddingBottom: '30px' }}
    >
      <div style={{ display: 'none' }}>{row.due[0]}</div>
      <ResponsiveContainer height={50} width="99%">
        <ApexCharts
          series={series}
          options={themeOptions(theme)}
          type="line"
          width="100"
          color="red"
        />
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
