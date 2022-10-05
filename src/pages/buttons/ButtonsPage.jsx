/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Grid,
  Box,
} from '@material-ui/core';
import {
  Bookmark as BookmarkIcon,
  Star,
  StarBorder,
} from '@material-ui/icons';

import useStyles from './styles';
import Button from './Button';
import IconButton from './IconButton';

// components
import Widget from '../../components/Widget/Widget';
import { Typography } from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';

export default function ButtonsPage() {
  const classes = useStyles();

  // TODO: Add map to cycle through buttons, also make classes dynamic
  // const standardClass = `${classes.root} ${classes.standardWidth}`;

  const buttonTypes = {
    primary: [
      {
        label: 'Small',
        type: 'primary',
        size: 'small',
      },
      {
        label: 'Standard',
        type: 'primary',
      },
      {
        label: 'Small Disabled',
        type: 'primary',
        size: 'small',
        disabled: true,
      },
      {
        label: 'Small',
        type: 'primary',
        disabled: true,
      },
    ],
    secondary: [
      {
        label: 'Small',
        type: 'secondary',
        size: 'small',
      },
      {
        label: 'Standard',
        type: 'secondary',
      },
      {
        label: 'Small Disabled',
        type: 'secondary',
        size: 'small',
        disabled: true,
      },
      {
        label: 'Small',
        type: 'secondary',
        disabled: true,
      },
    ],
    tertiary: [
      {
        label: 'Small',
        type: 'tertiary',
        size: 'small',
      },
      {
        label: 'Standard',
        type: 'tertiary',
      },
      {
        label: 'Small Disabled',
        type: 'tertiary',
        size: 'small',
        disabled: true,
      },
      {
        label: 'Small',
        type: 'tertiary',
        disabled: true,
      },
    ],
    text: [
      {
        label: 'Small',
        type: 'text',
        size: 'small',
      },
      {
        label: 'Standard',
        type: 'text',
      },
      {
        label: 'Small Disabled',
        type: 'text',
        size: 'small',
        disabled: true,
      },
      {
        label: 'Small',
        type: 'text',
        disabled: true,
      },
    ],
    fullWidth: [
      {
        label: 'Small',
        type: 'primary',
        size: 'small',
        fullWidth: true,
      },
      {
        label: 'Standard',
        type: 'primary',
        fullWidth: true,
      },
    ],
    iconToggle: [
      {
        type: 'iconToggle',
        togglevalue: true,
        on: Star,
        off: StarBorder,
      },
      {
        type: 'iconToggle',
        togglevalue: false,
        on: Star,
        off: StarBorder,
      },
      {
        type: 'iconToggle',
        togglevalue: true,
        on: Star,
        off: StarBorder,
        disabled: true,
      },
      {
        type: 'iconToggle',
        togglevalue: false,
        on: Star,
        off: StarBorder,
        disabled: true,
      },
    ],
    iconReg: [
      {
        type: 'icon',
        icon: Star,
      },
      {
        type: 'icon',
        icon: BookmarkIcon,
      },
      {
        type: 'icon',
        icon: Star,
        disabled: true,
      },
      {
        type: 'icon',
        icon: BookmarkIcon,
        disabled: true,
      },
    ],
    iconLight: [
      {
        type: 'iconLight',
        icon: Star,
      },
      {
        type: 'iconLight',
        icon: BookmarkIcon,
      },
      {
        type: 'iconLight',
        icon: Star,
        disabled: true,
      },
      {
        type: 'iconLight',
        icon: BookmarkIcon,
        disabled: true,
      },
    ],
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid item display="flex" flexdirection="column" md={6}>
          <Grid item className={classes.bottomSpacing}>
            <Widget title="Standard Buttons" disableWidgetMenu>
              <Typography>Primary</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.primary.map((button, idx) => (
                  <Button
                    key={`${button.label}${idx}`}
                    {...button}
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
              <Typography>Secondary</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.secondary.map((button, idx) => (
                  <Button
                    key={`${button.label}${idx}`}
                    {...button}
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
              <Typography>Tertiary</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.tertiary.map((button, idx) => (
                  <Button
                    key={`${button.label}${idx}`}
                    {...button}
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
              <Typography>Text</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.text.map((button, idx) => (
                  <Button
                    key={`${button.label}${idx}`}
                    {...button}
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
              <Typography>Full Width</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.fullWidth.map((button, idx) => (
                  <Button
                    key={`${button.label}${idx}`}
                    {...button}
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
            </Widget>
          </Grid>
          <Grid item>
            <Widget title="Icon Buttons" disableWidgetMenu>
              <Typography>Toggle</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.iconToggle.map((button, idx) => (
                  <IconButton
                    key={`icon${idx}`}
                    {...button}
                  >
                    {button.label}
                  </IconButton>
                ))}
              </Box>
              <Typography>Basic Icon</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
                {buttonTypes.iconReg.map((button, idx) => (
                  <IconButton
                    key={`icon${idx}`}
                    {...button}
                  >
                    {button.label}
                  </IconButton>
                ))}
              </Box>
              <Typography>Dark Background</Typography>
              <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start" className={classes.darkBackground}>
                {buttonTypes.iconLight.map((button, idx) => (
                  <IconButton
                    key={`icon${idx}`}
                    {...button}
                  >
                    {button.label}
                  </IconButton>
                ))}
              </Box>
            </Widget>
          </Grid>
        </Grid>

        <Grid item md={6}>
          <Widget title="Standard Buttons with Icon" disableWidgetMenu>
            <Typography>Primary</Typography>
            <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
              {buttonTypes.primary.map((button, idx) => (
                <Button
                  key={`${button.label}${idx}`}
                  startIcon={<BookmarkIcon />}
                  {...button}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
            <Typography>Secondary</Typography>
            <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
              {buttonTypes.secondary.map((button, idx) => (
                <Button
                  key={`${button.label}${idx}`}
                  startIcon={<BookmarkIcon />}
                  {...button}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
            <Typography>Tertiary</Typography>
            <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
              {buttonTypes.tertiary.map((button, idx) => (
                <Button
                  key={`${button.label}${idx}`}
                  startIcon={<BookmarkIcon />}
                  {...button}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
            <Typography>Text</Typography>
            <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
              {buttonTypes.text.map((button, idx) => (
                <Button
                  key={`${button.label}${idx}`}
                  startIcon={<BookmarkIcon />}
                  {...button}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
            <Typography>Full Width</Typography>
            <Box display="flex" flexWrap="wrap" mb={3} alignItems="flex-start">
              {buttonTypes.fullWidth.map((button, idx) => (
                <Button
                  key={`${button.label}${idx}`}
                  startIcon={<BookmarkIcon />}
                  {...button}
                >
                  {button.label}
                </Button>
              ))}
            </Box>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Button Material UI Component"
            link="https://material-ui.com/components/buttons/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
