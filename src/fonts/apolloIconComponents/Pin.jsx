/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgPin(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0a8.009 8.009 0 00-8 8c0 3.51 5 12.025 7.148 15.524a1 1 0 001.704-.001C15 20.026 20 11.514 20 8a8.009 8.009 0 00-8-8zm0 11.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgPin;
