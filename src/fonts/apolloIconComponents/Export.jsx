/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgExport(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M23.7 10.209a1 1 0 000-1.414L20.2 5.3a1 1 0 00-1.7.7v1.75a.249.249 0 01-.25.25H12.5a4.005 4.005 0 00-4 4v2a1.5 1.5 0 003 0v-2a1 1 0 011-1h5.75a.249.249 0 01.25.25V13a1 1 0 001.708.707l3.492-3.498z" />
        <path d="M16 12.5a1 1 0 00-1 1V18a.5.5 0 01-.5.5h-12A.5.5 0 012 18V6a.5.5 0 01.5-.5H15a1 1 0 002 0 2 2 0 00-2-2H2a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2v-5a1 1 0 00-1-1z" />
      </g>
    </svg>
  );
}

export default SvgExport;
