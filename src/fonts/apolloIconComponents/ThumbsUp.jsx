/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgThumbsUp(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill={props.color} fillRule="nonzero">
        <path d="M24 10.034a2.5 2.5 0 00-2.5-2.5h-6.311a.25.25 0 01-.237-.328c.552-1.4.731-2.918.52-4.407-.588-2.1-1.834-2.7-2.808-2.565A2 2 0 0011 2.284C11 5.03 8.871 8.03 6.966 9.345a.5.5 0 00-.216.412v10.116a.5.5 0 00.405.491c.357.068.681.135.987.2 1.346.32 2.725.478 4.108.471h6.5c1.958 0 2.25-1.1 2.25-1.75 0-.345-.079-.685-.231-.995a2.251 2.251 0 001-3 2.25 2.25 0 00.959-3.078A2.5 2.5 0 0024 10.034zM5.25 9.784a1 1 0 00-1-1H1a1 1 0 00-1 1v11a1 1 0 001 1h3.25a1 1 0 001-1v-11zm-1.5 9.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </g>
    </svg>
  );
}

export default SvgThumbsUp;
