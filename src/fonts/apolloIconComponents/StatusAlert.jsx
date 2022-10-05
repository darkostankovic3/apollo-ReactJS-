/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgStatusAlert(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm7 12a1 1 0 00-1-1H6a1 1 0 000 2h12a1 1 0 001-1z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgStatusAlert;
