import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

// styles
import useStyles from './styles';

const Peek = (props) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <Tooltip
      classes={
        {
          tooltip: classes.tooltip,
          arrow: classes.arrow,
        }
      }
      title={title}
      arrow
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default Peek;
