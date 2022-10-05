/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgClock(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.992 5.376 18.624.008 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10z" />
        <path d="M17.134 15.81L12.5 11.561V6.5a1 1 0 00-2 0V12a1 1 0 00.324.738l4.959 4.545a1.01 1.01 0 001.413-.061 1 1 0 00-.062-1.412z" />
      </g>
    </svg>
  );
}

export default SvgClock;
