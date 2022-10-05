import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import {
  BarChart, XAxis, YAxis, Bar, Cell, Legend, ResponsiveContainer,
} from 'recharts';

import useStyles from './MultiMicroBulletChart.styles';
import { getHeight, heights } from '../../../general/charts.helpers';
import { barRadiusStyle, barWidth, smallBarWidth } from '../../Constants';

const maxValueLegendName = 'RECHARTS-IGNORE';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function xAxisPercentage(value, max) {
  return `${parseInt(((value / max) * 100), 10)}%`;
}

function AboveBarLeftYAxisTick({
  x, y, payload, data, yAxisKey, xAxisPrimaryValueKey, xAxisSecondaryValueKey,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const barInfo = data.find((info) => info && info[yAxisKey] === payload.value);
  const label = !barInfo ? 'No data' : '0';
  return (
    <g transform={`translate(${x - theme.spacing(2)},${y - theme.spacing(5)})`}>
      <text className={classes.chartText} textAnchor="end">{payload.value}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo || (!barInfo[xAxisPrimaryValueKey] && !barInfo[xAxisSecondaryValueKey]) ? (
        <text
          className={classes.noDataText}
          textAnchor="middle"
          x={theme.spacing(48)}
          y={theme.spacing(5)}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function AboveBarRightYAxisTick({
  x, y, payload, data, yAxisKey, xAxisPrimaryValueKey, xAxisSecondaryValueKey,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const barInfo = data.find((info) => info && info[yAxisKey] === payload.value);
  const label = barInfo ? `${numberWithCommas(barInfo[xAxisPrimaryValueKey])}/${numberWithCommas(barInfo[xAxisSecondaryValueKey])}` : '-';
  return (
    <g transform={`translate(${x + theme.spacing(10)},${y - theme.spacing(5)})`}>
      <text className={classes.chartText} x={10} y={0} textAnchor="end">{label}</text>
    </g>
  );
}

function CustomXAxisTick({
  y, payload, maxValue, index,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const { value, coordinate: x } = payload;
  const xValueDisplay = xAxisPercentage(value, maxValue);
  let textAnchor;
  if (index === 0) {
    // first tick aligns to edge of graph by anchoring start
    textAnchor = 'start';
  } else if (index === 2) {
    // last tick aligns to edge of graph by anchoring end
    textAnchor = 'end';
  } else {
    // middle tick is centered
    textAnchor = 'middle';
  }
  return (
    <g transform={`translate(${x},${y - theme.spacing(2)})`}>
      <text
        className={classes.chartText}
        textAnchor={textAnchor}
      >
        {xValueDisplay}
      </text>
    </g>
  );
}

function CustomLegend(props) {
  const classes = useStyles();
  const { payload } = props;
  const legendData = payload.reverse();
  return (
    <ul className={classes.chartLegend}>
      {
          legendData.map((entry, index) => (entry.value === maxValueLegendName ? null : (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`item-${index}`} className={classes.chartLegendItem}>
              <div className={classes.legendSquare} style={{ background: entry.color }} />
              <span className={classes.legendText}>{entry.value}</span>
            </li>
          )))
        }
    </ul>
  );
}

export default function MultiMicroBulletChart(props) {
  const {
    data,
    yAxisKey,
    xAxisPrimaryValueKey,
    xAxisPrimaryLabel,
    xAxisSecondaryValueKey,
    xAxisSecondaryLabel,
    maxValue,
    height,
  } = props;

  const theme = useTheme();
  const heightValue = getHeight(theme, height);

  const normalizedData = data.map((item) => ({
    ...item,
    maxValue: item ? maxValue : null,
    max: item ? item[xAxisPrimaryValueKey] : null,
  }));

  return (
    <ResponsiveContainer height={heightValue}>
      <BarChart
        data={normalizedData}
        layout="vertical"
        stackOffset="expand"
        barGap={1}
        barSize={barWidth}
      >
        <YAxis
          type="category"
          yAxisId="front"
          dataKey={yAxisKey}
          tick={(
            <AboveBarLeftYAxisTick
              data={data}
              yAxisKey={yAxisKey}
              xAxisPrimaryValueKey={xAxisPrimaryValueKey}
              xAxisSecondaryValueKey={xAxisSecondaryValueKey}
            />
            )}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          type="category"
          yAxisId="back"
          dataKey={yAxisKey}
          orientation="right"
          width={1}
          tick={(
            <AboveBarRightYAxisTick
              data={data}
              yAxisKey={yAxisKey}
              xAxisPrimaryValueKey={xAxisPrimaryValueKey}
              xAxisSecondaryValueKey={xAxisSecondaryValueKey}
            />
            )}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          type="category"
          yAxisId="max"
          dataKey="max"
          tickFormatter={numberWithCommas}
          tickLine={false}
          tick={false}
          axisLine={false}
          orientation="right"
          tickMargin={theme.spacing(4)}
        />
        <XAxis
          type="number"
          tick={<CustomXAxisTick maxValue={maxValue} />}
          domain={[0, maxValue]}
          padding={{ left: -theme.spacing(15), right: -theme.spacing(15) }}
          tickCount={3}
          tickLine={false}
          axisLine={false}
        />
        <Legend
          wrapperStyle={{ overflowX: 'hidden', width: '100%', marginLeft: -theme.spacing(18) }}
          verticalAlign="top"
          align="left"
          content={<CustomLegend />}
        />
        <Bar
          name={maxValueLegendName}
          dataKey="maxValue"
          yAxisId="max"
          barSize={barWidth}
          fill={theme.palette.colorNeutral4.main}
        >
          {normalizedData.map((entry) => (
            <Cell
              key={`Max-${entry.name}`}
              fill={theme.palette.colorNeutral4.main}
            />
          ))}
        </Bar>
        <Bar
          name={xAxisSecondaryLabel}
          dataKey={xAxisSecondaryValueKey}
          yAxisId="back"
          barSize={barWidth}
          fill={theme.palette.colorNeutral5.main}
        >
          {normalizedData.map((entry) => (
            <Cell
              key={`Background-${entry.name}`}
              fill={theme.palette.colorNeutral5.main}
            />
          ))}
        </Bar>
        <Bar
          name={xAxisPrimaryLabel}
          dataKey={xAxisPrimaryValueKey}
          yAxisId="front"
          barSize={smallBarWidth}
          radius={barRadiusStyle}
          fill={theme.palette.colorDataViz1.main}
        >
          {normalizedData.map((entry) => (
            <Cell
              key={`Foreground-${entry.name}`}
              fill={theme.palette.colorDataViz1.main}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

MultiMicroBulletChart.defaultProps = {
  data: null,
  yAxisKey: null,
  xAxisPrimaryValueKey: null,
  xAxisPrimaryLabel: null,
  xAxisSecondaryValueKey: null,
  xAxisSecondaryLabel: null,
  maxValue: null,
};

MultiMicroBulletChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  yAxisKey: PropTypes.string,
  xAxisPrimaryValueKey: PropTypes.string,
  xAxisPrimaryLabel: PropTypes.string,
  xAxisSecondaryValueKey: PropTypes.string,
  xAxisSecondaryLabel: PropTypes.string,
  maxValue: PropTypes.number,
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
};
