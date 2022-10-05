import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import {
  BarChart, XAxis, YAxis, Bar, Cell, Legend, ResponsiveContainer,
} from 'recharts';

import useStyles from '../../../charts.styles';
import {
  barRadiusStyle, barWidth, largeBarWidth, smallBarWidth,
} from '../../Constants';
import { getHeight, heights } from '../../../general/charts.helpers';
import NoChartData from '../../../general/NoChartData/NoChartData';

const maxValueLegendName = 'RECHARTS-IGNORE';

function CustomLegend(props) {
  const classes = useStyles();
  const { payload } = props;
  const legendData = payload.reverse();
  return (
    <ul className={classes.chartLegend}>
      {
          legendData.map((entry, index) => (entry.value === maxValueLegendName ? null : (
          // eslint-disable-next-line react/no-array-index-key
            <li key={`item-${index}`} className={classes.chartLegendItem}>
              <div className={classes.legendSquare} style={{ background: entry.color }} />
              <span className={classes.legendText}>{entry.value}</span>
            </li>
          )))
        }
    </ul>
  );
}

const RBulletChart = ({
  primaryLabel, // legend label
  secondaryLabel, // legend label
  showLegend,
  height,
  data,
}) => {
  const theme = useTheme();
  const heightValue = getHeight(theme, height);

  const dataPoint = (data != null && data.length) ? data[0] : {};
  const { primaryValue, secondaryValue } = dataPoint;

  return (
    <ResponsiveContainer height={heightValue}>
      {(primaryValue != null || secondaryValue != null) ? (
        <BarChart
          data={data}
          layout="vertical"
          stackOffset="expand"
          barGap={2}
          barSize={barWidth}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* These hidden YAxis allow for the bars to stack on top
         of each other to create the 'bullet' appearance */}
          <YAxis
            type="category"
            yAxisId="front"
            hide
          />
          <YAxis
            type="category"
            yAxisId="back"
            hide
          />
          <YAxis
            type="category"
            yAxisId="max"
            hide
          />
          <XAxis
            type="number"
            hide
          />
          {showLegend && (
          <Legend
            wrapperStyle={{ overflowX: 'hidden', width: '100%' }}
            verticalAlign="top"
            align="left"
            content={<CustomLegend />}
          />
          )}
          <Bar
            name={maxValueLegendName}
            dataKey="maxValue"
            yAxisId="max"
            barSize={largeBarWidth}
            fill={theme.palette.colorNeutral4.main}
          >
            {data.map((entry) => (
              <Cell
                key={`Max-${entry.name}`}
                fill={theme.palette.colorNeutral4.main}
              />
            ))}
          </Bar>
          <Bar
            name={secondaryLabel || 'secondaryLabel'}
            dataKey="secondaryValue"
            yAxisId="back"
            barSize={largeBarWidth}
            fill={theme.palette.colorNeutral5.main}
          >
            {data.map((entry) => (
              <Cell
                key={`Background-${entry.name}`}
                fill={theme.palette.colorNeutral5.main}
              />
            ))}
          </Bar>
          <Bar
            name={primaryLabel || 'primaryLabel'}
            dataKey="primaryValue"
            yAxisId="front"
            barSize={smallBarWidth}
            radius={barRadiusStyle}
            fill={theme.palette.colorDataViz1.main}
          >
            {data.map((entry) => (
              <Cell
                key={`Foreground-${entry.name}`}
                fill={theme.palette.colorDataViz1.main}
              />
            ))}
          </Bar>
        </BarChart>
      ) : <NoChartData />}
    </ResponsiveContainer>
  );
};

export default RBulletChart;

RBulletChart.defaultProps = {
  primaryLabel: null,
  secondaryLabel: null,
  showLegend: true,
  data: null,
};

RBulletChart.propTypes = {
  primaryLabel: PropTypes.string,
  secondaryLabel: PropTypes.string,
  showLegend: PropTypes.bool,
  height: PropTypes.oneOf([
    heights.DEFAULT,
    heights.MULTI,
    heights.KPI,
    heights.TABLE,
    heights.MICROVIZ,
  ]).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    primaryValue: PropTypes.number,
    secondaryValue: PropTypes.number,
    maxValue: PropTypes.number,
  })),
};
