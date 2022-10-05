import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  accordionRoot: {
    boxShadow: 'none',
    backgroundColor: theme.palette.colorNeutral2.main,
    overflow: 'auto',
  },
  panelExpanded: {
    marginBottom: '0 !important',
    marginTop: '0 !important',
    borderBottom: `1px solid ${theme.palette.colorNeutral3.main}`,
    backgroundColor: theme.palette.common.white,
  },
  panelSummary: {
    flexDirection: 'row-reverse',
    minHeight: '48px !important',
    '&:hover': {
      backgroundColor: theme.palette.secondaryHoverColor,
    },
  },
  summaryContent: {
    position: 'relative',
    right: '20px',
    margin: '12px 0 !important',
  },
  iconButton: {
    position: 'relative',
    right: '20px',
    transform: 'rotate(270deg)',
    marginLeft: `${theme.spacing(1)}px`,
  },
  expandedIconButton: {
    '&:first-child > p': {
      fontWeight: '600 !important',
    },
    '&:last-child': {
      transform: 'rotate(360deg)',
    },
  },
  pannelDetails: {
    paddingLeft: '24px',
  },
}));
