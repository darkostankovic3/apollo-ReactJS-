import React from 'react';
import PropTypes from 'prop-types';
import TreeItem from '@material-ui/lab/TreeItem';
import Box from '@material-ui/core/Box';

// styles
import useStyles from './treeItemStyles';

const CustomTreeItem = (props) => {
  const classes = useStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    disabled,
    ...other
  } = props;

  return (
    <TreeItem
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
        iconContainer: classes.iconContainer,
      }}
      className={`${disabled && classes.rootDisabled}`}
      label={(
        <Box className={classes.labelWrapper}>
          <Box className={classes.labelLeftSide}>
            {LabelIcon && (
              <span className={classes.labelIconWrapper}>
                <LabelIcon className={classes.labelIcon} />
              </span>
            )}
            {labelText && (
              <span className={classes.labelText}>
                {labelText}
              </span>
            )}
          </Box>
          {labelInfo && (
            <Box className={classes.labelRightSide}>
              <span className={classes.labelInfo}>
                {labelInfo > 99 ? '99+' : labelInfo}
              </span>
            </Box>
          )}
        </Box>
      )}
      onLabelClick={(event) => {
        if (disabled) {
          event.preventDefault();
        }
      }}
      onIconClick={(event) => {
        if (disabled) {
          event.preventDefault();
        }
      }}
      {...other}
    />
  );
};

CustomTreeItem.defaultProps = {
  labelIcon: null,
  labelInfo: null,
  disabled: false,
};

CustomTreeItem.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelIcon: PropTypes.elementType,
  labelInfo: PropTypes.number,
  disabled: PropTypes.bool,
};

export default CustomTreeItem;
