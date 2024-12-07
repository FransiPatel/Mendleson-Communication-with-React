import React from "react";
import Heading from "./Headings";
import project1 from './images/Project-1.png';
import project2 from './images/Our Project _ 2 img 1.png';
import project3 from './images/Our Project_ 3 img 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectImage = ({ imageSrc, altText, projectName }) => {
  return (
    <div className="col d-flex justify-content-center align-items-center">
      <div className="project-image-container">
        <img
          src={imageSrc}
          className="img-fluid project-image"
          alt={altText}
        />
        <div className="overlay">
          <div className="overlay-text">{projectName}</div>
        </div>
      </div>
    </div>
  );
};

const OurProjects = () => {
  return (
    <section id="ourproject" className="py-5">
      <div className="container">
        <Heading text="our projects" totalWidth="362px" thickWidth="103px" centered={true} />
        <div className="row mt-5 project-images">
          <ProjectImage imageSrc={project1} altText="Project Image 1" projectName="Design Odyssey" />

          <div className="col d-flex flex-column justify-content-between" style={{ marginLeft: "-50px" }}>
            <ProjectImage imageSrc={project2} altText="Project Image 2" projectName="NextGen Solutions" />
            <ProjectImage imageSrc={project3} altText="Project Image 3" projectName="Creative Spark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
