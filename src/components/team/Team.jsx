import React from "react";
import { data } from "./Data";
import "./team.css";

const Team = () => {
  return (
    <section className="team container">
      <div className="section-text">
        <h2 className="section_title">Team</h2>
        <span className="section_subtitle">
          Our team is made up of talented and dedicated professionals who are
          passionate about their work.
        </span>
      </div>

      <div className="team-grid">
        {data.map((i) => {
          return (
            <div className="team-card">
              <div className="member-img">
                <img src={i.img} alt={i.name} />
              </div>
              <div className="member-info">
                <p className="member-name">{i.name}</p>
                <span className="member-role">{i.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
