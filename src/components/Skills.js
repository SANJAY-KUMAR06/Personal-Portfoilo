import { Container,Row,Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
      <section className="skill" id="skills">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                      <h2>Skills</h2>
                      <p> I am a versatile developer with strong skills in web development and Python programming . In web development, I excel at creating dynamic, 
                        responsive, and user-friendly applications using modern frameworks and technologies like HTML, CSS, JavaScript, React, and Flask. As a Python developer, 
                        I specialize in building robust applications, automating processes, and working with libraries for tasks such as data manipulation, API integration, and 
                        game development. With a passion for learning and problem-solving, I bring efficiency and creativity to every project.
                       </p>
                      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                              <img src={meter1} alt="Image" />
                              <h5>Web Development</h5>
                          </div>
                          <div className="item">
                              <img src={meter2} alt="Image" />
                              <h5>Problem Sloving</h5>
                          </div>
                          <div className="item">
                              <img src={meter3} alt="Image" />
                              <h5>Python Development</h5>
                          </div>
                          <div className="item">
                              <img src={meter1} alt="Image" />
                              <h5>SQL</h5>
                          </div>
                      </Carousel>
                  </div>
              </div>
          </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
  </section>
)
}