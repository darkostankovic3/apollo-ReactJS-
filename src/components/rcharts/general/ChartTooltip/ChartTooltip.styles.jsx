import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  chartTooltip: {
    maxWidth: '280px',
    minWidth: '80px',
    borderRadius: '4px',
    boxShadow: theme.customShadows.chartTooltip,
    backgroundColor: theme.palette.colorNeutral8.main,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    margin: 0,
  },
  chartTooltipTitle: {
    color: theme.palette.message.main,
  },
  chartTooltipDescription: {
    color: theme.palette.colorNeutral4.main,
  },
}));
