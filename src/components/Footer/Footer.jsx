import React from 'react';
import { Box, useTheme, useMediaQuery } from '@material-ui/core';

const Footer = ({ children, ...props }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const { neutralPosition } = props;
  return (
    <Box
      width={!isLargeScreen ? '100%' : 'calc(100vw - 392px)'}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="absolute"
      bottom="0"
      right={!isLargeScreen || neutralPosition ? '0' : '38px'}
    >
      {children}
    </Box>
  );
};

export default Footer;
