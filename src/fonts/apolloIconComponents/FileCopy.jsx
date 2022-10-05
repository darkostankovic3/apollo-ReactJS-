/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgFileCopy(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M20.482 4.569l-2.863-3.031a1.82 1.82 0 00-1.3-.538H8.333A1.835 1.835 0 006.5 2.833V4.5H4.833A1.835 1.835 0 003 6.333v14.334A1.835 1.835 0 004.833 22.5h10.834a1.835 1.835 0 001.833-1.833V19h1.667A1.835 1.835 0 0021 17.167V5.85a1.8 1.8 0 00-.518-1.281zM15.75 3v1.75a1.5 1.5 0 001.5 1.5H19V16.5a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-13A.5.5 0 019 3h6.75zM15 20.5H5.5A.5.5 0 015 20V7a.5.5 0 01.5-.5h.75a.25.25 0 01.25.25v10.417C6.5 18.179 7.32 19 8.333 19h6.917a.25.25 0 01.25.25V20a.5.5 0 01-.5.5z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgFileCopy;
