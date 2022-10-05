import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import {
  BarChart, Bar, Cell, XAxis, ResponsiveContainer,
} from 'recharts';
import { getHeight, heights } from '../../general/charts.helpers';
import NoChartData from '../../general/NoChartData/NoChartData';
import { DEFAULT_CHART_MARGIN } from '../../general/charts.const';

const RMicroColumnChart = ({
  data,
  height,
  valueKey,
  xAxisLabelKey,
  yAxisLabel,
  highlightMaxMin,
  positiveNegativeHighlight,
}) => {
  const theme = useTheme();
  const heightValue = getHeight(theme, height) + (xAxisLabelKey && getHeight(theme, heights.XAXIS));

  const maxValue = data && data.length
    // eslint-disable-next-line prefer-spread
    ? Math.max.apply(Math, data.map((item) => item[valueKey])) : null;
  const minValue = data && data.length
    // eslint-disable-next-line prefer-spread
    ? Math.min.apply(Math, data.map((item) => item[valueKey])) : null;

  const coloredData = data && data.length ? data.map((item) => {
    let color = theme.palette.colorNeutral4.main;
    if (positiveNegativeHighlight) {
      if (item && item[valueKey] >= 0) {
        color = theme.palette.colorDataViz1.main;
      }
    }
    if (highlightMaxMin) {
      if (item && item[valueKey] >= maxValue) {
        color = theme.palette.colorDataViz1.main;
      }
      if (item && item[valueKey] <= minValue) {
        color = theme.palette.colorDataViz1.colorBlack;
      }
    }

    return {
      ...item,
      color,
    };
  }) : null;

  const showBaseline = positiveNegativeHighlight ? false : !xAxisLabelKey;

  return (
    <ResponsiveContainer height={heightValue}>
      {data ? (
        <BarChart
          data={coloredData}
          margin={{
            // this negative one accomodates for the additional height to show the baseline
            bottom: showBaseline ? -1 : 0,
            left: xAxisLabelKey ? theme.spacing(2.5) : -1 * DEFAULT_CHART_MARGIN,
            right: xAxisLabelKey ? theme.spacing(2.5) : -2 * DEFAULT_CHART_MARGIN,
          }}
        >
          {xAxisLabelKey && (
            <XAxis
              type="category"
              allowDuplicatedCategory={false}
              dataKey={xAxisLabelKey}
              tickLine={false}
              height={showBaseline ? 1 : undefined} // if height < 1 nothing shows
              axisLine={showBaseline ? { stroke: theme.palette.colorN.main, strokeWidth: '2px' } : false}
              scale="point"
              interval="preserveStart"
            />
          )}
          <Bar dataKey={valueKey} yAxisId={yAxisLabel ? 'left' : null}>
            {coloredData.map((entry) => (
              <Cell
                key={`Column-${entry[valueKey]}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </BarChart>
      ) : <NoChartData />}
    </ResponsiveContainer>
  );
};

export default RMicroColumnChart;

RMicroColumnChart.defaultProps = {
  data: null,
  valueKey: null,
  xAxisLabelKey: null,
  yAxisLabel: '-',
  highlightMaxMin: true,
  positiveNegativeHighlight: false,
};

RMicroColumnChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  xAxisLabelKey: PropTypes.string,
  yAxisLabel: PropTypes.string,
  highlightMaxMin: PropTypes.bool,
  positiveNegativeHighlight: PropTypes.bool,
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
};
