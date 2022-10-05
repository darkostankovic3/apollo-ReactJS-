import React from 'react';
import { Typography } from '../../Wrappers/Wrappers';

const DueDate = ({ dueDate }) => (
  <Typography style={{ color: '#595959', fontSize: '13px' }}>
    {dueDate}
  </Typography>
);

export default DueDate;
