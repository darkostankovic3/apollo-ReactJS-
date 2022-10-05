/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgStatusPending(props) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.993 5.376 18.624.007 12 0zm5.2 17.221a1.016 1.016 0 01-1.413.062l-4.959-4.546A1 1 0 0110.5 12V6.5a1 1 0 012 0v5.06l4.634 4.248a1 1 0 01.066 1.414v-.001z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgStatusPending;
