/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgTriangleRight(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M15.567 11.124L8.363 6.148a.804.804 0 00-.906-.016c-.282.181-.457.522-.457.892v9.952c0 .37.175.71.457.892.283.182.63.175.907-.016l7.203-4.977c.269-.185.433-.517.433-.875s-.164-.69-.433-.876z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgTriangleRight;
