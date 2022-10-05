/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgEmail(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M23.888 5.832a.182.182 0 00-.2.039l-9.747 9.745a2.75 2.75 0 01-3.888 0L.31 5.871A.182.182 0 000 6v12a2 2 0 002 2h20a2 2 0 002-2V6a.181.181 0 00-.112-.168z" />
        <path d="M11.115 14.556c.489.487 1.28.487 1.768 0l9.686-9.686a.5.5 0 00.121-.511C22.58 4.03 22.274 4 22 4H2c-.275 0-.583.03-.691.359a.5.5 0 00.121.511l9.685 9.686z" />
      </g>
    </svg>
  );
}

export default SvgEmail;
