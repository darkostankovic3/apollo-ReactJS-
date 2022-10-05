import React, { useState } from 'react';

import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import { Box, Typography } from '@material-ui/core';

import { DataTypeProvider } from '@devexpress/dx-react-grid';
import Dot from '../../../components/General/Dot';

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
      due: ['alert', '12-DEC-2020'],
    },
    {
      title: ['Title LX', 'Sub Title LAX'],
      due: ['error', '12-DEC-2020'],
    },
    {
      title: ['Title South', 'Sub Title South'],
      due: ['current', '12-DEC-2020'],
    },
    {
      title: ['Title Southern', 'Sub Title South'],
      due: ['current', '12-DEC-2020'],
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

  const ColorStateTypeProvider = (colorStateProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DataTypeProvider formatterComponent={ColorStateFormatter} {...colorStateProps} />
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

  const TitleStateProvider = (tableStateProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DataTypeProvider formatterComponent={TitleStateFormatter} {...tableStateProps} />
  );

  const classes = useStyles(props);
  const [due] = useState(['due']);
  const [title] = useState(['title']);

  const [tableColumnExtensions] = useState([
    { columnName: 'due', align: 'right' },
  ]);

  return (
    <>
      <Grid>
        <Grid rows={rows} columns={columns}>
          <Table columnExtensions={tableColumnExtensions} />
          <TableHeaderRow class={classes} />
          <TitleStateProvider for={title} />
          <ColorStateTypeProvider for={due} />
        </Grid>
        <Box
          display="flex"
          flexWrap="nowrap"
          justifyContent="center"
          style={{ padding: '10px' }}
          bgcolor="colorNeutral1.main"
        />
      </Grid>
    </>
  );
}
