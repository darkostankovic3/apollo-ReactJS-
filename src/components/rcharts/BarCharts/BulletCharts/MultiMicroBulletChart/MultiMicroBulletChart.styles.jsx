import { makeStyles } from '@material-ui/core';
import { mergeDeepRight } from 'ramda';
import { chartStyles } from '../../../charts.styles';

export default makeStyles((theme) => mergeDeepRight(
  chartStyles(theme),
  {
    noDataText: {
      fill: theme.palette.colorNeutral6.main,
    },
    chartLegend: {
      marginLeft: theme.spacing(16),
    },
  },
));
