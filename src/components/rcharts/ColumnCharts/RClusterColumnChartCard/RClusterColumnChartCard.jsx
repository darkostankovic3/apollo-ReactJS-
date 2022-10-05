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
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Typography } from '../../../Wrappers/Wrappers';

import useTooltipStyles from '../../general/ChartTooltip/ChartTooltip.styles';
import useStyles from './RClusterColumnChartCard.styles';
import { heights, getHeight } from '../../general/charts.helpers';
import { barRadius, smallBarWidth } from '../../BarCharts/Constants';

function hoverColoring(focusBar, index, color) {
  if (focusBar === null || focusBar === index) {
    return color;
  }
  return fade(color, 0.4);
}

function CustomTooltip({
  active,
  payload,
  yAxisPrimaryValueKey,
  yAxisSecondaryValueKey,
  primaryValueDescriptionKey,
  secondaryValueDescriptionKey,
}) {
  const classes = useTooltipStyles();
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
          {data && data[yAxisPrimaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[yAxisPrimaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>
                {data[primaryValueDescriptionKey] ? data[primaryValueDescriptionKey] : 'Description goes here'}
              </Typography>
            </>
          ) : null}
          {data && data[yAxisSecondaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[yAxisSecondaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>
                {data[secondaryValueDescriptionKey] ? data[secondaryValueDescriptionKey] : 'Description goes here'}
              </Typography>
            </>
          ) : null}
        </div>
      </>

    );
  }
  return null;
}

function XAxisTickEdgeCases({
  x, y, payload, spacing, data, xAxisKey, yAxisPrimaryValueKey, yAxisSecondaryValueKey,
}) {
  const classes = useStyles();
  const barInfo = data.find((info) => info[xAxisKey] === payload.value);

  return (
    <g transform={`translate(${x},${y + spacing})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{payload.value}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo[yAxisPrimaryValueKey] && !barInfo[yAxisSecondaryValueKey] ? (
        <text
          className={classes.chartText}
          x={0}
          y={-32}
          textAnchor="middle"
        >
          {barInfo[yAxisPrimaryValueKey] === 0 || barInfo[yAxisSecondaryValueKey] === 0 ? '0' : 'No data'}
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

export default function RClusterColumnChartCard({
  data,
  xAxisKey,
  yAxisPrimaryValueKey,
  yAxisSecondaryValueKey,
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
        stackOffset="expand"
        barSize={smallBarWidth}
        margin={{
          left: -theme.spacing(4),
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
              yAxisPrimaryValueKey={yAxisPrimaryValueKey}
              yAxisSecondaryValueKey={yAxisSecondaryValueKey}
            />
)}
          tickLine={false}
          axisLine={{ stroke: theme.palette.colorN.main, strokeWidth: '2px' }}
        />
        <YAxis
          type="number"
          tickMargin={theme.spacing(2)}
          ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]}
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
              yAxisPrimaryValueKey={yAxisPrimaryValueKey}
              yAxisSecondaryValueKey={yAxisSecondaryValueKey}
              primaryValueDescriptionKey={primaryValueDescriptionKey}
              secondaryValueDescriptionKey={secondaryValueDescriptionKey}
            />
          )}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />
        <Bar
          name={primaryLabel}
          dataKey={yAxisPrimaryValueKey}
          radius={[barRadius, barRadius, 0, 0]}
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
          dataKey={yAxisSecondaryValueKey}
          radius={[barRadius, barRadius, 0, 0]}
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

RClusterColumnChartCard.defaultProps = {
  data: null,
  xAxisKey: null,
  yAxisPrimaryValueKey: null,
  yAxisSecondaryValueKey: null,
  primaryValueDescriptionKey: null,
  secondaryValueDescriptionKey: null,
  primaryLabel: null,
  secondaryLabel: null,
};

RClusterColumnChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  xAxisKey: PropTypes.string,
  yAxisPrimaryValueKey: PropTypes.string,
  yAxisSecondaryValueKey: PropTypes.string,
  primaryValueDescriptionKey: PropTypes.string,
  secondaryValueDescriptionKey: PropTypes.string,
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
};
