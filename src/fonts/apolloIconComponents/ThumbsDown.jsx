/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgThumbsDown(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M0 11.966a2.5 2.5 0 002.5 2.5h6.311a.25.25 0 01.237.328 8.685 8.685 0 00-.52 4.407c.588 2.1 1.834 2.7 2.808 2.565A2 2 0 0013 19.716c0-2.746 2.129-5.746 4.034-7.061a.5.5 0 00.216-.412V2.127a.5.5 0 00-.405-.491 46.964 46.964 0 01-.987-.2A17.361 17.361 0 0011.75.965h-6.5C3.292.966 3 2.062 3 2.716c-.001.347.078.689.231 1a2.251 2.251 0 00-1 3 2.25 2.25 0 00-.959 3.078A2.5 2.5 0 000 11.966zM18.75 12.216a1 1 0 001 1H23a1 1 0 001-1v-11a1 1 0 00-1-1h-3.25a1 1 0 00-1 1v11zm1.5-9.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
      </g>
    </svg>
  );
}

export default SvgThumbsDown;
