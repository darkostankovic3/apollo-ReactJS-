/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  useTheme, makeStyles,
  withStyles,
  Badge as BadgeBase,
  Typography as TypographyBase,
  Button as ButtonBase,
  Chip as ChipBase,
  Tooltip as TooltipBase,
  Avatar as AvatarBase,
  Paper as PaperBase,
  AppBar as AppBarBase,
  Link as LinkBase,
  Radio as RadioBase,
} from '@material-ui/core';
import classnames from 'classnames';

// styles
const useStyles = makeStyles(() => ({
  badge: {
    fontWeight: 600,
    height: (props) => (!props.variant ? 16 : 0),
    minWidth: (props) => (!props.variant ? 16 : 0),
  },
}));

function getColor(color, theme, brightness = 'main') {
  if (color && theme.palette[color] && theme.palette[color][brightness]) {
    return theme.palette[color][brightness];
  }
  return null;
}

function getFontWeight(style) {
  switch (style) {
    case 'light':
      return 300;
    case 'lightMedium':
      return 400;
    case 'medium':
      return 500;
    case 'semiBold':
      return 600;
    case 'bold':
      return 700;
    default:
      return 400;
  }
}

function getFontSize(size, variant = '', theme) {
  let multiplier;

  switch (size) {
    case 'sm':
      multiplier = 0.8;
      break;
    case 'md':
      multiplier = 1.5;
      break;
    case 'xl':
      multiplier = 2;
      break;
    case 'xxl':
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  const defaultSize = variant && theme.typography[variant]
    ? theme.typography[variant].fontSize
    : `${theme.typography.fontStyle}px`;

  return `calc(${defaultSize} * ${multiplier})`;
}

function createStyled(styles, options) {
  const Styled = (props) => {
    const { children, ...other } = props;
    return children(other);
  };

  return withStyles(styles, options)(Styled);
}

function Badge({
  children, colorBrightness, color, ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();

  const Styled = createStyled({
    badge: {
      backgroundColor:
        // eslint-disable-next-line no-nested-ternary
        color === 'secondary'
          ? getColor(color, theme)
          : color === 'inherit'
            ? theme.palette.colorDataViz4.main
            : getColor(color, theme, colorBrightness),
      color: color === 'secondary' ? theme.palette.secondaryTextColor : 'white',
      border: color === 'secondary' ? theme.palette.secondaryBorder : 'none',
    },
  });

  return (
    <Styled>
      {(styledProps) => (
        <BadgeBase
          classes={{
            badge: classnames(classes.badge, styledProps.classes.badge),
          }}
          {...props}
        >
          {children}
        </BadgeBase>
      )}
    </Styled>
  );
}

function Chip({ colorBrightness, color, ...props }) {
  return (
    <ChipBase
      {...props}
    />
  );
}

function ChipInput({
  colorBrightness, color, shadow, ...props
}) {
  const chipStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      margin: '4px',
      cursor: 'pointer',
      boxShadow: shadow ? '0 4px 8px 0 rgba(7, 104, 253, 0.32), 0 4px 16px 0 rgba(0, 0, 0, 0.04)' : 'none',
    },
    label: {
      lineHeight: 24,
      paddingTop: '4px',
      paddingBottom: '4px',
    },
    deleteIcon: {
      width: 20,
      height: 20,
      color: 'white',
      '&:hover': {
        color: 'white',
      },
    },
    icon: {
      width: 20,
      height: 20,
      color: 'white',
    },
    avatar: {
      width: 32,
      height: 32,
      marginLeft: 0,
      color: 'white',
    },
  }));

  const classes = chipStyles();

  return (
    <ChipBase
      classes={classes}
      {...props}
    />
  );
}

function Typography({
  children,
  weight,
  size,
  colorBrightness,
  color,
  block,
  uppercase,
  style,
  variant,
  ...props
}) {
  const theme = useTheme();

  return (
    <TypographyBase
      style={{
        color:
          color === 'secondary'
            ? theme.palette.secondaryTextColor
            : getColor(color, theme),
        borderColor:
          color === 'secondary'
            ? theme.palette.secondaryTextColor
            : getColor(color, theme),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, variant, theme),
        textTransform: uppercase ? 'uppercase' : 'none',
        ...style,
      }}
      component={block ? 'div' : 'p'}
      {...props}
    >
      {children}
    </TypographyBase>
  );
}

