import React from "react";
import Heading from "./Headings";
import trainingandvector from './images/Trainingandvector.png';
import facilationvector from './images/facilationVector.png';
import EngagementVector from './images/EngagementVector.png';
import ConsultationVector from './images/ConsultationVector.png';
import CommunicationVector from './images/ComminucationVector.png';
import assets63 from './images/Asset61.png';
import assets71 from './images/Asset71.png';
import assets82 from './images/Asset82.png';
import assets52 from './images/Asset52.png';

// Service Data with dynamic width for content and background images
const servicesData = [
  {
    id: 1,
    title: "Engagement",
    description: `We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.`,
    image: EngagementVector,
    contentWidth: "47%",
  },
  {
    id: 2,
    title: "Communications",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.`,
    image: CommunicationVector,
    contentWidth: "39%",
  },
  {
    id: 3,
    title: "Facilitation",
    description: `We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.`,
    image: facilationvector,
    contentWidth: "42%",
  },
  {
    id: 4,
    title: "Consultation and Research",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.`,
    image: ConsultationVector,
    contentWidth: "36%",
  },
  {
    id: 5,
    title: "Training & Mentoring",
    description: `We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.`,
    image: trainingandvector,
    contentWidth: "45%",
  },
];

// Service Component with dynamic width for content and margin between image and text
const Service = ({ title, description, image, contentWidth, imageWidth, isReversed, bgImageLeft, bgImageRight }) => (
  <div className={`service-row ${isReversed ? "reverse" : ""}`} style={{ position: "relative" }}>
    <div
      className="service-content"
      style={{
        textAlign: isReversed ? "left" : "right",
        flexBasis: contentWidth, 
        // marginRight: isReversed ? "0" : "10rem",
        // marginLeft: isReversed ? "10rem" : "0",
        zIndex: 1, 
      }}
    >
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
    <div
      className="service-image"
      style={{
        flexBasis: imageWidth, // Apply dynamic width for image
        zIndex: 1, // Ensure image is above the background
      }}
    >
      <img src={image} alt={title} />
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="align-items-center">
      <div className="services-container">
        <Heading text="Services" totalWidth="238px" thickWidth="62px" centered={true} />
        {servicesData.map((service, index) => (
          <Service
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            contentWidth={service.contentWidth}
            imageWidth="40%" // Set a fixed image width or dynamic as needed
            isReversed={index % 2 !== 0} // Reverse the layout for odd-indexed services
            bgImageLeft={service.bgImageLeft}
            bgImageRight={service.bgImageRight}
          />
        ))}
      </div>
      <div className="service-backgrounds">
        <img src={assets63} className="assets63" />
        <img src={assets71} className="assets71" />
        <img src={assets82} className="assets82" />
        <img src={assets52} className="assets52" />
      </div>
    </section>
  );
};

export default Services;
