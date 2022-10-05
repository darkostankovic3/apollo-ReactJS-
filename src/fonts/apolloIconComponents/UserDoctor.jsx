/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgUserDoctor(props) {
  return (
    <svg width={16} height={16} {...props}>
      <text
        fill={props.color}
        fillRule="evenodd"
        fontFamily="apollo-icons"
        fontSize={16}
      >
        <tspan x={0} y={15}>
          {'\uE952'}
        </tspan>
      </text>
    </svg>
  );
}

export default SvgUserDoctor;
