import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Typography } from '../Wrappers/Wrappers';

// styles
import useStyles from './styles';

const Blade = (props) => {
  const {
    anchor,
    open,
    onCloseCallback,
    primaryButtonCallback,
    title,
    subTitle,
    hasFooter,
    tertiaryButtonText,
    primaryButtonText,
    children,
  } = props;
  const classes = useStyles();

  const handleOnClose = () => {
    onCloseCallback(anchor);
  };

  const handlePrimaryButton = () => {
    primaryButtonCallback();
  };

  return (
    <Drawer
      title={title}
      classes={{ paper: classes.paper }}
      anchor={anchor}
      open={open}
      onClose={handleOnClose}
    >
      {title && (
        <header className={classes.header}>
          <div>
            <Typography variant="h3" weight="semiBold" color="colorBlack">{title}</Typography>
            {subTitle && (
              <Typography variant="h6" weight="lightMedium" color="colorNeutral8">
                {subTitle}
              </Typography>
            )}
          </div>
          <IconButton
            classes={{ root: classes.closeButton }}
            aria-label="close"
            onClick={handleOnClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </header>
      )}
      {children && (
        <div className={classes.main}>
          {children}
        </div>
      )}
      {hasFooter && (
        <footer className={classes.footer}>
          <Button
            className={classes.tertiaryButton}
            color="tertiary"
            variant="contained"
            onClick={handleOnClose}
          >
            {tertiaryButtonText}
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handlePrimaryButton}
          >
            {primaryButtonText}
          </Button>
        </footer>
      )}
    </Drawer>
  );
};

Blade.defaultProps = {
  title: '',
  subTitle: '',
  hasFooter: false,
  tertiaryButtonText: 'Cancel',
  primaryButtonText: 'Save',
  primaryButtonCallback: () => { },
};

Blade.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right']).isRequired,
  open: PropTypes.bool.isRequired,
  onCloseCallback: PropTypes.func.isRequired,
  primaryButtonCallback: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  hasFooter: PropTypes.bool,
  tertiaryButtonText: PropTypes.string,
  primaryButtonText: PropTypes.string,
};

export default Blade;
