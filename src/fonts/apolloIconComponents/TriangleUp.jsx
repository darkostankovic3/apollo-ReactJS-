/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgTriangleUp(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M17.852 15.639l-4.976-7.207C12.69 8.164 12.358 8 12 8s-.69.164-.876.432L6.148 15.64a.802.802 0 00-.016.905c.181.282.522.456.891.456h9.954c.37 0 .71-.174.891-.456a.802.802 0 00-.016-.905z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgTriangleUp;
