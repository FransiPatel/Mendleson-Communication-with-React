import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Heading = ({ text, totalWidth = "100%", thickWidth = "50px", centered = false }) => {
  return (
    <div
      className={`heading-container ${centered ? 'text-center d-flex flex-column align-items-center' : ''}`}
      style={{ textAlign: centered ? 'center' : 'left' }} // Add inline style to conditionally set text alignment
    >
      <h1 className="heading">{text}</h1>
      <div className="line-container" style={{ width: totalWidth }}>
        <div className="line-thick" style={{ width: thickWidth }}></div>
        <div className="line-thin"></div>
      </div>
    </div>
  );
};

export default Heading;
