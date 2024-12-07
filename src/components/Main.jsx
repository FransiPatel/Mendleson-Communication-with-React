import hero_group from './images/Group 1.png';
import asset4 from './images/Assets-4.png';

// function Main() {
//   return (
//     <>
//       <section className="hero d-flex flex-column flex-lg-row">
//         <div className="col-lg-6 vectorobject mb-4 mb-lg-0">
//           <span className="graphic1"></span>
//           <span className="assets3"></span>
//           <span className="assets4"></span>
//           <img 
//             src={vector_object} 
//             alt="Hero Illustration" 
//             className="img-fluid" 
//           />
//         </div>

//         <div className="col-lg-6 hero-text text-lg-start px-3">
//           <h1 className="fw-medium text-dark">Mendleson Communication and Engagement</h1>
//           <p className="lead fw-normal">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, 
//             ut quam volutpat, tortor.
//           </p>
//         </div>
        
//       </section>
//     </>
//   );
// }

// export default Main;

function Main() {
  return (
    <>
      <section className="hero">
        {/* Left Side with the Illustration */}
        <div className="hero-part1">
          <img 
            src={hero_group} 
            alt="Hero Illustration" 
            className="img-fluid hero-main-image" 
          />
        </div>

        {/* Right Side with the Text */}
        <div className="hero-part2">
          <h1 className="hero-part2__title text-dark">
            Mendleson Communication and Engagement
          </h1>
          <p className="hero-part2__text lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, 
            ut quam volutpat, tortor.
          </p>
        </div>

        {/* Decorative Element at the Bottom */}
        <img 
          src={asset4} 
          alt="Decorative Element" 
          className="hero-part3" 
        />
      </section>
    </>
  );
}

export default Main;
