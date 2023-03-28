import * as React from "react";

const CrossAddProfilePhoto = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
      fill="#FF6C00"
    />
  </svg>
);

export default CrossAddProfilePhoto;
