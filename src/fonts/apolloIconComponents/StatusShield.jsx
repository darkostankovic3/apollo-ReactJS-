/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgStatusShield(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M20.418 0H3.582a1.5 1.5 0 00-1.491 1.5v6.263a18.256 18.256 0 009.675 16.178.494.494 0 00.469.001 18.261 18.261 0 009.674-16.179V1.5A1.5 1.5 0 0020.418 0zM17.9 7.945l-7.1 6.7a1 1 0 01-1.4-.024l-2.373-2.396a1 1 0 111.421-1.407l1.682 1.7 6.395-6.027A1 1 0 1117.9 7.945z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgStatusShield;
