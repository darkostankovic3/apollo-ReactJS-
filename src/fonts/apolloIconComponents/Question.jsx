/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgQuestion(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.993 5.376 18.624.007 12 0zm0 19a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.6-6.08a1 1 0 00-.6.917 1 1 0 01-2 0 3 3 0 011.8-2.75A2 2 0 1010 9.255a1 1 0 11-2 0 4 4 0 115.6 3.666v-.001z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgQuestion;
