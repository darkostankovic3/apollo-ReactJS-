/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgCheckboxSelected(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M2 0h20a2 2 0 012 2v20a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm16.927 8.2a1 1 0 10-1.61-1.183l-6.227 8.451-4.076-3.261a1 1 0 10-1.25 1.562l4.888 3.908a1.011 1.011 0 001.43-.188L18.927 8.2z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCheckboxSelected;
