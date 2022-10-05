/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFileSheet(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g transform="translate(2)" fill={props.color} fillRule="nonzero">
        <path d="M19.707 5.705L14.293.291A1 1 0 0013.586 0H2a2 2 0 00-2 2v20a2 2 0 002 2h16a2 2 0 002-2V6.412a1 1 0 00-.293-.707zM18 21.5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h10.25a.25.25 0 01.25.25V5a2 2 0 002 2h2.75a.25.25 0 01.25.25V21.5z" />
        <rect x={4.5} y={10.498} width={3} height={2} rx={0.5} />
        <rect x={4.5} y={13.998} width={3} height={2} rx={0.5} />
        <rect x={4.5} y={17.498} width={3} height={2} rx={0.5} />
        <rect x={9} y={10.498} width={6.5} height={2} rx={0.5} />
        <rect x={9} y={13.998} width={6.5} height={2} rx={0.5} />
        <rect x={9} y={17.498} width={6.5} height={2} rx={0.5} />
      </g>
    </svg>
  );
}

export default SvgFileSheet;
