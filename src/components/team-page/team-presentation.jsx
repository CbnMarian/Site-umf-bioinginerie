import "./team-presentation.css";
import member1 from "../../assets/Verestiuc.png";
import member2 from "../../assets/blank.png";
import "react-multi-carousel/lib/styles.css";

const Team = () => {
  return (
    <section id="container">
      <div id="main">
        <div className="team-leader">
          <h1 className="title">SCIENTIFIC TEAM</h1>
          <div className="team-member">
            <img src={member1} alt="Team Member: Liliana Verestiuc" />
            <h3>
              <span className="title-prefix">Prof. dr.</span> Liliana Verestiuc
            </h3>
            <p>
              <a href="mailto:liliana.verestiuc@umfiasi.ro">
                liliana.verestiuc@umfiasi.ro
              </a>
            </p>
          </div>
        </div>

        <div className="members member">
          <div className="team-member">
            <img src={member2} alt="Team Member: Alice Smith" />
            <h3>Vera Balan</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member2} alt="Team Member: Alice Smith" />
            <h3>Maria Butnaru</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member2} alt="Team Member: Alice Smith" />
            <h3>Isabella Cobzariu</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member2} alt="Team Member: Alice Smith" />
            <h3>Florina Daniela Ivan</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member2} alt="Team Member: Alice Smith" />
            <h3>Andreea Luca</h3>
            <div>
              <p>Description</p>
            </div>
          </div>

          <div className="team-member">
            <img src={member2} alt="Team Member: Alice Smith" />
            <h3>Vlad Ursachi</h3>
            <div>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
