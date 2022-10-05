/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgHome(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M24 9.5a1 1 0 00-.389-.791l-11-8.5a1 1 0 00-1.224 0l-11 8.5A1 1 0 000 9.5V23a1 1 0 001 1h8a.5.5 0 00.5-.5V19a2.5 2.5 0 115 0v4.5a.5.5 0 00.5.5h8a1 1 0 001-1V9.5z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgHome;
