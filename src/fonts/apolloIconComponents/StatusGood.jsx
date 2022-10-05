/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgStatusGood(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.992 5.376 18.624.008 12 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 011.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgStatusGood;
