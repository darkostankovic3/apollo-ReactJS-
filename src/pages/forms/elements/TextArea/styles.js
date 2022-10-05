import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  textAreaContainer: {
    padding: '12px 0',
    marginRight: '12px',
  },
  label: {
    fontSize: '14px',
    lineHeight: '1.71',
    color: theme.palette.colorNeutral8.main,
    paddingBottom: '4px',
  },
  labelText: {
    color: theme.palette.colorNeutral8.main,
  },
  optional: {
    color: theme.palette.colorNeutral6.main,
    paddingLeft: '2px',
  },
  gridItem: {
    marginBottom: '12px',
  },
  root: {
    '& .MuiOutlinedInput-input': {
      padding: '8px',
      lineHeight: '1.5',
      fontSize: '14px',
      width: '100%',
      color: theme.palette.colorNeutral6.main,
      '&:focus': {
        color: 'black',
      },
    },
    '& .MuiOutlinedInput-root': {
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.colorBlue.main,
        },
      },
      '& > textarea': {
        display: 'block',
        resize: 'both',
        width: '100%',
        overflow: 'hidden',
      },
    },
    '& .MuiOutlinedInput-root.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
      },
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
      },
    },
    '& .MuiOutlinedInput-root.Mui-disabled': {
      '& .MuiOutlinedInput-notchedOutline': {
        // TODO correct bg color, but same as default text color
        // backgroundColor: theme.palette.colorNeutral2.main,
        borderColor: `${theme.palette.colorNeutral4.main}`,
      },
    },
    '& .MuiOutlinedInput-multiline': {
      padding: '0',
    },
    '& .Mui-disabled': {
      '& .Mui-disabled': {
        backgroundColor: theme.palette.colorNeutral2.main,
        borderRadius: '4px',
      },
    },
  },
  error: {
    '& .MuiOutlinedInput-root:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.error.main} !important`,
        borderWidth: '2px !important',
      },
    },
    '& .MuiOutlinedInput-root:focus': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px !important',
      },
    },
  },
  disabled: {
    pointerEvents: 'none',
    '& .MuiOutlinedInput-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${theme.palette.colorNeutral4.main} !important`,
        color: theme.palette.colorNeutral7.main,
      },
    },
  },
}));
