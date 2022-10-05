import React from 'react';
import PropTypes from 'prop-types';
import {
  RadialBarChart, RadialBar, PolarAngleAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@material-ui/core';

import ChartTooltip from '../../general/ChartTooltip/ChartTooltip';
import useStyles from './ReChartsDonutCard.styles';
import { getHeight, heights } from '../../general/charts.helpers';

function CustomTooltip({
  active,
  payload,
}) {
  if (active) {
    const data = payload && payload.length
      ? payload[0].payload : { value: null, description: null };
    const formatter = new Intl.NumberFormat('en-US', {
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
      <ChartTooltip
        title={createTitle(data.value)}
        description={data.description ? data.description : 'Description goes here'}
      />
    );
  }
  return null;
}

export default function ReChartsDonutCard({
  label,
  value,
  percent,
  description,
}) {
  const data = [
    {
      label,
      value,
      percent,
      description,
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  return (
    <ResponsiveContainer height={height}>
      <RadialBarChart
        data={data}
        startAngle={90}
        endAngle={-270}
        innerRadius={110}
        outerRadius={125}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="percent"
          angleAxisId={0}
          tick={false}
        />
        <Tooltip
          wrapperStyle={{ zIndex: 1 }}
          content={<CustomTooltip />}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
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
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={classes.labelValue}
        >
          <tspan
            dx={percent != null ? theme.spacing(3) : theme.spacing(2)}
          >
            {percent != null ? percent : 'N/A'}
          </tspan>
          {percent != null
            ? (
              <tspan
                className={classes.subscript}
                dy={-10}
              >
                %
              </tspan>
            ) : null}
          <tspan
            className={classes.label}
            x="50%"
            dy={50}
          >
            {label}
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

ReChartsDonutCard.defaultProps = {
  value: null,
  percent: null,
  description: null,
};

ReChartsDonutCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  percent: PropTypes.number,
  description: PropTypes.string,
};
