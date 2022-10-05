/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgCheckboxUnselected(props) {
  return (
    <svg width={24} height={24} {...props}>
      <rect
        x={0.5}
        y={0.5}
        width={23}
        height={23}
        rx={2}
        fillRule="nonzero"
        stroke={props.color}
        fill="none"
      />
    </svg>
  );
}

export default SvgCheckboxUnselected;
