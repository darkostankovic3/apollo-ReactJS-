import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  globalApexStyles: {
    margin: '0px 15px -10px 0px',
    '& .apexcharts-legend': {
      left: '-2px !important',
      backgroundColor: `${theme.palette.colorNeutral8.content} !important`,
    },
    '& .apexcharts-tooltip': {
      borderColor: theme.palette.colorNeutral8.main,
      fontFamily: 'Proxima-Nova, Proxima Nova, ProximaNova',
      backgroundColor: `${theme.palette.colorNeutral8.main} !important`,
      padding: '3px 11px 2px 11px',
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
    '& .apexcharts-tooltip-rangebar *': {
      color: `${theme.palette.colorNeutral3.main} !important`,
      fontWeight: 500,
      fontSize: '14px',
    },
    '& .apexcharts-tooltip-rangebar .series-name': {
      color: `${theme.palette.colorWhite.main} !important`,
      borderBottom: '0px',
      paddingBottom: '0px',
      marginBottom: '-2px',
      textAlign: 'left',
      fontSize: '17px !important',
    },
  },
}));
