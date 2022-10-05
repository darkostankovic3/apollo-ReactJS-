/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgKey(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M23.113 5.954L21.849 4.69l.881-.88a1.915 1.915 0 00-2.707-2.71L9.04 12.085a6.014 6.014 0 102.707 2.707l3.739-3.737.762.762a1.75 1.75 0 102.475-2.475l-.763-.762 1.416-1.417 1.264 1.263a1.788 1.788 0 002.473 0 1.751 1.751 0 000-2.472zm-16.737 8.5a3 3 0 110 5.996 3 3 0 010-5.994v-.002z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgKey;
