import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Cell, Legend, ResponsiveContainer,
} from 'recharts';
import useTooltipStyles from '../../../general/ChartTooltip/ChartTooltip.styles';
import { Typography } from '../../../../Wrappers/Wrappers';

import useStyles from './RBulletChartCard.styles';
import {
  barRadiusStyle, barWidth, largeBarWidth, smallBarWidth,
} from '../../Constants';
import { heights, getHeight } from '../../../general/charts.helpers';

function hoverColoring(focusBar, index, color) {
  if (focusBar === null || focusBar === index) {
    return color;
  }
  return fade(color, 0.4);
}

function CustomXAxisTick({ x, y, payload }) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <g transform={`translate(${x},${y + theme.spacing(4)})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{payload.value}</text>
    </g>
  );
}

function AboveBarYAxisTick({
  y, payload, spacing, data, yAxisKey, xAxisPrimaryValueKey, xAxisSecondaryValueKey,
}) {
  const classes = useStyles();
  const barInfo = data.find((info) => info[yAxisKey] === payload.value);
  return (
    <g transform={`translate(${0},${y - spacing})`}>
      <text className={classes.chartText} x={10} y={0} textAnchor="start">{payload.value}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo[xAxisPrimaryValueKey] && !barInfo[xAxisSecondaryValueKey] ? (
        <text
          className={classes.chartText}
          x={10}
          y={30}
          textAnchor="start"
        >
          {barInfo[xAxisPrimaryValueKey] === 0 || barInfo[xAxisSecondaryValueKey] === 0 ? '0' : 'No data'}
        </text>
      ) : null}
    </g>
  );
}

function CustomTooltip(props) {
  const classes = useTooltipStyles();
  const {
    active, payload, xAxisPrimaryValueKey, xAxisSecondaryValueKey,
    primaryValueDescriptionKey, secondaryValueDescriptionKey,
  } = props;
  if (active) {
    const data = payload && payload.length === 2
      ? { ...payload[0].payload, ...payload[1].payload } : null;

    const createTitle = (value) => {
      if (value == null) {
        return 'Not available';
      }
      if (value === 0) {
        return '0';
      }
      return value;
    };
    return (
      <>
        <div className={classes.chartTooltip}>
          {data != null && data[xAxisPrimaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[xAxisPrimaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>{data[primaryValueDescriptionKey] ? data[primaryValueDescriptionKey] : 'Description goes here'}</Typography>
            </>
          ) : null}
          {data != null && data[xAxisSecondaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[xAxisSecondaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>{data[secondaryValueDescriptionKey] ? data[secondaryValueDescriptionKey] : 'Description goes here'}</Typography>
            </>
          ) : null}
        </div>
      </>

    );
  }
  return null;
}

function CustomLegend(props) {
  const classes = useStyles();
  const { payload } = props;
  const legendData = payload.reverse();
  return (
    <ul className={classes.chartLegend}>
      {
          legendData.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`item-${index}`} className={classes.chartLegendItem}>
              <div className={classes.legendSquare} style={{ background: entry.color }} />
              <span className={classes.legendText}>{entry.value}</span>
            </li>
          ))
        }
    </ul>
  );
}

export default function RBulletChartCard({
  data,
  yAxisKey,
  xAxisPrimaryValueKey,
  xAxisSecondaryValueKey,
  primaryValueDescriptionKey,
  secondaryValueDescriptionKey,
}) {
  const [focusBar, setFocusBar] = useState(null);
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  return data && (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        layout="vertical"
        stackOffset="expand"
        barGap={2}
        barSize={barWidth}
        margin={{
          left: -theme.spacing(12),
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
          yAxisId="front"
          dataKey={yAxisKey}
          tick={(
            <AboveBarYAxisTick
              spacing={theme.spacing(7)}
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
          hide
        />
        <XAxis
          type="number"
          tick={<CustomXAxisTick />}
          tickLine={false}
          axisLine={false}
        />
        <Legend
          wrapperStyle={{ overflowX: 'hidden', width: '100%' }}
          verticalAlign="top"
          align="left"
          content={<CustomLegend />}
        />
        <Tooltip
          wrapperStyle={{ zIndex: 1 }}
          content={(
            <CustomTooltip
              xAxisPrimaryValueKey={xAxisPrimaryValueKey}
              xAxisSecondaryValueKey={xAxisSecondaryValueKey}
              primaryValueDescriptionKey={primaryValueDescriptionKey}
              secondaryValueDescriptionKey={secondaryValueDescriptionKey}
            />
          )}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />
        <Bar
          name="Background Value"
          dataKey={xAxisSecondaryValueKey}
          yAxisId="back"
          barSize={largeBarWidth}
          radius={barRadiusStyle}
          fill={theme.palette.colorNeutral4.main}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Background-${entry.name}`}
              fill={hoverColoring(focusBar, index, theme.palette.colorNeutral4.main)}
            />
          ))}
        </Bar>
        <Bar
          name="Foreground Value"
          dataKey={xAxisPrimaryValueKey}
          yAxisId="front"
          barSize={smallBarWidth}
          radius={barRadiusStyle}
          fill={theme.palette.colorDataViz1.main}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Foreground-${entry.name}`}
              fill={hoverColoring(focusBar, index, theme.palette.colorDataViz1.main)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

RBulletChartCard.defaultProps = {
  data: null,
  yAxisKey: null,
  xAxisPrimaryValueKey: null,
  xAxisSecondaryValueKey: null,
  primaryValueDescriptionKey: null,
  secondaryValueDescriptionKey: null,
};

RBulletChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  yAxisKey: PropTypes.string,
  xAxisPrimaryValueKey: PropTypes.string,
  xAxisSecondaryValueKey: PropTypes.string,
  primaryValueDescriptionKey: PropTypes.string,
  secondaryValueDescriptionKey: PropTypes.string,
};
