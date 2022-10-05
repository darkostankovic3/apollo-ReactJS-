import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  globalApexStyles: {
    margin: '0 15px -10px 15px',
    '& .apexcharts-canvas': {
      margin: '-14px',
      marginBottom: '-22px !important',
      padding: '0px !important',
    },
    '& .apexcharts-tooltip': {
      borderColor: theme.palette.colorNeutral8.main,
      fontFamily: 'Proxima-Nova, Proxima Nova, ProximaNova',
      backgroundColor: `${theme.palette.colorNeutral8.main} !important`,
      padding: '3px 11px 0px 11px',
    },
    '& .apexcharts-tooltip *': {
      fontFamily: 'Proxima-Nova, Proxima Nova, ProximaNova',
    },
    '& .apexcharts-tooltip-title': {
      backgroundColor: `${theme.palette.colorNeutral8.main} !important`,
      borderColor: `${theme.palette.colorNeutral8.main} !important`,
      color: theme.palette.colorWhite.main,
      borderBottom: '0px',
      paddingBottom: '0px',
      marginBottom: '-6px',
      textAlign: 'left',
      fontSize: '17px !important',
    },
    '& .apexcharts-tooltip-series-group': {
      borderWidth: '0px',
      borderColor: theme.palette.colorNeutral8.content,
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
      color: `${theme.palette.colorNeutral3.main} !important`,
      fontSize: '14px',
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
    '& .apexcharts-datalabel': {
      fill: `${theme.palette.colorNeutral7.main} !important`,
    },
  },
}));
