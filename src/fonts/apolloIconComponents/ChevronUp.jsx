/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgChevronUp(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M4.657 15.143l6.865-8.178a.651.651 0 01.48-.215c.182 0 .356.078.481.215l6.861 8.178a.668.668 0 01-.066.927l-1.156 1.021a.622.622 0 01-.9-.073L12.12 10.82a.153.153 0 00-.118-.057.153.153 0 00-.119.057l-5.104 6.2a.628.628 0 01-.898.07l-1.157-1.02a.661.661 0 01-.067-.927z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgChevronUp;
