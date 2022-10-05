import { makeStyles } from '@material-ui/core';

const boldFontWeight = '600';

export default makeStyles((theme) => ({
  navPadding: {
    paddingTop: `${theme.spacing(1)}px !important`,
    paddingBottom: '6px !important',
  },
  margin: {
    marginBottom: 24,
  },
  pageHeaderContainer: {
    marginTop: `${theme.spacing(10)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
  textTitleStyles: {
    fontSize: '24px',
    color: theme.palette.colorBlack.main,
    lineHeight: '36px',
    fontWeight: boldFontWeight,
  },
  textSubtitleStyles: {
    fontSize: '16px',
    color: theme.palette.colorNeutral8.main,
  },
  previousCrumbStyles: {
    color: theme.palette.colorNeutral6.main,
  },
  currentCrumbStyles: {
    fontWeight: boldFontWeight,
    color: theme.palette.colorBlack.main,
  },
}));
