import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => (
  {
    dashedBorder: {
      border: '1px dashed',
      borderColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      marginTop: theme.spacing(1),
    },
    root: {
      margin: '8px 8px 10px 0',
      padding: '4px 8px',
      textAlign: 'left',
    },
    standardWidth: {
      maxWidth: '140px',
    },
    fullWidth: {
      width: '100%',
    },
    standardSize: {
      fontSize: '16px',
      padding: '8px 16px',
      lineHeight: '1.5',
    },
    buttonContainer: {
      '& .MuiButton-containedSizeSmall': {
        fontSize: '14px',
        lineHeight: '1.71',
      },
      '& .MuiButton-containedPrimary:hover': {
        backgroundColor: theme.palette.colorPrimaryDark.main,
      },
      '& .MuiButton-containedSecondary:hover': {
        borderColor: theme.palette.colorBlue.main,
        backgroundColor: theme.palette.colorVeryLightBlue.main,
        boxShadow: 'none',
      },
    },
    disabled: {
      '& .MuiButtonBase-root': {
        boxShadow: 'none',
        pointerEvents: 'none',
        opacity: '0.4',
      },
    },
    primary: {
      boxShadow: theme.customShadows.primaryButton,
    },
    secondary: {
      boxShadow: theme.customShadows.secondaryButton,
      color: theme.palette.colorBlue.main,
      border: `solid 1px ${theme.palette.colorNeutral4.main}`,
    },
    tertiary: {
      boxShadow: 'none !important',
      color: theme.palette.colorNeutral8.main,
      backgroundColor: theme.palette.colorNeutral2.main,
    },
    text: {
      '& .MuiButton-textPrimary:hover': {
        backgroundColor: theme.palette.colorVeryLightBlue.main,
      },
    },

    // ICON BUTTONS //
    iconButtonContainer: {
      '& .MuiIconButton-root': {
        padding: '8px',
      },
      '& .MuiIconButton-colorPrimary:hover': {
        backgroundColor: `${theme.palette.colorVeryLightBlue.main}`,
      },
      '& .MuiSvgIcon-root': {
        width: '16px',
        height: '16px',
      },
    },
    iconButtonStandard: {
      '& .MuiIconButton-root:hover': {
        backgroundColor: theme.palette.colorlightBlue.main,
        color: theme.palette.colorBlack.main,
      },
    },
    toggleOn: {
      '& .MuiIconButton-root': {
        color: theme.palette.colorBlue.main,
      },
      '& .MuiIconButton-root:hover': {
        color: theme.palette.colorBlue.main,
      },
    },
    toggleOff: {
      '& .MuiIconButton-root': {
        color: theme.palette.colorNeutral7.main,
      },
      '& .MuiIconButton-root:hover': {
        color: theme.palette.colorNeutral7.main,
      },
    },
    iconButtonLight: {
      '& .MuiIconButton-root': {
        color: theme.palette.colorWhite.main,
      },
      '& .MuiIconButton-root:hover': {
        color: theme.palette.colorWhite.main,
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
      },
    },
    darkBackground: {
      backgroundImage: 'linear-gradient(to left, #0076ae, #250056 43%)',
    },

    // Misc Styles to make grid work, etc
    bottomSpacing: {
      paddingBottom: '12px',
    },
  }
));
