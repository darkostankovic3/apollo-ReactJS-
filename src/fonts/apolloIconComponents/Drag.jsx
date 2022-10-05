/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgDrag(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="evenodd">
        <path d="M20 21a3 3 0 11-6 0 3 3 0 016 0M20 12a3 3 0 11-6 0 3 3 0 016 0M20 3a3 3 0 11-6 0 3 3 0 016 0" />
        <g>
          <path d="M10 21a3 3 0 11-6 0 3 3 0 016 0M10 12a3 3 0 11-6 0 3 3 0 016 0M10 3a3 3 0 11-6 0 3 3 0 016 0" />
        </g>
      </g>
    </svg>
  );
}

export default SvgDrag;
