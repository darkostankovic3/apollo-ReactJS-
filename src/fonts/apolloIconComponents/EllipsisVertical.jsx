/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgEllipsisVertical(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="evenodd">
        <path d="M15 21a3 3 0 11-6 0 3 3 0 016 0M15 12a3 3 0 11-6 0 3 3 0 016 0M15 3a3 3 0 11-6 0 3 3 0 016 0" />
      </g>
    </svg>
  );
}

export default SvgEllipsisVertical;
