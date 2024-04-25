import React, { useState, useEffect } from "react";
import axios from "axios";
import "./team-presentation.css";
import teamPhoto from "../../assets/team-photo.jpg";
import Header from "../header/header";
import Footer from "../footer/footer";

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/allTeam");
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  return (
    <section id="container">
      <Header />
      <div id="main">
        <div className="team-photo">
          <div className="overlay">
            <h1 className="title">SCIENTIFIC TEAM</h1>
          </div>
          <img src={teamPhoto} alt="Team Photo" />
        </div>

        <div className="members member">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <img
                src={`data:image/jpeg;base64,${member.photo}`}
                alt={`Team Member: ${member.name}`}
              />
              <h3>
                <span className="title-prefix"></span> {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Team;
