import { createMuiTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import apolloReactTheme from './apolloReactTheme';
import '../fonts/src_fonts_font.css';

const theme = createMuiTheme({ ...apolloReactTheme });

const overrides = {
  typography: {
    fontWeightBold: 600,
    fontFamily: [
      'Proxima-Nova',
      'Proxima Nova',
      'ProximaNova',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.51rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.28rem',
    },
    h4: {
      fontSize: '1.128rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '.875rem',
    },
    t1: {
      fontSize: '20px',
      fontWeight: '600',
    },
    t2: {
      fontSize: '18px',
      fontWeight: '100',
    },
    type_caption: {
      fontSize: '.82rem',
    },
  },
  icon: {
    xsmall: {
      fontSize: '16px',
    },
    small: {
      fontSize: '19px',
    },
    medium: {
      fontSize: '22px',
    },
  },
  overrides: {
    MuiAccordion: {
      root: {
        '&$expanded': {
          overflow: 'hidden',
        },
      },
    },
    MuiAutocomplete: {
      endAdornment: {
        top: 'calc(50% - 17px)',
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: theme.palette.colorVeryLightBlue.main,
          color: theme.palette.colorBlack.main,
        },
      },
    },
    MuiButton: {
      root: {
        '& *': {
          textTransform: 'Capitalize',
        },
        ' *': {
          textTransform: 'Capitalize',
        },
      },
    },
    MuiCard: {
      root: {
        boxShadow:
          theme.customShadows.paper,
      },
    },
    MuiDialogTitle: {
      root: {
        borderTop: '8px',
        borderTopStyle: 'solid',
        borderLeft: '0 none',
        borderRight: '0 none',
        borderBottom: '0',
        borderImage: theme.palette.gradient.main,
        borderImageSlice: 1,
        padding: '24px',
        paddingBottom: '12px',
        '& .MuiTypography-root': {
          fontWeight: '700',
          fontSize: '20px',
        },
      },
    },
    MuiDialogContent: {
      root: {
        padding: '0 24px 0px 24px',
      },
    },
    MuiDialogActions: {
      root: {
        padding: '28px 18px 18px 18px',
      },
    },
    MUIDataTable: {
      paper: {
        boxShadow:
          theme.customShadows.paper,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.56)',
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          theme.customShadows.paper,
      },
    },
    MuiSelect: {
      outlined: {
        padding: '6px 30px 4px 8px',
        lineHeight: '1.5',
        fontSize: '14px',
        color: theme.palette.colorBlack.main,
      },
      icon: {
        color: theme.palette.text.hint,
      },
      root: {
        backgroundColor: theme.palette.colorWhite.main,
        '&$disabled': {
          backgroundColor: theme.palette.colorNeutral2.main,
        },
      },
    },
    MuiStepLabel: {
      label: {
        marginTop: '8px !important',
        fontSize: '16px',
        fontWeight: '500',
        '&$active': {
          marginTop: '9px !important',
          color: 'black',
          fontWeight: '600',
        },
        '&$completed': {
          color: 'black',
        },
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: `${theme.palette.background.light} !important`,
          '&:focus': {
            backgroundColor: theme.palette.background.light,
          },
        },
      },
      button: {
        '&:hover, &:focus': {
          backgroundColor: theme.palette.background.light,
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: 'white',
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableHead: {
      root: {
        height: 0,
        lineHeight: 0,
        backgroundColor: theme.palette.colorNeutral1.main,
        '& .MuiTableRow-root': {
          height: 0,
          lineHeight: 0,
        },
        '& .MuiTableCell-root': {
          height: 0,
        },
        '& th.MuiTableCell-head:last-of-type': {
          paddingRight: '1.2rem',
        },
        '& th.MuiTableCell-body:first-of-type': {
          paddingLeft: '1.2rem',
        },
      },
    },
    MuiTableCell: {
      root: {
        wordBreak: 'break-word',
        borderBottom: '1px solid rgba(224, 224, 224, .5)',
        borderBottomColor: theme.palette.colorNeutral1.main,
        paddingTop: '10px',
        paddingBottom: '10px',
        fontSize: '0.8rem',
        paddingLeft: '8px !important',
        paddingRight: '8px !important',
        '&:first-child': {
          paddingLeft: '16px !important',
        },
        '&:last-child': {
          paddingRight: '16px !important',
        },
      },
      head: {
        fontSize: '0.95rem',
        lineHeight: '.9rem',
      },
      body: {
        fontSize: '0.85rem',
        overflow: 'inherit',
      },
      paddingCheckbox: {
        padding: '0 0 0 15px',
      },
    },
    MuiTab: {
      root: {
        color: theme.palette.colorNeutral7.main,
        fontSize: '16px',
        marginRight: '16px',
        minWidth: '72px',
        textTransform: 'none',
        marginTop: 0,
        '&:hover': {
          color: theme.palette.colorBlack.main,
          opacity: 1,
        },
        '&$selected': {
          color: theme.palette.colorBlack.main,
          marginTop: '1px',
        },
        '&:focus': {
          color: theme.palette.colorBlack.main,
        },
        '&$disabled': {
          color: theme.palette.colorNeutral7.main,
        },
      },
      textColorPrimary: {
        '&$selected': {
          color: theme.palette.colorBlack.main,
        },
      },
    },
    MuiTabs: {
      root: {
        position: 'relative',
        '&::before': {
          borderBottom: `1px solid ${theme.palette.colorNeutral4.main}`,
          bottom: '2px',
          content: '""',
          left: 0,
          position: 'absolute',
          width: '100%',
        },
      },
      indicator: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: `${theme.spacing(1)}px`,
        boxShadow: theme.tabs.indicator.shadow,
        height: '5px',
      },
    },
    MuiTabScrollButton: {
      root: {
        height: '40px',
        borderRadius: '50%',
        backgroundColor: fade(theme.tabs.overflowBackground, 0.1),
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: fade(theme.tabs.overflowHover, 0.1),
        },
        '& svg': {
          color: theme.tabs.overflowArrow,
        },
      },
    },
    MuiBreadcrumbs: {
      root: {
        color: theme.palette.colorNeutral6.main,

        '& .MuiBreadcrumbs-li': {
          '&:first-of-type': {
            '& a': {
              width: '32px',
              height: '32px',
              padding: 0,
              borderRadius: '50%',

              '& svg': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '21px',
              },
            },
          },
          '&:last-of-type': {
            '& p': {
              padding: '9px 7px',
            },
          },
          '& p': {
            lineHeight: 1,
          },
          '& a': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '9px 8px',
            color: theme.palette.colorNeutral6.main,
            textDecoration: 'none',
            borderRadius: '4px',

            '&:hover': {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondaryHoverColor,

              '& svg': {
                fill: theme.palette.primary.main,
                transition: 'none',
              },
            },
          },
        },

        '& .MuiBreadcrumbs-separator': {
          margin: 0,

          '& .MuiSvgIcon-root': {
            fontSize: '16px',
          },
        },
      },
    },
    MuiLinearProgress: {
      root: {
        height: '12px',
        borderRadius: '6px',
      },
      bar: {
        borderRadius: '6px',
      },
      colorPrimary: {
        backgroundColor: theme.palette.colorNeutral3.main,
      },
    },
  },
};

export const Theme = createMuiTheme({ ...apolloReactTheme, ...overrides });

export const { breakpoints: { values: screenSizes } } = Theme;
