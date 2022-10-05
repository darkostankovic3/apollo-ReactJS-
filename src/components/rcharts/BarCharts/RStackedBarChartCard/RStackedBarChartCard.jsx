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
import useStyles from './RStackedBarChartCard.styles';
import { barRadiusStyle, barWidth, smallBarWidth } from '../Constants';
import { heights, getHeight } from '../../general/charts.helpers';

function hoverColoring(focusBar, index, color) {
  if (focusBar === null || focusBar === index) {
    return color;
  }
  return fade(color, 0.4);
}

function CustomTooltip({
  active,
  payload,
  xAxisPrimaryValueKey,
  xAxisSecondaryValueKey,
  xAxisTertiaryValueKey,
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
          {data && data[xAxisPrimaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[xAxisPrimaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>
                {data[primaryValueDescriptionKey] ? data[primaryValueDescriptionKey] : 'Description goes here'}
              </Typography>
            </>
          ) : null}
          {data && data[xAxisSecondaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[xAxisSecondaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>
                {data[secondaryValueDescriptionKey] ? data[secondaryValueDescriptionKey] : 'Description goes here'}
              </Typography>
            </>
          ) : null}
          {data && data[xAxisTertiaryValueKey] != null ? (
            <>
              <Typography weight="bold" className={classes.chartTooltipTitle}>{createTitle(data[xAxisTertiaryValueKey])}</Typography>
              <Typography variant="body2" className={classes.chartTooltipDescription}>
                {data[tertiaryValueDescriptionKey] ? data[tertiaryValueDescriptionKey] : 'Description goes here'}
              </Typography>
            </>
          ) : null}
        </div>
      </>

    );
  }
  return null;
}

function formatThousands(tickItem) {
  return tickItem > 1000 ? `${tickItem / 1000}k` : tickItem;
}

function YAxisTickEdgeCases({
  x,
  y,
  payload,
  data,
  yAxisKey,
  xAxisPrimaryValueKey,
  xAxisSecondaryValueKey,
  xAxisTertiaryValueKey,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const barInfo = data.find((info) => info[yAxisKey] === payload.value);

  const determineExceptionText = () => {
    if (!barInfo) {
      return 'No data';
    }
    return (
      barInfo[xAxisPrimaryValueKey] === 0
      || barInfo[xAxisSecondaryValueKey] === 0
      || barInfo[xAxisTertiaryValueKey] === 0 ? '0' : 'No data');
  };
  return (
    <g transform={`translate(${x},${y + 5})`}>
      <text className={classes.chartText} x={0} y={0} textAnchor="end">{payload ? payload.value : '-'}</text>
      {/* Handles cases where there is 0 data or no data */}
      {!barInfo
        || (
          !barInfo[xAxisPrimaryValueKey]
          && !barInfo[xAxisSecondaryValueKey]
          && !barInfo[xAxisTertiaryValueKey]
        ) ? (
          <text
            className={classes.chartText}
            x={theme.spacing(4)}
            y={0}
            textAnchor="start"
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

export default function RStackedBarChartCard({
  data,
  yAxisKey,
  xAxisPrimaryValueKey,
  xAxisSecondaryValueKey,
  xAxisTertiaryValueKey,
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

  return (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        layout="vertical"
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
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={theme.spacing(2)}
          tickFormatter={formatThousands}
        />
        <YAxis
          type="category"
          dataKey={yAxisKey}
          tick={(
            <YAxisTickEdgeCases
              data={data}
              yAxisKey={yAxisKey}
              xAxisPrimaryValueKey={xAxisPrimaryValueKey}
              xAxisSecondaryValueKey={xAxisSecondaryValueKey}
              xAxisTertiaryValueKey={xAxisTertiaryValueKey}
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
              xAxisPrimaryValueKey={xAxisPrimaryValueKey}
              xAxisSecondaryValueKey={xAxisSecondaryValueKey}
              xAxisTertiaryValueKey={xAxisTertiaryValueKey}
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
          dataKey={xAxisPrimaryValueKey}
          fill={theme.palette.colorDataViz1.main}
          stackId="a"
          barSize={barWidth}
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
          fill={theme.palette.colorDataViz2.main}
          stackId="a"
          barSize={barWidth}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar2-${entry.name}`}
              fill={hoverColoring(focusBar, index, theme.palette.colorDataViz2.main)}
            />
          ))}
        </Bar>
        <Bar
          name={tertiaryLabel}
          dataKey={xAxisTertiaryValueKey}
          radius={barRadiusStyle}
          fill={theme.palette.colorDataViz3.main}
          stackId="a"
          barSize={barWidth}
        >
          {data.map((entry, index) => (
            <Cell
              key={`Bar3-${entry.name}`}
              fill={hoverColoring(focusBar, index, theme.palette.colorDataViz3.main)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

RStackedBarChartCard.defaultProps = {
  data: null,
  yAxisKey: null,
  xAxisPrimaryValueKey: null,
  xAxisSecondaryValueKey: null,
  xAxisTertiaryValueKey: null,
  primaryValueDescriptionKey: null,
  secondaryValueDescriptionKey: null,
  tertiaryValueDescriptionKey: null,
  primaryLabel: null,
  secondaryLabel: null,
  tertiaryLabel: null,
};

RStackedBarChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  yAxisKey: PropTypes.string,
  xAxisPrimaryValueKey: PropTypes.string,
  xAxisSecondaryValueKey: PropTypes.string,
  xAxisTertiaryValueKey: PropTypes.string,
  primaryValueDescriptionKey: PropTypes.string,
  secondaryValueDescriptionKey: PropTypes.string,
  tertiaryValueDescriptionKey: PropTypes.string,
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
  tertiaryLabel: PropTypes.string,
};
