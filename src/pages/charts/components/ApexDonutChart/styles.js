import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  globalApexStyles: {
    '& .apexcharts-legend': {
      left: '-14px !important',
      backgroundColor: `${theme.palette.colorNeutral8.content} !important`,
    },
    '& .apexcharts-tooltip': {
      borderColor: theme.palette.colorNeutral8.main,
      backgroundColor: `${theme.palette.colorNeutral8.main} !important`,
      padding: '9px',
    },
    '& .apexcharts-tooltip-title': {
      backgroundColor: `${theme.palette.colorNeutral8.main} !important`,
      borderColor: `${theme.palette.colorNeutral8.main} !important`,
      color: `${theme.palette.colorWhite.main} !important`,
      borderBottom: '0px',
      paddingBottom: '0px',
      marginBottom: '0px',
      textAlign: 'left',
    },
    '& .apexcharts-tooltip-series-group': {
      borderWidth: '0px',
      borderColor: `${theme.palette.colorNeutral8.content} !important`,
      backgroundColor: `${theme.palette.colorNeutral8.main} !important`,
      textAlign: 'left',
      flexDirection: 'row',
      flexContent: 'flex-start',
    },
    '& .apexcharts-tooltip-text-value': {
      marginLeft: '-5px',
      fontWeight: '500',
    },
    '& .apexcharts-radialbar .apexcharts-datalabel-label': {
      fontSize: '60px !important',
      fontWeight: '500',
      color: `${theme.palette.colorNeutral8.main} !important`,
      lineHeight: '.9',
    },
    '& .apexcharts-tooltip-y-group .apexcharts-tooltip-text-label': {
      color: `${theme.palette.colorWhite.main} !important`,
      display: 'none',
    },
    '& .apexcharts-tooltip-y-group .apexcharts-tooltip-text-value': {
      color: `${theme.palette.colorWhite.main} !important`,
    },
    '& .apexcharts-data-labels *': {
      fill: `${theme.palette.colorNeutral7.main} !important`,
    },
    '& .apexcharts-yaxis-label *': {
      fill: `${theme.palette.colorNeutral7.main} !important`,
    },
    '& .apexcharts-xaxis-label *': {
      fill: `${theme.palette.colorNeutral7.main} !important`,
    },
    '& .apexcharts-xaxistooltip-bottom ': {
      display: 'none',
    },
  },
}));
