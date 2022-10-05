/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgTriangleDown(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M17.868 8.457c-.181-.282-.522-.457-.891-.457H7.023c-.37 0-.71.175-.891.456a.802.802 0 00.015.905l4.977 7.207c.186.268.518.432.876.432s.69-.164.875-.432l4.977-7.207a.802.802 0 00.016-.904z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgTriangleDown;
