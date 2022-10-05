/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgRadioSelected(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle stroke={props.color} cx={12} cy={12} r={11.5} />
        <circle fill={props.color} cx={12} cy={12} r={8} />
      </g>
    </svg>
  );
}

export default SvgRadioSelected;
