/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgTriangleLeft(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M16.543 6.131a.802.802 0 00-.904.017l-7.207 4.976C8.164 11.31 8 11.642 8 12s.164.69.432.875l7.207 4.977a.802.802 0 00.905.016c.282-.181.456-.522.456-.891V7.023c0-.37-.175-.71-.457-.892z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgTriangleLeft;
