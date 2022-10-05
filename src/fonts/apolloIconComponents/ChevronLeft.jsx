/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgChevronLeft(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M15.143 19.343l-8.178-6.865a.651.651 0 01-.215-.48c0-.182.078-.356.215-.481l8.178-6.861a.668.668 0 01.927.066l1.021 1.156a.622.622 0 01-.073.9L10.82 11.88a.153.153 0 00-.057.118c0 .046.02.089.057.119l6.2 5.104a.628.628 0 01.07.898l-1.02 1.157a.661.661 0 01-.927.067z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgChevronLeft;
