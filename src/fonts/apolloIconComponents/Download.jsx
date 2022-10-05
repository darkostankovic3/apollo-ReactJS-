/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgDownload(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M22.667 16.938c-.67 0-1.212.543-1.212 1.212v1.855a1.572 1.572 0 01-1.571 1.57H4.116c-.867 0-1.57-.703-1.571-1.57V18.15a1.212 1.212 0 00-2.424 0v1.855a4 4 0 003.995 4h15.768a4 4 0 004-4V18.15a1.212 1.212 0 00-1.217-1.212z" />
        <path d="M12 0c-1.07 0-1.939.868-1.939 1.939v9.066a.25.25 0 01-.25.25H7.152a.97.97 0 00-.732 1.606l4.848 5.576a.969.969 0 001.464 0l4.848-5.576a.97.97 0 00-.732-1.606h-2.659a.25.25 0 01-.25-.25V1.939C13.939.869 13.071 0 12 0z" />
      </g>
    </svg>
  );
}

export default SvgDownload;
