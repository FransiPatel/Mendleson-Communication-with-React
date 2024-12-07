import React from "react";
import Heading from "./Headings";
import member1 from './images/Person 1 img 1.png';
import member2 from './images/Person 2 img 1.png';
import member3 from './images/Person 3 img 1.png';
import assets82 from './images/Asset82.png';
import 'bootstrap/dist/css/bootstrap.min.css';



// Team data 
const teamMembers = [
  { name: "Jessica D'suza", image: member1, alt: "Jessica D'suza" },
  { name: "Johny Williams", image: member2, alt: "Johny Williams" },
  { name: "Sanya R.", image: member3, alt: "Sanya R." },
];

const OurTeam = () => {
  // Function to generate team member cards
  const renderTeamMembers = () => {
    return teamMembers.map((member, index) => (
      <div className="col-md-4 text-center" key={index}>
        <div className="team-member">
          <img src={member.image} className="team-img" alt={member.alt} />
          <h5 className="mt-5">{member.name}</h5>
        </div>
      </div>
    ));
  };

  return (
    <section id="ourteam">
      <div className="container">
        <div className="text-center d-flex flex-column align-items-center text-dark">
        <Heading text="our team" totalWidth="241px" thickWidth="101px" centered={true} />
          <div className="row justify-content-center" style={{ marginTop: "31px" }}>
            {renderTeamMembers()}
          </div>
        </div>
        <div className="ourteam-backgrounds">
        <img src={assets82} className="assets82" />
      </div>
      </div>
    </section>
  );
};

export default OurTeam;
