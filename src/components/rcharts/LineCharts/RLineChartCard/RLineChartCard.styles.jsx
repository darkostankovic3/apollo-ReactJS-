import { makeStyles } from '@material-ui/core';
import { mergeDeepRight } from 'ramda';
import { chartStyles } from '../../charts.styles';

export default makeStyles((theme) => mergeDeepRight(
  chartStyles(theme),
  {
    chartLegend: {
      paddingBottom: theme.spacing(4),
    },
    legendSquare: {
      borderRadius: '50%', // circle instead of square
      width: '10px',
      height: '10px',
      margin: '2px 10px',
    },
  },
));
