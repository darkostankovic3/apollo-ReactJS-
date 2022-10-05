/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgArrowUp(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M17.485 5.062L12.707.284a1.031 1.031 0 00-1.415 0L6.515 5.062a1 1 0 00.707 1.707h3.028a.25.25 0 01.25.25v15.473a1.5 1.5 0 003 0V7.019a.249.249 0 01.25-.25h3.028a1 1 0 00.707-1.707z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgArrowUp;
