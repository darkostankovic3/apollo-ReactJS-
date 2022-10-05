/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgPinUser(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0a9.5 9.5 0 00-4 18.119c.538.25.97.683 1.218 1.222l1.872 4.076a1 1 0 001.817 0l1.876-4.079A2.5 2.5 0 0116 18.118 9.5 9.5 0 0012 0zm0 2.5a3 3 0 110 6 3 3 0 010-6zm4 12H8a.5.5 0 01-.5-.5 4.5 4.5 0 119 0 .5.5 0 01-.5.5z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgPinUser;
