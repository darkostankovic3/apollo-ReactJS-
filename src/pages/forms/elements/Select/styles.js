import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  label: {
    color: theme.palette.colorNeutral8.main,
    fontSize: '14px',
    paddingBottom: '4px',
  },
  optional: {
    color: theme.palette.colorNeutral6.main,
    paddingLeft: '2px',
  },
  formControlRoot: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
    },
    '& .Mui-focused': {
      '& .MuiSelect-root': {
        color: theme.palette.colorBlack.main,
      },
    },
    '& .MuiOutlinedInput-root.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
      },
    },
    '& .Mui-error.MuiOutlinedInput-root:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.error.main} !important`,
        borderWidth: '2px !important',
      },
    },
    '& .MuiOutlinedInput-root': {
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: `${theme.palette.colorBlue.main} !important`,
        },
      },
    },
    '& .MuiInputBase-root.Mui-disabled': {
      pointerEvents: 'none',
    },
  },
  selected: {
    '& .MuiInputBase-root': {
      '& .MuiSelect-root': {
        color: theme.palette.colorBlack.main,
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: theme.palette.colorWhite.main,
      },
    },
  },
  errorText: {
    marginLeft: '0px',
  },

  // MULTI-Select
  formControlMultiRoot: {
    backgroundColor: theme.palette.colorWhite.main,
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: `${theme.palette.colorBlue.main} !important`,
        },
      },
    },
    '& .MuiInputBase-root.Mui-disabled': {
      pointerEvents: 'none',
    },
  },
  selectMultiRoot: {
    '& .MuiAutocomplete-inputRoot': {
      backgroundColor: theme.palette.colorWhite.main,
      padding: '3px 65px 3px 2px !important',
      lineHeight: '1.5',
      fontSize: '14px',
      minHeight: '32px',
    },
    '& .MuiInputBase-root': {
      '& .MuiChip-outlined': {
        backgroundColor: theme.palette.colorNeutral2.main,
        borderColor: theme.palette.colorNeutral3.main,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        '&:hover': {
          border: `solid 1px ${theme.palette.colorBlue.main}`,
          borderRadius: '4px',
        },
        '&:focus': {
          border: `solid 1px ${theme.palette.colorBlue.main}`,
          borderRadius: '4px',
        },
      },
    },
    '& .Mui-disabled': {
      backgroundColor: theme.palette.colorNeutral2.main,
      borderRadius: '4px',
    },
  },
  standardMulti: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `solid 1px ${theme.palette.colorNeutral4.main}`,
    },
  },
  errorMulti: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `solid 2px ${theme.palette.error.main} !important`,
    },
    '& .MuiOutlinedInput-root:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.error.main} !important`,
        borderWidth: '2px !important',
      },
    },
  },
}));
