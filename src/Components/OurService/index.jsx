import React from "react";
import "./style.css";
import { GroupDes } from "./GroupDes";

export const OurService = () => {
  let description=[
    {num:"01", ui:"UI/UX DESIGN", des:"Through the of our experience, we have also learned that while each channel has its own set of advantage"},
    {num:"02", ui:"Development", des:"Through the of our experience, we have also learned that while each channel has its own set of advantage"},
    {num:"03", ui:"SEO & SMM", des:"Through the of our experience, we have also learned that while each channel has its own set of advantage"},
    {num:"04", ui:"Marketing", des:"Through the of our experience, we have also learned that while each channel has its own set of advantage"},
    {num:"05", ui:"Digital Strategy", des:"Through the of our experience, we have also learned that while each channel has its own set of advantage"},
    {num:"06", ui:"UI/UX DESIGN", des:"Through the of our experience, we have also learned that while each channel has its own set of advantage"}
  ]
  return (
    <section className="our-service-container">
      <div className="services">
        <div className="services-heading">
          <div className="texts mb-20">
            <span className="span1 col-white">OUR SERVICES</span>
            <span className="span2 fs-5 col-white">Why we are</span>
            <span className="span3 fs-5">Different</span>
          </div>
          <div className="mg">
          <button className="btn">All Services</button>
          </div>
        </div>
        <div className="services-lists">
          {
            description.map((val)=>{
              return <GroupDes num={val.num} ui={val.ui} desc={val.des}/>
            })
          }
          
        </div>
      </div>
    </section>
  );
};
