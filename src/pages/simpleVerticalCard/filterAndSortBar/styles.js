import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  filterInput: {
    display: 'flex',
    alignItems: 'center',
  },

  dateWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  filtersAndSortingWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(4),
  },

  sortingWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  filtersWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  dropdownCardWrapper: {
    position: 'relative',
  },

  dropdownFiltersCardWrapper: {
    width: 80,
  },

  dropdownFiltersCard: {
    [theme.breakpoints.up('sm')]: {
      minWidth: '200px',
    },
    [theme.breakpoints.only('xs')]: {
      width: '100vw',
      left: '-100%',
    },
  },

  dropdownCard: {
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
    },
    display: 'none',
    backgroundColor: theme.palette.colorWhite.main,
    border: `1px solid ${theme.palette.colorNeutral4.main}`,
    borderRadius: 4,
    boxShadow: theme.customShadows.card,
    zIndex: 10,

    '&:focus': {
      outline: 'none',
    },
  },

  dropdownActiveCard: {
    display: 'block',
  },

  dropdownSortCard: {
    padding: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },

  dropdownContent: {
    flexDirection: 'column',
    display: 'flex',
  },

  sortListItem: {
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(8),
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: theme.spacing(6),
  },

  sortListIconWrapper: {
    position: 'relative',
    width: 30,
  },

  sortListIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.colorBlack.main,
    visibility: 'hidden',
  },

  sortListIconActive: {
    visibility: 'visible',
  },

  sortListText: {
    '& span': {
      fontSize: 13,
      color: theme.palette.colorNeutral8.main,
    },
  },

  sortListTextActive: {
    '& span': {
      color: theme.palette.colorBlack.main,
      fontWeight: 600,
    },
  },

  dropdownButton: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    '& > span': {
      display: 'flex',
      alignItems: 'center',
    },
  },

  dropdownButtonActive: {
    backgroundColor: 'rgba(7, 104, 253, 0.08)',
  },

  dropdownButtonText: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  dropdownButtonIconsWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  dropdownButtonSortIcons: {
    width: 40,
    minWidth: 40,
  },

  sortTypeButtonIcon: {
    width: 18,
  },

  sortTypeDescending: {
    transform: 'rotate(90deg)',
  },

  sortTypeAscending: {
    transform: 'rotate(-90deg)',
  },

  dropdownCardFooter: {
    display: 'flex',
    justifyContent: 'center',
  },

  main: {
    display: 'block',
  },
}));
