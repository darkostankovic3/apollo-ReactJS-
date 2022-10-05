/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgRefresh(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M11.578 2.01a10.065 10.065 0 019.067 6.637.23.23 0 00.252.15l1.57-.231a.465.465 0 01.47.692l-2.49 4.37a.465.465 0 01-.341.23.457.457 0 01-.063 0 .465.465 0 01-.327-.135l-3.506-3.484a.465.465 0 01.26-.79l1.594-.237a.233.233 0 00.179-.325 7.681 7.681 0 10-7.316 10.779 7.644 7.644 0 006.47-3.126 1.163 1.163 0 011.87 1.376A10 10 0 0111.207 22c-.124 0-.247 0-.373-.007a9.999 9.999 0 11.737-19.984h.007z"
        fill={props.color}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgRefresh;
