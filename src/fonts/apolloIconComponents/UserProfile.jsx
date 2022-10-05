/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgUserProfile(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g transform="translate(2)" fill={props.color} fillRule="nonzero">
        <path d="M18.889 24H1.11C.497 24 0 23.552 0 23c0-4.97 4.477-9 10-9s10 4.03 10 9c0 .265-.117.52-.325.707a1.177 1.177 0 01-.786.293z" />
        <circle cx={10} cy={6.25} r={6.25} />
      </g>
    </svg>
  );
}

export default SvgUserProfile;
