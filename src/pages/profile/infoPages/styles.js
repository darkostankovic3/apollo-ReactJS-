import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  content: {
    maxWidth: '800px',
  },
  textArea: {
    paddingTop: theme.spacing(6),
  },
  personalInfo: {
    marginBottom: theme.spacing(6),
  },
  userInfo: {
    height: '100%',
    marginBottom: theme.spacing(4),
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: theme.typography.fontWeightBold,
  },
  avatar: {
    width: '212px',
    height: '212px',
    fontSize: '80px',
    backgroundColor: theme.palette.colorNeutral3.main,
    color: theme.palette.colorBlack.main,
  },
  avatarWrapper: {
    marginBottom: theme.spacing(12),
    marginTop: theme.spacing(8),
  },
  checkbox: {
    width: '24px',
  },
  tags: {
    marginLeft: theme.spacing(0.5),
  },
  select: {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
  },
  selected: {
    color: theme.palette.colorBlack.main,
  },
  selectFormControl: {
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
  },
}));
