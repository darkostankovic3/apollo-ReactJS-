import React from 'react';
import { Typography } from '../../Wrappers/Wrappers';

const Time = ({ time }) => (
  <Typography style={{ color: '#999999', fontSize: '13px' }}>
    {time}
  </Typography>
);

export default Time;
