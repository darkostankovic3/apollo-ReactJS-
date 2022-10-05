/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgEyeShow(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g transform="translate(0 4)" fill={props.color} fillRule="nonzero">
        <path d="M23.432 6.524C20.787 3.614 16.4.538 12 .6 7.6.537 3.213 3.615.568 6.524c-.75.84-.75 2.109 0 2.948C3.182 12.351 7.507 15.4 11.839 15.4h.308c4.347 0 8.671-3.049 11.288-5.929a2.21 2.21 0 00-.003-2.947zM7.4 8a4.6 4.6 0 119.2 0 4.6 4.6 0 01-9.2 0z" />
        <circle cx={12} cy={8} r={2} />
      </g>
    </svg>
  );
}

export default SvgEyeShow;
