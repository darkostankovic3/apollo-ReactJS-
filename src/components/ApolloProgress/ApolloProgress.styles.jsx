import { makeStyles } from '@material-ui/core';

export const ANIMATION_DURATION_S = 2;

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  loaderDot: {
    height: theme.spacing(1),
    width: theme.spacing(1),
    margin: `0 ${theme.spacing(2)}px`,
    borderRadius: '50%',
    display: 'inline-block',
    animationFillMode: 'forward',
  },
  loadingForwardAnimation: {
    animation: `$loading ${ANIMATION_DURATION_S}s`,
  },
  loadingBackwardAnimation: {
    animation: `$loading ${ANIMATION_DURATION_S}s`,
  },
  dot1: {
    backgroundColor: theme.palette.primary.main,
  },
  dot2: {
    backgroundColor: theme.palette.colorDataViz1.main,
  },
  dot3: {
    backgroundColor: theme.palette.colorDataViz4.main,
  },
  dot4: {
    backgroundColor: theme.palette.colorDataViz3.main,
  },
  '@keyframes loading': {
    '0%, 100%': {
      transform: 'scale(1.0)',
    },
    '50%': {
      transform: 'scale(3.0)',
    },
  },
}));
