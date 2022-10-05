/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFilter(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M23.894.552A1 1 0 0023 0H1a1 1 0 00-.8 1.6L9 13.423V22a2.015 2.015 0 002 2c.433 0 .854-.14 1.2-.4l2-1.5c.503-.378.799-.97.8-1.6v-7.077L23.8 1.6a1 1 0 00.094-1.048zM5.417 2.2l3.939 5.25a.5.5 0 01.1.3V9a.5.5 0 01-.9.3L3.62 2.8a.5.5 0 01.4-.8h1a.5.5 0 01.397.2z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgFilter;
