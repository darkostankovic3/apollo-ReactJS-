import { makeStyles } from '@material-ui/core';
import { mergeDeepRight } from 'ramda';
import { chartStyles } from '../../charts.styles';

export default makeStyles((theme) => mergeDeepRight(
  chartStyles(theme),
  {
    chartText: {
      fill: theme.palette.colorNeutral6.main,
    },
  },
));
