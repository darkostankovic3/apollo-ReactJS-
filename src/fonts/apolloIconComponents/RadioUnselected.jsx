/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgRadioUnselected(props) {
  return (
    <svg width={24} height={24} {...props}>
      <circle
        cx={12}
        cy={12}
        r={11.5}
        fillRule="nonzero"
        stroke={props.color}
        fill="none"
      />
    </svg>
  );
}

export default SvgRadioUnselected;
