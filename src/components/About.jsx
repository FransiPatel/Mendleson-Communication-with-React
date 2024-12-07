import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./Headings";
import aboutus from './images/aboutus1.png';
import engagementicon from './images/Enagagementicon.png';
import communicationicon from './images/coomunicationicon.png';
import assets5 from './images/Asset53.png';

const AboutUs = () => {
  return (
    <section className="container about-us">
      <div className="row align-items-center">
        {/* Left Side Image Section */}
        <div className="col-12 col-md-6 about-image">
          <img
            src={aboutus}
            alt="About Us"
            className="img-fluid"
          />
        </div>

        {/* Right Side Text Section */}
        <div className="col-12 col-md-6 about-text">
        <Heading text="About Us" totalWidth="238px" thickWidth="156px" centered={false} />

          <p className="info">
            We love what we do and are driven by achieving great results for our clients. 
            Our awards and impressive client list are a testament to our high-quality approach. 
            We deliver value, creativity, results, and exceptional levels of customer service and professionalism. 
            We specialize in infrastructure development, energy, and natural resources.
          </p>

          {/* Engagement and Communication Columns */}
          <div className="columns">
            {/* Engagement Column */}
            <div className="column">
              <img
                src={engagementicon}
                alt="Engagement Icon"
                className="icon"
              />
              <h3 className="column-heading">Engagement</h3>
              <p className="column-text">
                We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                <a href="#" className="read-more"> Read More</a>
              </p>
            </div>

            {/* Communication Column */}
            <div className="column">
              <img
                src={communicationicon}
                alt="Communication Icon"
                className="icon"
              />
              <h3 className="column-heading">Communications</h3>
              <p className="column-text">
                We are award-winning leaders in communications and campaign management.
                <a href="#" className="read-more"> Read More</a>
              </p>
            </div>
          </div>
        </div>
        <span className="assets5"><img src={assets5} alt="Background Asset 5"/></span>
      </div>
    </section>
  );
};

export default AboutUs;
