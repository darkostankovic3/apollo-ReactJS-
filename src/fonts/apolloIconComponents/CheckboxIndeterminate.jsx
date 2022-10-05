/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgCheckboxIndeterminate(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M2 0h20a2 2 0 012 2v20a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm17 12a1 1 0 00-1-1H6a1 1 0 000 2h12a1 1 0 001-1z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCheckboxIndeterminate;
