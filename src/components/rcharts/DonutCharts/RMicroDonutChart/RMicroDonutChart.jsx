import React from 'react';
import PropTypes from 'prop-types';
import {
  RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@material-ui/core';
import { getHeight, heights } from '../../general/charts.helpers';
import NoChartData from '../../general/NoChartData/NoChartData';

const RMicroDonutChart = ({ data, height }) => {
  const theme = useTheme();
  const heightValue = getHeight(theme, height);

  return (
    <ResponsiveContainer height={heightValue}>
      {data != null ? (
        <RadialBarChart
          data={data}
          startAngle={90}
          endAngle={-270}
          innerRadius="75%"
          outerRadius="100%"
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey="percent"
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            data={data}
            dataKey="percent"
            clockWise
            angleAxisId={0}
            background
            fill={theme.palette.colorDataViz1.main}
            cornerRadius={10}
          />
        </RadialBarChart>
      ) : <NoChartData />}
    </ResponsiveContainer>
  );
};

export default RMicroDonutChart;

RMicroDonutChart.defaultProps = {
  data: null,
};

RMicroDonutChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ percent: PropTypes.number })),
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
};
