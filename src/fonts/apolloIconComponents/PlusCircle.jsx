/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgPlusCircle(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 23.5c6.351 0 11.5-5.149 11.5-11.5S18.351.5 12 .5.5 5.649.5 12C.507 18.348 5.652 23.493 12 23.5zM6 11h4.75a.25.25 0 00.25-.25V6a1 1 0 012 0v4.75c0 .138.112.25.25.25H18a1 1 0 010 2h-4.75a.25.25 0 00-.25.25V18a1 1 0 01-2 0v-4.75a.25.25 0 00-.25-.25H6a1 1 0 010-2z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgPlusCircle;
