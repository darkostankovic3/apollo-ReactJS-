/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgTrash(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M19.5 7.5h-15A.5.5 0 004 8v14a2 2 0 002 2h12a2 2 0 002-2V8a.5.5 0 00-.5-.5zm-9.25 13a.75.75 0 11-1.5 0v-9a.75.75 0 111.5 0v9zm5 0a.75.75 0 11-1.5 0v-9a.75.75 0 111.5 0v9zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 100 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z" />
      </g>
    </svg>
  );
}

export default SvgTrash;
