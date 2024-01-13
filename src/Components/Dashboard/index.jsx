import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import "./style.css";

export const Dashboard = () => {
  return (
    <section className="container">
      <div className="headings">
        <span className="right_gradient">Digital</span>
        <span>Business</span>
        <span className="left_gradient">Ideas</span>
      </div>
      <div className="para">
        <span>
          With every single one of our clients, we bring forth a deep passion
          for{" "}
        </span>
        <span>creative problem solving — which is what we deliver.</span>
      </div>
      <div className="btn-container">
        <button className="btn">GET START NOW</button>
        <FontAwesomeIcon className="chat" icon={faComment} style={{ color: 'blue !important'}}/>
        <p className="join-com">JOIN OUR COMMUNITY</p>
      </div>
    </section>
  );
};
