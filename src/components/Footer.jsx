import React from "react";
import facebook from './images/facebook.png';
import google from './images/google.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
  const socialLinks = [
    { icon: facebook, label: "Facebook", url:"https://www.facebook.com/" },
    { icon: linkedin, label: "LinkedIn", url:"https://in.linkedin.com/" },
    { icon: google, label: "Google +", url:"https://www.google.com/" },
  ];

  const exploreLinks = ["Services", "Team", "Clients"];

  const contactDetails = [
    "Lorem Ipsum dummy address",
    "used for display",
    "1234567890",
  ];

  const email = "mendlesoncommunication@email.com";

  return (
    <>
    <footer className="footer bg-lightblue py-4 " id="contact-us">
      <div className="container">
        <div className="row text-center text-md-start mt-4">
          {/* Social Section */}
          <div className="col-md-3 social">
            <h6 className="fw-bold head">Social</h6>
            <ul className="list-unstyled list-items">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.icon}
                    alt={item.label.toLowerCase()}
                    className="me-2"
                  />
                  <a href={item.url} target="_blank">
                  {item.label} </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Explore Section */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold head">Explore</h6>
            <ul className="list-unstyled list-items">
              {exploreLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          {/* Contact Section */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold head">Contact</h6>
            {contactDetails.map((detail, index) => (
              <p key={index} className="list-items">
                {detail}
              </p>
            ))}
          </div>
          {/* Email Section */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold head">Email</h6>
            <p className="list-items">{email}</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="text-center py-3" style={{fontFamily:"Rubik"}}>
    <small>© Copyright 2018 Mendleson Communication Pvt Ltd</small>
  </div>
  </>
  );
};

export default Footer;
