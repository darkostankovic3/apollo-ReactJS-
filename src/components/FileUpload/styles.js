import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  dropzoneWrapper: {
    height: theme.spacing(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&, &:focus': {
      padding: theme.spacing(4),
      border: `1px dashed ${theme.palette.colorNeutral5.main}`,
      borderRadius: 4,
      backgroundColor: theme.palette.colorNeutral2.main,
      transition: theme.transitions.create(['background-color', 'border']),
      outline: 'none',

      '&:hover': {
        border: `1px dashed ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.colorVeryLightBlue.main,
        cursor: 'pointer',

        '& $dropzoneContent': {
          color: theme.palette.primary.main,
        },
      },
    },
  },

  dropzoneWrapperActive: {
    border: `1px dashed ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.colorVeryLightBlue.main,
    cursor: 'pointer',

    '& $dropzoneContent': {
      color: theme.palette.primary.main,
    },
  },

  dropzoneWrapperDisabled: {
    opacity: 0.4,

    '&:hover': {
      border: `1px dashed ${theme.palette.colorNeutral5.main}`,
      backgroundColor: theme.palette.colorNeutral2.main,
      cursor: 'not-allowed',

      '& $dropzoneContent': {
        color: theme.palette.colorNeutral7.main,
      },
    },
  },

  dropzoneContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.colorNeutral7.main,
    transition: theme.transitions.create(['color']),
  },

  labelWrapper: {
    marginBottom: theme.spacing(1),
  },

  label: {
    color: theme.palette.colorNeutral8.main,
    lineHeight: 1.71,
  },

  iconWrapper: {
    width: 27,
    height: 32,
  },

  icon: {
    width: '100%',
    height: '100%',
  },

  activeText: {
    color: theme.palette.primary.main,
  },

  fileItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 32,
    padding: 0,
  },

  errorFileItem: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0,
  },

  errorFileState: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  errorFileMessageWrapper: {
    width: '100%',
  },

  errorFileMessage: {
    padding: 0,
    fontSize: 13,
    lineHeight: 1.85,
    color: theme.palette.error.main,
  },

  fileDescription: {
    lineHeight: 1.71,
  },

  fileName: {
    color: theme.palette.colorBlack.main,
  },

  fileSize: {
    color: theme.palette.colorNeutral6.main,
  },

  itemButtonsWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  successIcon: {
    width: 16,
    height: 16,
    color: theme.palette.success.main,
  },

  warningIcon: {
    width: 16,
    height: 16,
    color: theme.palette.error.main,
  },

  deleteIconButton: {
    width: 32,
    height: 32,
    padding: 0,
    borderRadius: 0,
  },

  helpText: {
    fontSize: 13,
    lineHeight: 1.85,
  },

  buttonsGroupWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
