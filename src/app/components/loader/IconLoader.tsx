import React from 'react';

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
    fill="none"
  >
    <title>Loader Logo</title>
    <g>
      <g id="RS" transform="translate(11.000000, 5.000000)" opacity="0">
        <text
          x="39"
          y="49"
          fontSize="27"
          fill="#d3d3d3"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Playfair Display', serif"
        >
          RS
        </text>
      </g>
      <path
        stroke="#d3d3d3"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50,5 L 5,50 L 50,95 L 95,50 Z"
        strokeDasharray="300"
        strokeDashoffset="300"
      />
    </g>
  </svg>
);

export default IconLoader;
