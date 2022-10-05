import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paper: {
    width: '90%',
    backgroundColor: theme.palette.colorNeutral1.main,
    boxShadow: theme.customShadows.blade,
    overflow: 'visible',

    [theme.breakpoints.up('sm')]: {
      width: '426px',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(6),
    borderBottom: `1px solid ${theme.palette.colorNeutral3.main}`,
    overflow: 'hidden',
  },
  main: {
    display: 'block',
    height: '100%',
    padding: theme.spacing(6),
    paddingRight: theme.spacing(14),
    overflow: 'auto',

    '& > p': {
      marginBottom: theme.spacing(5),

      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'sticky',
    bottom: 0,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    backgroundColor: theme.palette.colorWhite.main,
    borderTop: `1px solid ${theme.palette.colorNeutral3.main}`,
    overflow: 'hidden',
  },
  closeButton: {
    width: '32px',
    height: '32px',
    padding: 0,

    '&:hover': {
      backgroundColor: theme.palette.formHighLightColor.main,
    },
  },
  tertiaryButton: {
    marginRight: theme.spacing(3),

    '& > span': {
      color: theme.palette.colorNeutral8.main,
    },
  },
}
));
