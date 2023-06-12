import React from "react";

const Video = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="video"
    >
      <path d="M51.83 56H12.17a10 10 0 0 1-10-10V18a10 10 0 0 1 2.71-6.85 2 2 0 1 1 2.92 2.74A6 6 0 0 0 6.17 18v28a6 6 0 0 0 6 6h39.66a6 6 0 0 0 6-6V18a6 6 0 0 0-6-6H14.76a2 2 0 1 1 0-4h37.07a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10Z"></path>
      <path d="M24.88 43.8a3 3 0 0 1-3-3V23.2a3 3 0 0 1 4.42-2.64l16.41 8.8a2 2 0 0 1-1.9 3.52l-14.93-8v14.25l9-4.83a2 2 0 1 1 1.89 3.52L26.3 43.44a3 3 0 0 1-1.42.36Z"></path>
    </svg>
  );
};

export default Video;
