import React from 'react';
import ClientImage from './ClientImage';
import Heading from "./Headings";
import 'bootstrap/dist/css/bootstrap.min.css';


import BHPbw from './images/Clients/BHP-bw.png';
import BHPcolor from './images/Clients/BHP-color.png';
import Boroondarabw from './images/Clients/Boroondara-bw.png';
import Boroondaracolor from './images/Clients/Boroondara-color.png';
import Brigittebw from './images/Clients/Brigitte-bw.png';
import Brigittecolor from './images/Clients/Brigitte-color.png';
import LevelCrossingbw from './images/Clients/LevelCrossing-bw.png';
import LevelCrossingcolor from './images/Clients/LevelCrossing-color.png';
import Melbournebw from './images/Clients/Melbourne-bw.png';
import Melbournecolor from './images/Clients/Melbourne-color.png';
import Pacificbw from './images/Clients/Pacific-bw.png';
import Pacificcolor from './images/Clients/Pacific-color.png';
import Phillipbw from './images/Clients/Phillip-bw.png';
import Phillipcolor from './images/Clients/Phillip-color.png';
import VCOSSbw from './images/Clients/VCOSS-bw.png';
import VCOSScolor from './images/Clients/VCOSS-color.png';
import Victoriabw from './images/Clients/Victoria-bw.png';
import VictoriaColor from './images/Clients/Victoria-color.png';
import assets91 from './images/Assets 9 1.png';

const OurClients = () => {
    return (
      <section id="ourclients">
        <div className="container">
          <Heading text="our clients" totalWidth="310px" thickWidth="104px" centered={true} />
          <div className="row">
            <ClientImage
              bwSrc={Boroondarabw}
              colorSrc={Boroondaracolor}
              altText="Boroondara"
            />
            <ClientImage
              bwSrc={Phillipbw}
              colorSrc={Phillipcolor}
              altText="City of Port Phillip"
            />
            <ClientImage
              bwSrc={Brigittebw}
              colorSrc={Brigittecolor}
              altText="Brigitte"
            />
            <ClientImage
              bwSrc={LevelCrossingbw}
              colorSrc={LevelCrossingcolor}
              altText="Level Crossing Removal Authority"
            />
            <ClientImage
              bwSrc={BHPbw}
              colorSrc={BHPcolor}
              altText="BHP"
            />
          </div>
          <div className="row mt-3">
            <ClientImage
              bwSrc={Victoriabw}
              colorSrc={VictoriaColor}
              altText="Victoria State Government"
            />
            <ClientImage
              bwSrc={Pacificbw}
              colorSrc={Pacificcolor}
              altText="Pacific Hydro"
            />
            <ClientImage
              bwSrc={VCOSSbw}
              colorSrc={VCOSScolor}
              altText="VCOSS"
            />
            <ClientImage
              bwSrc={Melbournebw}
              colorSrc={Melbournecolor}
              altText="Melbourne Water"
            />
          </div>
        </div>
        <div className="clients-backgrounds">
        <img src={assets91} className="assets91" />
      </div>
      </section>
    );
  };
  
  export default OurClients;
  