import React from "react";

const Men = ({ color = "#4b8dca", width = "30px" }) => {
  return (
    <svg
      width={width}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
    >
      <path
        d="M54.95,51.59c-5.82,3.36-8.82,7.9-9.52,13.82-.79,6.68-2.58,9.14-6.79,8.46-4.19-.67-5.45-4.32-4.25-10.6,3.44-17.96,19.62-26.05,36.15-25.46,10.59,.38,19.89,3.96,26.81,12.45,4.31,5.29,6.28,11.39,6.25,18.17-.02,3.55-1.95,5.57-5.37,5.48-3.24-.08-5.42-1.78-5.56-5.44-.28-7.31-3.43-12.95-9.86-16.92-.97,1.8-.54,3.41-.54,4.94-.03,24.12-.01,48.24-.03,72.36,0,5.12-3.66,7.83-7.89,5.98-2.83-1.23-2.97-3.71-2.98-6.25-.01-10.96,.02-21.93-.05-32.89,0-1.28,.84-3.2-1.26-3.67-2.28-.51-3.73-.11-3.68,3,.2,10.96,.07,21.92,.08,32.89,0,1.76,.1,3.5-1.05,5.03-1.34,1.79-3.1,2.65-5.3,2.37-2.17-.28-3.67-1.39-4.52-3.57-.67-1.72-.63-3.42-.63-5.16,0-23.39,0-46.78,0-70.16,0-1.41,0-2.83,0-4.84Z"
        fill={color}
      />
      <path
        d="M69.02,33.15c-5.99,.1-11.08-4.61-11.21-10.38-.13-5.52,5.09-10.65,10.92-10.75,5.56-.1,10.73,4.77,10.87,10.23,.15,5.82-4.68,10.8-10.59,10.91Z"
        fill={color}
      />
    </svg>
  );
};

export default Men;