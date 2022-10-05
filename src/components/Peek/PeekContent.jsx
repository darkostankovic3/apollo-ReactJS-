import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Typography } from '../Wrappers/Wrappers';

// styles
import useStyles from './styles';

const Peek = (props) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <Box>
      {title && (
        <Box className={classes.titleWrapper}>
          <Typography
            variant="h5"
            color="colorBlack"
            weight="semiBold"
          >
            {title}
          </Typography>
        </Box>
      )}
      {children && (
        <Box className={classes.contentWrapper}>
          { children }
        </Box>
      )}
    </Box>
  );
};

Peek.defaultProps = {
  title: '',
};

Peek.propTypes = {
  title: PropTypes.string,
};

export default Peek;
