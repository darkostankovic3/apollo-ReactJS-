/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgPinLocation(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0a9.5 9.5 0 00-4 18.119 2.5 2.5 0 011.218 1.222l1.873 4.076a1 1 0 001.817 0l1.876-4.08A2.5 2.5 0 0116 18.118 9.5 9.5 0 0012 0zm0 14.372a4.872 4.872 0 110-9.744 4.872 4.872 0 010 9.744z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgPinLocation;
