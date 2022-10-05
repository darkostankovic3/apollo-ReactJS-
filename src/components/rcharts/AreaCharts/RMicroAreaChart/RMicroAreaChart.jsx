import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useTheme } from '@material-ui/core';
import {
  AreaChart, Area, XAxis, ResponsiveContainer,
} from 'recharts';
import NoChartData from '../../general/NoChartData/NoChartData';
import { getHeight, heights } from '../../general/charts.helpers';

const RMicroAreaChart = (props) => {
  const {
    data, valueKey, xAxisLabelKey, height,
  } = props;
  const theme = useTheme();
  const heightValue = getHeight(theme, height) + (xAxisLabelKey && getHeight(theme, heights.XAXIS));

  return (
    <ResponsiveContainer height={heightValue}>
      {data ? (
        <AreaChart
          data={data}
          margin={{
            top: theme.spacing(1),
            right: 0,
            left: 0,
            bottom: xAxisLabelKey ? theme.spacing(4) : theme.spacing(1),
          }}
        >
          { xAxisLabelKey && (
            <XAxis
              type="category"
              allowDuplicatedCategory={false}
              dataKey={xAxisLabelKey}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
          )}
          <Area
            yAxisId="left"
            dataKey={valueKey}
            stroke={theme.palette.colorDataViz1.main}
            strokeWidth={3}
            fill={fade(theme.palette.colorDataViz1.main, 0.4)}
          />
        </AreaChart>
      ) : <NoChartData />}
    </ResponsiveContainer>
  );
};

export default RMicroAreaChart;

RMicroAreaChart.defaultProps = {
  data: null,
  valueKey: null,
  xAxisLabelKey: null,
};

RMicroAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  valueKey: PropTypes.string,
  xAxisLabelKey: PropTypes.string,
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
};
