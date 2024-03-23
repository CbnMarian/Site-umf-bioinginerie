import "./home.css";
import Lab1 from "../../assets/lab1.png";
import Lab2 from "../../assets/lab2.png";
import Lab3 from "../../assets/lab3.png";
import Lab4 from "../../assets/lab4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="container">
      <div id="main">
        <section class="hero">
          <div class="hero-container">
            <div class="column-left">
              <h1>TRAINING AND RESEARCH CENTER IN TISSUE ENGINEERINGS</h1>
              <p>
                The mission of in the Training and Research Center in Tissue
                Engineering (TRCTE) is to nucleate interdisciplinary research
                and educational activities that link Bomaterials, Cells Culture
                and Biotechnology. The core themes are focus on: design and
                construction of scaffolds for regenerative medicine;
                biocompatibility; cellular and acellular engineering of soft and
                hard tissues; nanotechnologies for diagnosis and therapy; in
                vitro models for drug delivery
              </p>
              <button>Learn More</button>
            </div>
            <Carousel infinite={true} showDots={true} responsive={responsive}>
              <div className="card">
                <img src={Lab2} className="App-logo" alt="logo" />
              </div>
              <div className="card">
                <img src={Lab1} className="App-logo" alt="logo" />
              </div>
              <div className="card">
                <img src={Lab3} className="App-logo" alt="logo" />
              </div>
              <div className="card">
                <img src={Lab4} className="App-logo" alt="logo" />
              </div>
              <div className="card">
                <img src={Lab2} className="App-logo" alt="logo" />
              </div>
              <div className="card">
                <img src={Lab1} className="App-logo" alt="logo" />
              </div>
            </Carousel>
            ;
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
