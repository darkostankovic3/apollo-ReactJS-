import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  rootDisabled: {
    '& > .MuiTreeItem-content': {
      opacity: 0.4,

      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },
  content: {
    height: 32,

    '&:hover': {
      backgroundColor: theme.palette.colorVeryLightBlue.main,
    },
  },
  label: {
    overflow: 'hidden',

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelLeftSide: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  labelRightSide: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  labelIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  labelIcon: {
    fontSize: 14,
    lineHeight: 1.71,
  },
  labelText: {
    color: theme.palette.colorNeutral8.main,
    fontSize: 14,
    lineHeight: 1.71,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  selected: {
    '& > .MuiTreeItem-content': {
      backgroundColor: theme.palette.colorVeryLightBlue.main,

      '& $labelText, $iconContainer, $labelIconWrapper, $labelInfo': {
        color: theme.palette.colorBlack.main,
        fontWeight: 600,
      },
    },

    '& .MuiTreeItem-label': {
      backgroundColor: 'transparent !important',
    },
  },
  iconContainer: {
    marginRight: 0,
  },
  labelInfo: {
    fontSize: 14,
    lineHeight: 1.71,
  },
}));
