import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import {
  Line, XAxis, ComposedChart, Area, ResponsiveContainer,
} from 'recharts';
import { getHeight, heights } from '../../general/charts.helpers';
import NoChartData from '../../general/NoChartData/NoChartData';
import { DEFAULT_CHART_MARGIN } from '../../general/charts.const';
import useStyles from '../../charts.styles';

function findMaxValueInfo(values) {
  const maxValue = Math.max(...values);
  return {
    maxValue,
    maxValueIndex: values.lastIndexOf(maxValue),
  };
}

function findMinValueInfo(values) {
  const minValue = Math.min(...values);
  return {
    minValue,
    minValueIndex: values.findIndex((value) => value === minValue),
  };
}

function CustomDot({
  cx, cy, maxValueIndex, minValueIndex, index,
}) {
  const theme = useTheme();
  const isMin = index === minValueIndex;
  const isMax = index === maxValueIndex;
  const shouldShowDot = isMin || isMax;
  return shouldShowDot ? (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      stroke={theme.palette.colorDataViz1.main}
      fill={theme.palette.colorWhite.main}
      strokeWidth={2}
    />
  ) : null;
}

function CustomXAxisTick({
  x, y, payload, maxValueIndex, minValueIndex, index,
}) {
  const theme = useTheme();
  const classes = useStyles();

  const oneQuarter = (maxValueIndex - minValueIndex) / 4;
  const oneEighth = oneQuarter / 2;
  const quarters = [
    Math.round(oneEighth),
    Math.round(oneQuarter + oneEighth),
    Math.round(2 * oneQuarter + oneEighth),
    Math.round(3 * oneQuarter + oneEighth),
  ];

  const shouldShowTick = quarters.includes(index);
  let textAnchor;

  if (index === quarters[0]) {
    textAnchor = 'start';
  } else if (index === quarters[3]) {
    textAnchor = 'end';
  }
  return shouldShowTick ? (
    <g transform={`translate(${x},${y + theme.spacing(3)})`}>
      <text
        className={classes.chartText}
        textAnchor={textAnchor}
        x={0}
        y={0}
      >
        {payload.value}
      </text>
    </g>
  ) : null;
}

function RMicroSparklineChart(props) {
  const {
    data, height, valueKey, xAxisLabelKey, isBanded, bandMidway,
  } = props;

  const theme = useTheme();
  const heightValue = getHeight(theme, height) + (xAxisLabelKey && getHeight(theme, heights.XAXIS));

  if (!data) {
    return (
      <ResponsiveContainer height={heightValue}>
        <NoChartData />
      </ResponsiveContainer>
    );
  }

  const allValues = data.map((item) => item[valueKey]);

  const maxValueInfo = findMaxValueInfo(allValues);
  let { maxValue } = maxValueInfo;
  const { maxValueIndex } = maxValueInfo;
  const { minValue, minValueIndex } = findMinValueInfo(allValues);

  if (minValue === maxValue && minValue === 0) {
    maxValue = 100;
  }

  const bandedData = data ? data.map((item) => ({
    ...item,
    bandBottom: bandMidway || (maxValue / 2),
    bandTop: bandMidway ? bandMidway * 2 : maxValue,
  })) : [];

  // the margins on our chart depends on whether or not we have an x
  // axis showing, as this stretches the chart and we require less negative margin
  // if we're dealing with a banded chart then we don't have dots and can
  // increase the margin a little bit
  let chartMargin;
  if (isBanded) {
    chartMargin = xAxisLabelKey ? theme.spacing(0.5) : -theme.spacing(4.75);
  } else {
    chartMargin = xAxisLabelKey ? DEFAULT_CHART_MARGIN : -theme.spacing(3.75);
  }
  if (height === heights.KPI) {
    chartMargin += theme.spacing(3);
  }

  const chartMargins = {
    top: DEFAULT_CHART_MARGIN,
    bottom: DEFAULT_CHART_MARGIN,
    left: chartMargin,
    right: chartMargin,
  };

  return (
    <ResponsiveContainer height={heightValue}>
      <ComposedChart
        data={bandedData}
        margin={chartMargins}
      >
        { xAxisLabelKey && (
          <XAxis
            type="category"
            allowDuplicatedCategory={false}
            dataKey={xAxisLabelKey}
            tickLine={false}
            tick={<CustomXAxisTick maxValueIndex={maxValueIndex} minValueIndex={minValueIndex} />}
            axisLine={false}
            scale="point"
            interval="preserveStartEnd"
          />
        )}
        <Area
          yAxisId="left"
          dataKey="bandTop"
          strokeWidth={0}
          fill={theme.palette.colorNeutral2.main}
        />
        {isBanded && (
          <Area
            yAxisId="left"
            dataKey="bandBottom"
            strokeWidth={0}
            fill={theme.palette.colorNeutral4.main}
          />
        )}
        <Line
          yAxisId="left"
          dataKey={valueKey}
          stroke={theme.palette.colorDataViz1.main}
          strokeWidth={3}
          dot={isBanded ? null
            : <CustomDot maxValueIndex={maxValueIndex} minValueIndex={minValueIndex} />}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default RMicroSparklineChart;

RMicroSparklineChart.defaultProps = {
  data: null,
  valueKey: null,
  xAxisLabelKey: null,
  isBanded: false,
  bandMidway: null,
};

RMicroSparklineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  xAxisLabelKey: PropTypes.string,
  isBanded: PropTypes.bool,
  bandMidway: PropTypes.number,
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
};
