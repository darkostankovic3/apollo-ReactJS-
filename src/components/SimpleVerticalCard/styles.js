import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(4),
    borderRadius: 4,
    border: '1px solid transparent',
    backgroundColor: theme.palette.colorNeutral1.main,
    transition: theme.transitions.create(['border']),

    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.colorVeryLightBlue.main,
      boxShadow: theme.customShadows.card,
      cursor: 'pointer',
    },
  },
  cardContainerActive: {
    backgroundColor: theme.palette.colorPattensBlue.main,
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  contentWrapper: {
    '& > p': {
      lineHeight: 1.85,
    },
  },
  stateWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& p': {
      lineHeight: 1.85,
    },
  },
  starButton: {
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  starIcon: {
    width: 18,
    height: 18,
    color: theme.palette.primary.main,
    transition: theme.transitions.create(['color']),

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  starBorderIcon: {
    width: 18,
    height: 18,
    color: theme.palette.colorNeutral6.main,
    transition: theme.transitions.create(['color']),

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
