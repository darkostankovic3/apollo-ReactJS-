/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFileXml(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M17.5 6h3.9a.25.25 0 00.177-.427L16.427.425A.25.25 0 0016 .6v3.9A1.5 1.5 0 0017.5 6z" />
        <path d="M21.75 7a.25.25 0 01.25.248V22a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h10.75a.25.25 0 01.25.248V4.5A2.5 2.5 0 0017.5 7h4.25zM8.346 17h1.19l-1.694-2.401 1.589-2.268H8.234l-1.057 1.596-1.071-1.596H4.923l1.589 2.275L4.818 17h1.183l1.176-1.708L8.346 17zm5.691 0h1.001v-4.669h-1.4l-1.134 2.912-1.134-2.912H9.977V17h.994v-3.36L12.287 17h.434l1.316-3.36V17zm1.925 0h2.968v-.875h-1.974v-3.794h-.994V17z" />
      </g>
    </svg>
  );
}

export default SvgFileXml;
