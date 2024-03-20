import "./team-presentation.css";
import member1 from "../../assets/face.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="container">
      <div id="main">
        <div className="team-leader">
          <h1 className="title">SCIENTIFIC TEAM</h1>
          <img src={member1} alt="Team Member: Alice Smith" />
          <h3>Team Member1</h3>
          <div>
            <p>Description</p>
          </div>
        </div>

        <Carousel responsive={responsive}>
          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member1</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member2</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member3</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member4</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member5</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member6</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member1} alt="Team Member: Alice Smith" />
            <h3>Team Member7</h3>
            <div>
              <p>Description</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
