import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Cell, Legend, ResponsiveContainer,
} from 'recharts';
import { Typography } from '../../../Wrappers/Wrappers';

import useTooltipStyles from '../../general/ChartTooltip/ChartTooltip.styles';
import useStyles from './RClusterBarChartCard.styles';
import { barRadiusStyle, smallBarWidth } from '../Constants';
import { heights, getHeight } from '../../general/charts.helpers';

function hoverColoring(focusBar, index, color) {
  if (focusBar === null || focusBar === index) {
    return color;
  }
  return fade(color, 0.4);
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
      <>
        <div className={classes.chartTooltip}>
          {data && data[xAxisPrimaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[xAxisPrimaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>{data[primaryValueDescriptionKey] ? data[primaryValueDescriptionKey] : 'Description goes here'}</Typography>
            </>
          ) : null}
          {data && data.secondaryValue != null ? (
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

function XAxisTickEdgeCases({
  x, y, payload, spacing, data, yAxisKey, xAxisPrimaryValueKey, xAxisSecondaryValueKey,
}) {
  const classes = useStyles();
  const barInfo = data.find((info) => info[yAxisKey] === payload.value);

  return (
    <g transform={`translate(${x - spacing},${y})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{payload.value}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo[xAxisPrimaryValueKey] && !barInfo[xAxisSecondaryValueKey] ? (
        <text
          className={classes.chartText}
          x={35}
          y={0}
          textAnchor="start"
        >
          {barInfo[xAxisPrimaryValueKey] === 0 || barInfo[xAxisSecondaryValueKey] === 0 ? '0' : 'No data'}
        </text>
      ) : null}
    </g>
  );
}

function CustomLegend(props) {
  const classes = useStyles();
  const { payload } = props;
  return (
    <ul className={classes.chartLegend}>
      {
          payload.map((entry, index) => (
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

function formatThousands(tickItem) {
  return tickItem > 1000 ? `${tickItem / 1000}k` : tickItem;
}

export default function RClusterBarChartCard({
  data,
  yAxisKey,
  xAxisPrimaryValueKey,
  xAxisSecondaryValueKey,
  primaryValueDescriptionKey,
  secondaryValueDescriptionKey,
  primaryLabel,
  secondaryLabel,
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
        barSize={smallBarWidth}
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
            <XAxisTickEdgeCases
              spacing={theme.spacing(6)}
              data={data}
              yAxisKey={yAxisKey}
              xAxisPrimaryValueKey={xAxisPrimaryValueKey}
              xAxisSecondaryValueKey={xAxisSecondaryValueKey}
            />
)}
          tickLine={false}
          axisLine={{ stroke: theme.palette.colorN.main, strokeWidth: '2px' }}
        />
        <XAxis
          type="number"
          tickMargin={theme.spacing(2)}
          tickFormatter={formatThousands}
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
          name={primaryLabel}
          dataKey={xAxisPrimaryValueKey}
          radius={barRadiusStyle}
          fill={theme.palette.colorDataViz1.main}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar1-${entry.name}`}
              fill={hoverColoring(focusBar, index, theme.palette.colorDataViz1.main)}
            />
          ))}
        </Bar>
        <Bar
          name={secondaryLabel}
          dataKey={xAxisSecondaryValueKey}
          radius={barRadiusStyle}
          fill={theme.palette.primary.main}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar2-${entry.name}`}
              fill={hoverColoring(focusBar, index, theme.palette.primary.main)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

RClusterBarChartCard.defaultProps = {
  data: null,
  yAxisKey: null,
  xAxisPrimaryValueKey: null,
  xAxisSecondaryValueKey: null,
  primaryValueDescriptionKey: null,
  secondaryValueDescriptionKey: null,
  primaryLabel: null,
  secondaryLabel: null,
};

RClusterBarChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  yAxisKey: PropTypes.string,
  xAxisPrimaryValueKey: PropTypes.string,
  xAxisSecondaryValueKey: PropTypes.string,
  primaryValueDescriptionKey: PropTypes.string,
  secondaryValueDescriptionKey: PropTypes.string,
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
};
