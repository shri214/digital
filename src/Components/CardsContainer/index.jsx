import React from "react";

import "./style.css";
import { SingleCard } from "./SingleCard";
import { Counters } from "./Counters";

export const CardsContainer = () => {
  return (
    <section className="containers">
      <div className="card-container">
        <div className="texts">
          <span className="span1">WHAT WE OFFER</span>
          <span className="span2">Giving Your Business</span>
          <span className="span3">Great Solutions</span>
        </div>
        <div className="cards-box">
          <SingleCard
            text1={"Design & Ui/Ux"}
            text2={"Experience"}
            svg={1}
            text3={" UI/UX Design, Motion, Illustration, Branding, Photography"}
          />
          <SingleCard
            text1={"Development &"}
            text2={"Coding"}
            svg={2}
            text3={"WordPress, Shopify, Webflow, React, HTML, Mobile Solutions"}
          />
          <SingleCard
            text1={"Marketing &"}
            text2={"SEO Analytic"}
            svg={3}
            text3={`Social Solutions, Marketing & Targeting, SEO & SMM`}
          />
        </div>
      </div>
      <div className="counter">
        <Counters icon={'>'} number={35} texts={'Average Growth'}/>
        <Counters number={856} texts={'Customer Satisfaction'}/>
        <Counters icon={'>'} number={10} texts={'Year of Experience'}/>
        <Counters number={67} texts={'Skilled Professionals'}/>
      </div>
    </section>
  );
};

