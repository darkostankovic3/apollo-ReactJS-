import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  radioContainer: {
    display: 'flex',
    padding: '4px 0 8px 4px',
  },
  radioContainerError: {
    marginTop: '12px',
  },
  label: {
    alignSelf: 'center',
    color: theme.palette.colorBlack.main,
    fontSize: '14px',
  },
  radioGroup: {
    marginLeft: '9px',
  },
  formLabelRoot: {
    color: theme.palette.colorNeutral8.main,
    '&:hover': {
      '& .MuiFormControlLabel-label': {
        fontWeight: 500,
        color: `${theme.palette.colorBlack.main} !important`,
      },
      '& .MuiIconButton-root': {
        backgroundColor: theme.palette.colorVeryLightBlue.main,
        color: theme.palette.colorBlue.main,
      },
      '& .rootError.MuiIconButton-root': {
        color: theme.palette.error.main,
      },
    },
    '& .MuiFormControlLabel-label': {
      paddingLeft: '4px',
      color: theme.palette.colorNeutral8.main,
      fontSize: '14px',
    },
    '& .Mui-disabled.MuiButtonBase-root': {
      color: theme.palette.colorNeutral4.main,
      backgroundColor: theme.palette.colorNeutral2.main,
    },
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: theme.palette.colorBlue.main,
    },
    '& .Mui-checked': {
      '& .MuiFormControlLabel-label': {
        fontWeight: 500,
      },
    },
  },
  formLabelError: {
    '&:hover': {
      '& .MuiButtonBase-root': {
        backgroundColor: 'rgba(226, 0, 0, 0.10)',
        color: theme.palette.error.main,
      },
    },
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: theme.palette.error.main,
    },
  },
  formLabelDisabled: {
    pointerEvents: 'none',
  },
  regularLabel: {
    '& .MuiFormControlLabel-label': {
      fontWeight: 400,
    },
  },
  boldLabel: {
    '& .MuiFormControlLabel-label': {
      fontWeight: 500,
      color: theme.palette.colorBlack.main,
    },
  },
  root: {
    color: theme.palette.colorNeutral4.main,
    padding: 0,
  },
  rootError: {
    color: theme.palette.error.main,
  },
}));
