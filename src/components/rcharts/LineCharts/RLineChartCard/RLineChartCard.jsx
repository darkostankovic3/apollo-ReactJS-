import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import ChartTooltip from '../../general/ChartTooltip/ChartTooltip';

import useStyles from './RLineChartCard.styles';
import { getHeight, heights } from '../../general/charts.helpers';

function CustomTooltip({
  active,
  payload,
  focusLineIndex,
  focusPoint,
}) {
  if (active && focusPoint && focusLineIndex != null) {
    const entry = payload.find((seriesPoint) => seriesPoint.payload
        && seriesPoint.payload.dataPointId !== null
        && seriesPoint.payload.dataPointId === focusLineIndex);
    const point = entry ? entry.payload : null;

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

    return point ? (
      <ChartTooltip
        title={createTitle(point && point.value)}
        description={point && point.description ? point.description : 'Description goes here'}
      />
    ) : null;
  }
  return null;
}

function CustomXAxisTick({
  x, y, payload, spacing,
}) {
  const classes = useStyles();

  return (
    <g transform={`translate(${x},${y + spacing})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{payload.value}</text>
    </g>
  );
}

function CustomLegend(props) {
  const classes = useStyles();
  const { payload, labels } = props;
  return (
    <ul className={classes.chartLegend}>
      {
          payload.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`item-${index}`} className={classes.chartLegendItem}>
              <div className={classes.legendSquare} style={{ background: entry.color }} />
              <span className={classes.legendText}>{labels[index]}</span>
            </li>
          ))
        }
    </ul>
  );
}

function formatThousands(tickItem) {
  return tickItem > 1000 ? `${tickItem / 1000}k` : tickItem;
}

export default function RLineChartCard({
  data,
}) {
  const multiplier = 10000;
  const [focusLineIndex, setFocusLineIndex] = useState(null);
  const [focusPoint, setFocusPoint] = useState(null);
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  // add a datapoint id onto the data so we can get the tool tip details
  // even when there's entirely null value datapoints
  const chartData = data.map((dataPoint, dataPointIndex) => {
    dataPoint.data.map((entry) => {
      const entryWithId = Object.assign(entry, { dataPointId: dataPointIndex });
      return entryWithId;
    });
    return dataPoint;
  });
  const dataMax = Math.max(...chartData.map((info) => {
    const values = info.data.map((item) => item.value);
    return Math.max(...values);
  }));
  const chartMax = Math.ceil(dataMax / multiplier) * multiplier;

  const customMouseOver = (e, seriesIndex) => {
    setFocusLineIndex(seriesIndex);
    setFocusPoint(e.payload.name);
  };

  const customMouseAway = () => {
    setFocusLineIndex(null);
    setFocusPoint(null);
  };

  return (
    <ResponsiveContainer height={height}>
      <LineChart
        stackOffset="expand"
        margin={{
          top: 0, right: theme.spacing(10), left: -theme.spacing(2), bottom: 0,
        }}
      >
        <CartesianGrid
          vertical={false}
          stroke={theme.palette.colorN.main}
          strokeDasharray="3 3"
        />
        <XAxis
          type="category"
          dataKey="name"
          tick={(
            <CustomXAxisTick
              spacing={theme.spacing(4)}
            />
)}
          allowDuplicatedCategory={false}
          tickLine={false}
          axisLine={{ stroke: theme.palette.colorN.main, strokeWidth: '2px' }}
        />
        <YAxis
          type="number"
          dataKey="value"
          tickMargin={theme.spacing(2)}
          ticks={
            new Array((chartMax / multiplier) + 1).fill(null).map((x, index) => index * multiplier)
          }
          tickCount={(chartMax / multiplier) + 1}
          tickFormatter={formatThousands}
          tickLine={false}
          axisLine={false}
        />
        <Legend
          wrapperStyle={{ overflowX: 'hidden', width: '100%' }}
          verticalAlign="top"
          align="left"
          content={<CustomLegend labels={chartData.map(({ dataPoint }) => dataPoint)} />}
        />
        <Tooltip
          wrapperStyle={{ zIndex: 1 }}
          content={<CustomTooltip focusPoint={focusPoint} focusLineIndex={focusLineIndex} />}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />
        {chartData ? chartData.map((seriesInfo, seriesIndex) => (
          <Line
            key={seriesInfo.dataPoint}
            activeDot={{
              onMouseOver: (e) => customMouseOver(e, seriesIndex),
              onMouseLeave: customMouseAway,
            }}
            isAnimationActive={false}
            dataKey="value"
            data={seriesInfo.data}
            name={seriesInfo.dataPoint}
            stroke={focusLineIndex == null || focusLineIndex === seriesIndex
              ? seriesInfo.color : fade(seriesInfo.color, 0.4)}
            strokeWidth={2}
            dot={seriesInfo.data.length < 10 ? {
              fill: focusLineIndex == null || focusLineIndex === seriesIndex
                ? seriesInfo.color : fade(seriesInfo.color, 0.4),
              stroke: focusLineIndex == null || focusLineIndex === seriesIndex
                ? seriesInfo.color : fade(seriesInfo.color, 0.4),
              strokeWidth: 3,
            } : false}
            onMouseOver={(e) => customMouseAway(e, seriesInfo.dataPoint)}
            onFocus={(e) => customMouseOver(e, seriesInfo.dataPoint)}
            onMouseLeave={customMouseAway}
          />
        )) : null}
      </LineChart>
    </ResponsiveContainer>
  );
}

RLineChartCard.defaultProps = {
  data: null,
};

RLineChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
