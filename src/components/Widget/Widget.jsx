import React, { useState } from 'react';

import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  TextField as Input,
  InputAdornment,
  Box,
} from '@material-ui/core';
import { MoreVert as MoreIcon, Search as SearchIcon } from '@material-ui/icons';
import classnames from 'classnames';

// components
import { Typography } from '../Wrappers/Wrappers';
// eslint-disable-next-line no-param-reassign
import useStyles from './styles';

function getVariantRootClass(classes, variant) {
  switch (variant) {
    case 'header':
      return classes.widgetRootHeader;
    case 'table':
      return classes.widgetRootTable;
    case 'apexchart':
      return classes.widgetApexRootChart;
    case 'chart':
      return classes.widgetRootChart;
    case 'tinychart':
      return classes.widgetRootTinyChart;
    case 'empty':
      return classes.widgetRootEmpty;
    default:
      return classes.widgetRoot;
  }
}

const calcTitleNumber = (ct) => {
  let cx = 0;
  if (ct[0] && ct[0].data) {
    cx = ct[0].data;
  } else {
    return 'No Data';
  }
  if (ct.length === 0) {
    return 'No Data';
  }
  if (cx.reduce((a, b) => a + b, 0) === 0) {
    return '0';
  }
  if (cx[cx.length - 1]) {
    return cx[cx.length - 1];
  }
  return 'Title Error';
};

export default function Widget({
  children,
  emptyWidget,
  blueWidget,
  bottomAlign,
  title,
  subtitle,
  calcTitle,
  subtitleClass,
  variant,
  noContainerPadding,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  searchField,
  className,
  style,
  ...props
}) {
  const classes = useStyles(props);

  // local
  const [moreButtonRef, setMoreButtonRef] = useState(null);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const containerClass = { root: getVariantRootClass(classes, variant) };

  const headerClass = (function calcHeader() {
    switch (variant) {
      case 'table':
      case 'apexchart':
        return classes.widgetHeaderTable;
      case 'empty':
        return classes.widgetHeaderEmpty;
      default:
        return classes.widgetHeader;
    }
  }());

  const titleCreated = (calcTitle) ? calcTitleNumber(calcTitle) : title;

  return (
    <div
      className={classnames(classes.widgetWrapper, className)}
      style={style}
    >
      <Paper
        className={classnames(
          {
            [classes.noPadding]: noContainerPadding,
          },
          classes.paper,
          // eslint-disable-next-line react/destructuring-assignment
          { [props.className]: props.className },
        )}
        classes={containerClass}
      >
        {!titleCreated ? (
          <>
            {header ? (
              <div
                className={headerClass}
              >
                {header}
              </div>
            ) : null}
          </>
        ) : (
          <div className={headerClass}>
            <Box
              display="flex"
              alignItems="end"
              justifyContent="space-between"
              width="100%"
            >
              <Box style={{ width: 'calc(100% - 20px)' }}>
                <Typography
                  variant="h5"
                  color="colorBlack"
                  colorBrightness="secondary"
                  noWrap
                  weight="medium"
                >
                  {' '}
                  {titleCreated}
                </Typography>
                <Typography
                  color="primary"
                  colorBrightness="hint"
                  variant="h6"
                  className={subtitleClass}
                >
                  {subtitle}
                </Typography>
              </Box>
              {searchField && (
                <Input
                  id="search-field"
                  className={classes.textField}
                  label="Search"
                  margin="dense"
                  variant="outlined"
                  t
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className={classes.searchIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              {!disableWidgetMenu && (
                <IconButton
                  color="primary"
                  className={classes.moreButton}
                  aria-owns="widget-menu"
                  aria-haspopup="true"
                  onClick={() => setMoreMenuOpen(true)}
                  buttonRef={setMoreButtonRef}
                >
                  <MoreIcon />
                </IconButton>
              )}
            </Box>
          </div>
        )}
        <Box
          className={classnames(classes.widgetBody, {
            [classes.widgetBodyAlignBottom]: bottomAlign,
            [classes.noPadding]: noBodyPadding,
            [classes.paddingTop]: !title && !noBodyPadding,
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </Box>
      </Paper>
      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        <MenuItem>
          <Typography>Edit</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Copy</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Delete</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Print</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