function Button({
  children, color, disabled, size, fullWidth, className, select, ...props
}) {
  // console.log('button children ', children)
  const useButtonStyles = makeStyles((theme) => {
    let boxShadow;
    if (color === 'primary' && props.variant === 'contained') {
      boxShadow = theme.customShadows.primaryButton;
    } else if (color === 'secondary' && props.variant === 'contained') {
      boxShadow = theme.customShadows.secondaryButton;
    } else {
      boxShadow = 'none';
    }
    let textColor;
    if (color === 'secondary' && !disabled) {
      textColor = theme.palette.primary.main;
    } else if (color === 'secondary' && disabled) {
      textColor = theme.palette.secondaryDisabledTextColor;
    } else {
      textColor = theme.palette.colorNeutral8;
    }
    let hoverBackgroundColor;
    if (color === 'primary') {
      hoverBackgroundColor = theme.palette.primaryHover;
    } else if (color === 'secondary' && !disabled) {
      hoverBackgroundColor = theme.palette.secondaryHoverColor;
    } else if (color === 'secondary' && disabled) {
      hoverBackgroundColor = theme.palette.colorWhite.main;
    } else if (color === 'tertiary' && disabled) {
      hoverBackgroundColor = theme.palette.disabledButtonHover;
    }

    return (
      {
        root: {
          width: fullWidth === true ? '100%' : 'inherit',
          color: textColor,
          '&:hover': {
            backgroundColor: !disabled && !props.variant && theme.palette.secondaryHoverColor,
            cursor: disabled && 'default',
          },
        },
        contained: {
          backgroundColor:
            color === 'primary' && disabled === true
              ? theme.palette.primaryDisabledBackground
              : `${getColor(color, theme)} !important`,
          boxShadow,
          border:
            color === 'secondary'
              ? theme.palette.secondaryBorder
              : getColor(color, theme),
          color:
            theme.palette.type === 'dark' && !color
              ? theme.palette.colorBlack.main
              : `${
                // eslint-disable-next-line no-nested-ternary
                color === 'secondary' && disabled !== true
                  ? theme.palette.secondaryTextColor
                  // eslint-disable-next-line no-nested-ternary
                  : color === 'secondary' && disabled === true
                    ? theme.palette.secondaryDisabledTextColor
                    : color === 'tertiary'
                      ? theme.palette.colorNeutral8.main
                      : 'white'
              } !important`,
          '&:hover': {
            backgroundColor: hoverBackgroundColor,
            boxShadow: color === 'primary' ? theme.customShadows.primaryButton : 'none',
            border:
              // eslint-disable-next-line no-nested-ternary
              color === 'secondary' && disabled !== true
                ? theme.palette.secondaryHoverBorder
                : color === 'secondary' && disabled === true
                  ? theme.palette.secondaryHoverDisabledBorder
                  : 'none',
          },
          '&:active': {
            boxShadow: theme.customShadows.widgetWide,
          },
        },
        label: {
          fontSize: size === 'small' ? '14px' : '16px',
          '& > span': {
            marginRight: `${theme.spacing(1)}px !important`,
          },
        },
        disabled: {
          // color:
        },
      }
    );
  });
  const classes = useButtonStyles();

  return (
    <ButtonBase
      classes={{
        contained: classes.contained,
        root: classes.root,
        label: classes.label,
      }}
      {...props}
      className={classnames(
        {
          [classes.select]: select,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
}

function Avatar({
  children, color, colorBrightness, ...props
}) {
  const theme = useTheme();

  const Styled = createStyled({
    colorDefault: {
      backgroundColor:
        color === 'secondary'
          ? getColor(color, theme)
          : getColor(color, theme, colorBrightness),
      border: color === 'secondary' ? theme.palette.secondaryBorder : 'none',
      color: color === 'secondary' ? theme.palette.secondaryTextColor : 'white',
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <AvatarBase classes={{ colorDefault: classes.colorDefault }} {...props}>
          {children}
        </AvatarBase>
      )}
    </Styled>
  );
}

function Tooltip({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    tooltip: {
      backgroundColor: getColor(color, theme),
      color:
        color === 'secondary' ? theme.palette.secondaryTextColor : theme.palette.colorWhite.main,
      border: color === 'secondary' ? theme.palette.secondaryBorder : 'none',
      fontSize: '14px',
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <TooltipBase classes={{ tooltip: classes.tooltip }} {...props} arrow>
          {children}
        </TooltipBase>
      )}
    </Styled>
  );
}

function Paper({ children, color, ...props }) {
  const theme = useTheme();

  const Styled = createStyled({
    root: {
      backgroundColor: getColor(color, theme),
      color: color === 'secondary' ? theme.palette.secondaryTextColor : 'white',
      border: color === 'secondary' ? theme.palette.secondaryBorder : 'none',
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <PaperBase classes={{ root: classes.root }} {...props}>
          {children}
        </PaperBase>
      )}
    </Styled>
  );
}

function AppBar({ children, color, ...props }) {
  const useAppBarStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.gradient.main,
    },
  }));

  const classes = useAppBarStyles();

  return (
    <AppBarBase classes={{ root: classes.root }} {...props}>
      {children}
    </AppBarBase>
  );
}

function Link({ children, color, ...props }) {
  const useLinkStyles = makeStyles((theme) => ({
    root: {
      color: color
        ? `${getColor(color, theme)} !important`
        : theme.palette.text.primary,
    },
  }));

  const classes = useLinkStyles();

  return (
    <LinkBase classes={{ root: classes.root }} {...props}>
      {children}
    </LinkBase>
  );
}

function Radio({ children, color, ...props }) {
  const Styled = createStyled({
    root: {
      color: 'red',
      '&$checked': {
        color: 'red',
      },
    },
    checked: {},
    // '&.Mui-checked': {
    // color: theme.palette[color].main
    // },
    // '&:hover': {
    //   backgroundColor: `${theme.palette[color].main} !important`,
    //   opacity: .1
    // }
  });

  return (
    <Styled>
      {({ classes }) => (
        <RadioBase
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
          {...props}
        />
      )}
    </Styled>
  );
}

export {
  Badge,
  Typography,
  Button,
  Chip,
  ChipInput,
  Tooltip,
  Avatar,
  Paper,
  AppBar,
  Link,
  Radio,
};
