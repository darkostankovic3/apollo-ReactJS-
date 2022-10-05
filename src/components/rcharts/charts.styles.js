import { makeStyles } from '@material-ui/core';

export const chartStyles = (theme) => ({
  chartText: {
    fill: theme.palette.colorNeutral7.main,
  },
  labels: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  rightLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  widgetBody: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  chartLegend: {
    padding: 0,
    marginTop: 0,
    whiteSpace: 'nowrap',
    listStyleType: 'none',
  },
  legendSquare: {
    borderRadius: '2px',
    float: 'left',
    width: '16px',
    height: '16px',
    margin: '0 5px',
  },
  chartLegendItem: {
    display: 'inline-block',
    lineHeight: '1em',
    marginRight: theme.spacing(2),
  },
  legendText: {
    color: theme.palette.colorNeutral8.main,
  },
});

export default makeStyles(chartStyles);
