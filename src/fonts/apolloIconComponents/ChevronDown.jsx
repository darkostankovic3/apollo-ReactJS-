/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgChevronDown(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M4.657 8.857l6.865 8.178c.125.137.299.215.48.215a.651.651 0 00.481-.215l6.861-8.178a.668.668 0 00-.066-.927l-1.156-1.021a.622.622 0 00-.9.073L12.12 13.18a.153.153 0 01-.118.057.153.153 0 01-.119-.057L6.78 6.98a.628.628 0 00-.898-.07L4.724 7.93a.661.661 0 00-.067.927z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgChevronDown;
