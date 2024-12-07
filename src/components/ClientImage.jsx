import React, { useState } from 'react';

const ClientImage = ({ bwSrc, colorSrc, altText }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="client-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? colorSrc : bwSrc}
          alt={altText}
          className="client-image"
        />
      </div>
    );
  };
  

export default ClientImage;
