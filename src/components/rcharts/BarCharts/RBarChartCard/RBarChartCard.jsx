import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Cell, ResponsiveContainer,
} from 'recharts';
import ChartTooltip from '../../general/ChartTooltip/ChartTooltip';

import useStyles from '../../charts.styles';
import { heights, getHeight } from '../../general/charts.helpers';
import { barRadiusStyle, barWidth } from '../Constants';

function hoverColoring(focusBar, index, color) {
  if (focusBar === null || focusBar === index) {
    return color;
  }
  return fade(color, 0.4);
}

function toPercent(percentageValue) {
  return `${Math.round(percentageValue)}%`;
}

function CustomXAxisTick({ x, y, payload }) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <g transform={`translate(${x},${y + theme.spacing(4)})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{toPercent(payload.value)}</text>
    </g>
  );
}

function AboveBarYAxisTick({
  y, payload, spacing, data, valueKey,
}) {
  const classes = useStyles();
  const barInfo = data.find((info) => info.name === payload.value);
  return (
    <g transform={`translate(${0},${y - spacing})`}>
      <text className={classes.chartText} x={10} y={0} textAnchor="start">{payload.value}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo[valueKey] ? (
        <text className={classes.chartText} x={12} y={30} textAnchor="start">{barInfo[valueKey] === 0 ? '0' : 'No data'}</text>
      ) : null}
    </g>
  );
}

function CustomTooltip({
  active,
  payload,
  xAxisValueKey,
  valueKey,
  valueDescriptionKey,
}) {
  if (active) {
    const data = payload && payload.length ? payload[0].payload : null;

    const createTitle = (percent, value) => {
      if (percent === 0 || value === 0) {
        return '0';
      }
      return `${toPercent(percent)}  (${value})`;
    };
    const title = (data && data[xAxisValueKey] != null && data[valueKey] != null) ? createTitle(data[xAxisValueKey], data[valueKey]) : 'Not available';
    const description = data && data[valueDescriptionKey] ? data[valueDescriptionKey] : 'Description goes here';
    return (<ChartTooltip title={title} description={description} />);
  }
  return null;
}

export default function RBarChartCard({
  data,
  xAxisValueKey,
  yAxisKey,
  valueKey,
  valueDescriptionKey,
}) {
  const [focusBar, setFocusBar] = useState(null);
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  const percentDomain = [0, 100];
  const percentTicks = [0, 25, 50, 75, 100];

  return data && (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        layout="vertical"
        stackOffset="expand"
        barGap={5}
        barSize={barWidth}
        margin={{
          top: theme.spacing(2), right: theme.spacing(6), left: -theme.spacing(12), bottom: 0,
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
          horizontal={false}
          stroke={theme.palette.colorN.main}
          strokeDasharray="3 3"
        />
        <YAxis
          type="category"
          dataKey={yAxisKey}
          tick={(
            <AboveBarYAxisTick
              spacing={theme.spacing(5)}
              data={data}
              valueKey={valueKey}
            />
        )}
          tickLine={false}
          axisLine={false}
        />
        <XAxis
          type="number"
          domain={percentDomain}
          ticks={percentTicks}
          tick={<CustomXAxisTick />}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          wrapperStyle={{ zIndex: 1 }}
          content={(
            <CustomTooltip
              xAxisValueKey={xAxisValueKey}
              valueKey={valueKey}
              valueDescriptionKey={valueDescriptionKey}
            />
        )}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />
        <Bar
          dataKey={xAxisValueKey}
          radius={barRadiusStyle}
        >
          {data.map((entry, index) => (
            <Cell
                // eslint-disable-next-line react/no-array-index-key
              key={`cell-${index}`}
              fill={hoverColoring(focusBar, index, theme.palette.colorDataViz1.main)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

RBarChartCard.defaultProps = {
  data: null,
  /**
  * The name of the javascript object attribute that corresponds to the chart xAxis value
  */
  xAxisValueKey: null,
  /**
  * The name of the javascript object attribute that corresponds to the chart yAxis label
  */
  yAxisKey: null,
  /**
  * The name of the javascript object attribute that corresponds to the chart yAxis value
  */
  valueKey: null,
  /**
  * The name of the javascript object attribute that corresponds
  * to the chart yAxis description that corresponds to a value
  */
  valueDescriptionKey: null,
};

RBarChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  xAxisValueKey: PropTypes.string,
  yAxisKey: PropTypes.string,
  valueKey: PropTypes.string,
  valueDescriptionKey: PropTypes.string,
};
