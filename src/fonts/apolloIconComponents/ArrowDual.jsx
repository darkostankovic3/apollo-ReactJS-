/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgArrowDual(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M23.485 5.062L18.707.284a1.031 1.031 0 00-1.415 0l-4.777 4.778a1 1 0 00.707 1.707h3.028a.25.25 0 01.25.25v15.473a1.5 1.5 0 003 0V7.019a.249.249 0 01.25-.25h3.028a1 1 0 00.707-1.707zM11.7 17.838a1 1 0 00-.924-.617H7.75a.249.249 0 01-.25-.25V1.5a1.5 1.5 0 00-3 0v15.471a.25.25 0 01-.25.25H1.222a1 1 0 00-.707 1.707l4.777 4.778a1 1 0 001.415 0l4.778-4.778a1 1 0 00.215-1.09z" />
      </g>
    </svg>
  );
}

export default SvgArrowDual;
