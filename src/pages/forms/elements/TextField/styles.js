import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  textFieldContainer: {
    padding: '12px 0',
    marginRight: '12px',
  },
  label: {
    fontSize: '14px',
    lineHeight: '1.71',
    paddingBottom: '4px',
  },
  labelText: {
    color: theme.palette.colorNeutral8.main,
  },
  optional: {
    color: theme.palette.colorNeutral6.main,
    paddingLeft: '2px',
  },
  required: {
    color: theme.palette.colorNeutral9.main,
    paddingLeft: '2px',
  },
  root: {
    '& .MuiOutlinedInput-input': {
      padding: '10px',
      lineHeight: '1.5',
      fontSize: '16px',
      color: theme.palette.colorNeutral6.main,
      '&:focus': {
        color: 'black',
      },
    },
    '& .MuiOutlinedInput-root:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.colorBlue.main,
      },
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
      },
    },
    '& .MuiOutlinedInput-root.Mui-error.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
      },
    },
    '& .MuiOutlinedInput-root.Mui-error:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.error.main,
      },
    },
    '& .MuiOutlinedInput-root.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: theme.palette.error.main,
      },
    },
    '& .MuiFormHelperText-root': {
      marginLeft: '0px',
    },
    '& .Mui-disabled': {
      '& .Mui-disabled': {
        backgroundColor: theme.palette.colorNeutral2.main,
        borderRadius: '4px',
      },
    },
    '& .MuiButtonBase-root': {
      padding: '8px',
      '& .MuiSvgIcon-root': {
        height: '18px',
        width: '18px',
      },
    },
  },
}));
