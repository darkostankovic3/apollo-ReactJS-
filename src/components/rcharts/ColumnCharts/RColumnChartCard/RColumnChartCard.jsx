import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import ChartTooltip from '../../general/ChartTooltip/ChartTooltip';

import useStyles from '../../charts.styles';
import { getHeight, heights } from '../../general/charts.helpers';
import { barRadius, smallBarWidth } from '../../BarCharts/Constants';

function hoverColoring(focusBar, index, color) {
  if (focusBar === null || focusBar === index) {
    return color;
  }
  return fade(color, 0.4);
}

function CustomTooltip({
  active, payload, valueKey, valueDescriptionKey,
}) {
  if (active) {
    const data = payload && payload.length ? payload[0].payload : null;
    const formatter = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
    });

    const createTitle = (value) => {
      if (value == null) {
        return 'Not available';
      }
      if (value === 0) {
        return '0';
      }
      return formatter.format(value);
    };
    return (
      <ChartTooltip
        title={createTitle(data && data[valueKey])}
        description={data && data[valueDescriptionKey] ? data[valueDescriptionKey] : 'Description goes here'}
      />
    );
  }
  return null;
}

function XAxisTickEdgeCases({
  x, y, payload, spacing, data, xAxisKey, valueKey,
}) {
  const classes = useStyles();
  const barInfo = data.find((info) => info[xAxisKey] === payload.value);
  return (
    <g transform={`translate(${x},${y + spacing})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{payload.value}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo[valueKey] ? (
        <text className={classes.chartText} x={0} y={-32} textAnchor="middle">{barInfo[valueKey] === 0 ? '0' : 'No data'}</text>
      ) : null}
    </g>
  );
}

function formatThousands(tickItem) {
  return tickItem > 1000 ? `${tickItem / 1000}k` : tickItem;
}

export default function RColumnChartCard({
  data,
  xAxisKey,
  valueKey,
  valueDescriptionKey,
}) {
  const [focusBar, setFocusBar] = useState(null);
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  return (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        stackOffset="expand"
        barSize={smallBarWidth}
        margin={{
          top: theme.spacing(6), right: 0, left: -theme.spacing(4), bottom: 0,
        }}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
          } else {
            setFocusBar(null);
          }
        }}
        onMouseLeave={() => {
          setFocusBar(null);
        }}
      >
        <CartesianGrid
          vertical={false}
          stroke={theme.palette.colorN.main}
          strokeDasharray="3 3"
        />
        <XAxis
          type="category"
          dataKey={xAxisKey}
          tick={(
            <XAxisTickEdgeCases
              spacing={theme.spacing(4)}
              data={data}
              xAxisKey={xAxisKey}
              valueKey={valueKey}
            />
)}
          tickLine={false}
          axisLine={{ stroke: theme.palette.colorN.main, strokeWidth: '2px' }}
        />
        <YAxis
          type="number"
          tickMargin={theme.spacing(2)}
          ticks={new Array(data.length + 1).fill(null).map((x, index) => index * 10000)}
          tickFormatter={formatThousands}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          wrapperStyle={{ zIndex: 1 }}
          content={(
            <CustomTooltip
              valueKey={valueKey}
              valueDescriptionKey={valueDescriptionKey}
            />
)}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />

        <Tooltip
          content={(
            <CustomTooltip
              valueKey={valueKey}
              valueDescriptionKey={valueDescriptionKey}
            />
)}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />

        <Bar
          name="Value"
          dataKey={valueKey}
          radius={[barRadius, barRadius, 0, 0]}
          fill={theme.palette.colorDataViz1.main}
        >
          {data.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={hoverColoring(focusBar, index, theme.palette.colorDataViz1.main)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

RColumnChartCard.defaultProps = {
  data: null,
  xAxisKey: null,
  valueKey: null,
  valueDescriptionKey: null,
};

RColumnChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  xAxisKey: PropTypes.string,
  valueKey: PropTypes.string,
  valueDescriptionKey: PropTypes.string,
};
