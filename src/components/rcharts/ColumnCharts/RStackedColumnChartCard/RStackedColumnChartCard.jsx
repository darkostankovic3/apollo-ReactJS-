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
import useStyles from './RStackedColumnChartCard.styles';
import { getHeight, heights } from '../../general/charts.helpers';
import { barRadius, barWidth, smallBarWidth } from '../../BarCharts/Constants';

function CustomTooltip({
  active,
  payload,
  yAxisPrimaryValueKey,
  yAxisSecondaryValueKey,
  yAxisTertiaryValueKey,
  primaryValueDescriptionKey,
  secondaryValueDescriptionKey,
  tertiaryValueDescriptionKey,
}) {
  const classes = useTooltipStyles();
  if (active) {
    const data = payload && payload.length === 3
      ? { ...payload[0].payload, ...payload[1].payload, ...payload[2].payload } : null;

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
          {data && data[yAxisTertiaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[yAxisTertiaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>{data[tertiaryValueDescriptionKey] ? data[tertiaryValueDescriptionKey] : 'Description goes here'}</Typography>
            </>
          ) : null}
          {data && data[yAxisSecondaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[yAxisSecondaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>{data[secondaryValueDescriptionKey] ? data[secondaryValueDescriptionKey] : 'Description goes here'}</Typography>
            </>
          ) : null}
          {data && data[yAxisPrimaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[yAxisPrimaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>{data[primaryValueDescriptionKey] ? data[primaryValueDescriptionKey] : 'Description goes here'}</Typography>
            </>
          ) : null}
        </div>
      </>

    );
  }
  return null;
}

function XAxisTickEdgeCases({
  x,
  y,
  payload,
  data,
  xAxisKey,
  yAxisPrimaryValueKey,
  yAxisSecondaryValueKey,
  yAxisTertiaryValueKey,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const barInfo = data.find((info) => info[xAxisKey] === payload.value);

  const UNAVAILABLE_DATA_TEXT = 'No data';
  const determineExceptionText = () => {
    if (!barInfo) {
      return UNAVAILABLE_DATA_TEXT;
    }
    return (
      barInfo[yAxisPrimaryValueKey] === 0
      || barInfo[yAxisSecondaryValueKey] === 0
      || barInfo[yAxisTertiaryValueKey] === 0 ? '0' : UNAVAILABLE_DATA_TEXT);
  };
  return (
    <g transform={`translate(${x},${y + theme.spacing(4)})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="middle">{payload ? payload.value : '-'}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo
        || (
          !barInfo[yAxisPrimaryValueKey]
          && !barInfo[yAxisSecondaryValueKey]
          && !barInfo[yAxisTertiaryValueKey]
        ) ? (
          <text
            className={classes.chartText}
            x={0}
            y={-theme.spacing(8)}
            textAnchor="middle"
          >
            {determineExceptionText()}
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

export default function RStackedColumnChartCard({
  data,
  xAxisKey,
  yAxisPrimaryValueKey,
  yAxisSecondaryValueKey,
  yAxisTertiaryValueKey,
  primaryValueDescriptionKey,
  secondaryValueDescriptionKey,
  tertiaryValueDescriptionKey,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
}) {
  const [focusBar, setFocusBar] = useState(null);
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  return data && (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        layout="horizontal"
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
        <YAxis
          type="number"
          tickMargin={theme.spacing(2)}
          tickFormatter={formatThousands}
          tickLine={false}
          axisLine={false}
        />
        <XAxis
          type="category"
          dataKey={xAxisKey}
          tick={(
            <XAxisTickEdgeCases
              data={data}
              xAxisKey={xAxisKey}
              yAxisPrimaryValueKey={yAxisPrimaryValueKey}
              yAxisSecondaryValueKey={yAxisSecondaryValueKey}
              yAxisTertiaryValueKey={yAxisTertiaryValueKey}
            />
          )}
          tickLine={false}
          axisLine={{ stroke: theme.palette.colorN.main, strokeWidth: '2px' }}
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
              yAxisTertiaryValueKey={yAxisTertiaryValueKey}
              primaryValueDescriptionKey={primaryValueDescriptionKey}
              secondaryValueDescriptionKey={secondaryValueDescriptionKey}
              tertiaryValueDescriptionKey={tertiaryValueDescriptionKey}
            />
          )}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />
        <Bar
          name={primaryLabel}
          dataKey={yAxisPrimaryValueKey}
          fill={theme.palette.colorDataViz1.main}
          stackId="a"
          barSize={barWidth}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar1-${entry.name}`}
              // eslint-disable-next-line no-nested-ternary
              fill={focusBar === null
                ? theme.palette.colorDataViz1.main : focusBar === index
                  ? theme.palette.colorDataViz1.main
                  : fade(theme.palette.colorDataViz1.main, 0.4)}
            />
          ))}
        </Bar>
        <Bar
          name={secondaryLabel}
          dataKey={yAxisSecondaryValueKey}
          fill={theme.palette.colorDataViz2.main}
          stackId="a"
          barSize={barWidth}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar2-${entry.name}`}
              // eslint-disable-next-line no-nested-ternary
              fill={focusBar === null
                ? theme.palette.colorDataViz2.main : focusBar === index
                  ? theme.palette.colorDataViz2.main
                  : fade(theme.palette.colorDataViz2.main, 0.4)}
            />
          ))}
        </Bar>
        <Bar
          name={tertiaryLabel}
          dataKey={yAxisTertiaryValueKey}
          radius={[barRadius, barRadius, 0, 0]}
          fill={theme.palette.colorDataViz3.main}
          stackId="a"
          barSize={barWidth}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar3-${entry.name}`}
              // eslint-disable-next-line no-nested-ternary
              fill={focusBar === null
                ? theme.palette.colorDataViz3.main : focusBar === index
                  ? theme.palette.colorDataViz3.main
                  : fade(theme.palette.colorDataViz3.main, 0.4)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

RStackedColumnChartCard.defaultProps = {
  data: null,
  xAxisKey: null,
  yAxisPrimaryValueKey: null,
  yAxisSecondaryValueKey: null,
  yAxisTertiaryValueKey: null,
  primaryValueDescriptionKey: null,
  secondaryValueDescriptionKey: null,
  tertiaryValueDescriptionKey: null,
  primaryLabel: null,
  secondaryLabel: null,
  tertiaryLabel: null,
};

RStackedColumnChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  xAxisKey: PropTypes.string,
  yAxisPrimaryValueKey: PropTypes.string,
  yAxisSecondaryValueKey: PropTypes.string,
  yAxisTertiaryValueKey: PropTypes.string,
  primaryValueDescriptionKey: PropTypes.string,
  secondaryValueDescriptionKey: PropTypes.string,
  tertiaryValueDescriptionKey: PropTypes.string,
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
  tertiaryLabel: PropTypes.string,
};
