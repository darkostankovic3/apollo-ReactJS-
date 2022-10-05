import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Scatter,
  Tooltip,
  Cell,
  Legend,
  ReferenceArea,
  Label,
  ResponsiveContainer,
} from 'recharts';
import ChartTooltip from '../general/ChartTooltip/ChartTooltip';

import useStyles from './RScatterChartCard.styles';
import { getHeight, heights } from '../general/charts.helpers';

function formatThousands(tickItem) {
  return tickItem > 1000 ? `${tickItem / 1000}k` : tickItem;
}

function hoverColoring(xValue, yValue, hoverInfo, color) {
  if (!hoverInfo || (xValue === hoverInfo.x && yValue === hoverInfo.y)) {
    return color;
  }
  return fade(color, 0.4);
}

const groupBy = (key) => (array) => array.reduce((objectsByKeyValue, obj) => {
  const value = obj[key];
  // eslint-disable-next-line no-param-reassign
  objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
  return objectsByKeyValue;
}, {});

function CustomTooltip({
  active,
  payload,
  xValueKey,
  yValueKey,
  valueDescriptionKey,
}) {
  if (active) {
    const data = payload && payload.length ? payload[0].payload : null;

    const createTitle = (xValue, yValue) => {
      const formatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: 'currency',
        currency: 'USD',
      });

      const getText = (value) => {
        if (value == null) {
          return 'Not available';
        }
        if (value === 0) {
          return '0';
        }
        return formatter.format(value);
      };

      return `${getText(xValue)}/${getText(yValue)}`;
    };

    const title = (data && data[xValueKey] != null && data[yValueKey] != null)
      ? createTitle(data[xValueKey], data[yValueKey])
      : 'Not available';
    const description = data && data[valueDescriptionKey] ? data[valueDescriptionKey] : 'Description goes here';
    return (
      <ChartTooltip
        title={title}
        description={description}
      />
    );
  }
  return null;
}

function CustomLegend({ payload }) {
  const classes = useStyles();
  const theme = useTheme();
  const findAssociatedColor = (entry) => {
    if (entry.payload && entry.payload.children && entry.payload.children.length) {
      const elements = entry.payload.children;
      const elementWithColor = elements.find((element) => element.props && element.props.fill);
      return elementWithColor ? elementWithColor.props.fill : theme.palette.colorN;
    }
    return theme.palette.colorN;
  };
  return (
    <ul className={classes.chartLegend}>
      {
          payload.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`item-${index}`} className={classes.chartLegendItem}>
              <div
                className={classes.legendSquare}
                style={{ background: findAssociatedColor(entry) }}
              />
              <span className={classes.legendText}>{entry.value}</span>
            </li>
          ))
        }
    </ul>
  );
}

export default function RScatterChartCard({
  data,
  groupKey,
  xValueKey,
  yValueKey,
  valueDescriptionKey,
}) {
  const [focusInfo, setFocusInfo] = useState(null);
  const theme = useTheme();
  const height = getHeight(theme, heights.DEFAULT);

  const groupedData = data ? groupBy(groupKey)(data) : null;
  const showLegend = groupedData && Object.keys(groupedData).length > 1;
  return (
    <ResponsiveContainer height={height}>
      <ScatterChart
        margin={{
          top: showLegend ? 0 : theme.spacing(2),
          right: theme.spacing(2),
          left: -theme.spacing(4),
          bottom: 0,
        }}
        onMouseLeave={() => {
          setFocusInfo(null);
        }}
      >
        <CartesianGrid
          stroke={theme.palette.colorN.main}
          strokeDasharray="3 3"
        />
        {/* This is to put a box around the edges of the Grid */}
        <ReferenceArea
          x1={0}
          stroke={theme.palette.colorNeutral4.main}
          strokeOpacity={1}
          strokeWidth={1.5}
          fillOpacity={0}
        >
          {!groupedData && (
          <Label
            value="No data"
            offset={0}
            position="center"
            fontWeight={400}
            fill={theme.palette.colorNeutral6.main}
            fontSize="16px"
          />
          )}
        </ReferenceArea>
        <XAxis
          type="number"
          dataKey={xValueKey}
          tickLine={false}
          axisLine={false}
          ticks={!groupedData ? [0, 25000, 50000, 75000, 100000] : undefined}
          tickFormatter={formatThousands}
          tickMargin={theme.spacing(2)}
        />
        <YAxis
          type="number"
          dataKey={yValueKey}
          tickLine={false}
          axisLine={false}
          ticks={!groupedData ? [0, 25000, 50000, 75000, 100000] : undefined}
          tickFormatter={formatThousands}
          tickMargin={theme.spacing(2)}
        />
        <ZAxis range={[100, 100]} />
        {showLegend && (
        <Legend
          wrapperStyle={{ overflowX: 'hidden', width: '100%' }}
          verticalAlign="top"
          align="left"
          content={<CustomLegend />}
        />
        )}
        <Tooltip
          wrapperStyle={{ zIndex: 1 }}
          content={(
            <CustomTooltip
              xValueKey={xValueKey}
              yValueKey={yValueKey}
              valueDescriptionKey={valueDescriptionKey}
            />
            )}
          cursor={false}
          allowEscapeViewBox={{ x: false, y: true }}
        />
        {groupedData && Object.keys(groupedData).map((groupName, groupIndex) => {
          const scatterData = groupedData[groupName];
          return (
            <Scatter
              key={groupName}
              name={groupName}
              data={scatterData}
              onMouseMove={(state) => {
                if (state && state[xValueKey] != null && state[yValueKey] != null) {
                  setFocusInfo({
                    x: state[xValueKey],
                    y: state[yValueKey],
                  });
                } else {
                  setFocusInfo(null);
                }
              }}
              onMouseLeave={() => {
                setFocusInfo(null);
              }}
            >
              {scatterData.map((entry, index) => (
                <Cell
                    // eslint-disable-next-line react/no-array-index-key
                  key={`cell-${index}`}
                  fill={hoverColoring(
                    entry[xValueKey],
                    entry[yValueKey],
                    focusInfo,
                    theme.palette[`colorDataViz${groupIndex + 1}`].main,
                  )}
                />
              ))}
            </Scatter>
          );
        })}
      </ScatterChart>
    </ResponsiveContainer>
  );
}

RScatterChartCard.defaultProps = {
  data: null,
  groupKey: null,
  xValueKey: null,
  yValueKey: null,
  valueDescriptionKey: null,
};

RScatterChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  groupKey: PropTypes.string,
  xValueKey: PropTypes.string,
  yValueKey: PropTypes.string,
  valueDescriptionKey: PropTypes.string,
};
