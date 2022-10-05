/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgChevronRight(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M8.857 19.343l8.178-6.865a.651.651 0 00.215-.48.651.651 0 00-.215-.481L8.857 4.656a.668.668 0 00-.927.066L6.909 5.878a.622.622 0 00.073.9l6.198 5.102c.036.03.057.073.057.118 0 .046-.02.089-.057.119l-6.2 5.104a.628.628 0 00-.07.898l1.02 1.157a.661.661 0 00.927.067z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgChevronRight;
