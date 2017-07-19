import React from 'react';

const FullStar = ({ fill }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
        fill={fill}
      >
        <title>star-full</title>
        <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" />
      </svg>
    </div>
  );
};

export default FullStar;