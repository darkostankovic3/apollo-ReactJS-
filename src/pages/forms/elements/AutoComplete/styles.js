import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {

    '& .MuiFormControl-marginNormal': {
      marginTop: '0px !important',
    },
    '& .MuiOutlinedInput-input::-webkit-input-placeholder ': {
      lineHeight: 'normal !important',
      color: theme.palette.colorNeutral6.main,
      opacity: '1',
    },
    '& .MuiOutlinedInput-input': {

      padding: '0px !important',
      lineHeight: '1.5',
      color: theme.palette.colorNeutral4.main,
      '&:focus': {
        color: 'black',
      },
    },
    '& .MuiChip-root': {
      fontSize: '14px !important',
      backgroundColor: theme.palette.colorNeutral2.main,
      border: theme.palette.colorNeutral3.main,
      borderWidth: '1px !important',
      fontWeight: 500,
      padding: '4px 0px 4px 0px',
      color: theme.palette.colorBlack.main,
      borderStyle: 'solid !important',
    },
    '& .MuiAutocomplete-popupIndicator': {
      display: 'none',
    },
  },
}));
