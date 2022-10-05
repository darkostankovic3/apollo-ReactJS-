/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgPrint(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M5.75 6a1 1 0 001-1V2h8.836l2.164 2.163V5a1 1 0 002 0V3.749a1 1 0 00-.293-.707L17 .587A2.01 2.01 0 0015.586 0H6.75a2 2 0 00-2 2v3a1 1 0 001 1zM21.5 7h-19A2.5 2.5 0 000 9.5V14a2.5 2.5 0 002.5 2.5H5v6.25c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V16.5h2A2.5 2.5 0 0024 14V9.5A2.5 2.5 0 0021.5 7zm-18 4.5a1 1 0 110-2 1 1 0 010 2zm14 10a.5.5 0 01-.5.5H7.5a.5.5 0 01-.5-.5v-9.043a.5.5 0 01.5-.5H17a.5.5 0 01.5.5V21.5z" />
        <path d="M15 14.749H9.5a.75.75 0 100 1.5H15a.75.75 0 100-1.5zM13.25 18.249H9.5a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5z" />
      </g>
    </svg>
  );
}

export default SvgPrint;
