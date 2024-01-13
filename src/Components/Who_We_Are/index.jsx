import React from "react";
import logo_img from "../../assets/h-2.png";
import c11img from "../../assets/clients-1-1.png";
import c12img from "../../assets/clients-1-2.png";
import c21img from "../../assets/clients-2-1.png";
import c22img from "../../assets/clients-2-2.png";
import c31img from "../../assets/clients-3-1.png";
import c32img from "../../assets/clients-3-2.png";
import c41img from "../../assets/clients-4-1.png";
import c42img from "../../assets/clients-4-2.png";
import c51img from "../../assets/clients-5-1.png";
import c52img from "../../assets/clients-5-2.png";
import c61img from "../../assets/clients-6-1.png";
import c62img from "../../assets/clients-6-2.png";

import "./style.css";
export const WhoWeAre = () => {
  return (
    <>
      <section className="pd-98">
        <div className="WWA-container">
          <div className="logo-images">
            <img src={logo_img} alt="logo-img" />
          </div>
          <div className="wwa-info">
            <div className="texts">
              <span className="span1">WHO WE ARE</span>
              <span className="span2">Boost Business Up</span>
              <span className="span3">to High Level</span>
            </div>
            <div className="wwa-para">
              <p>
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service.
              </p>
              <p>
                Through the years of our experience, we’ve also learned that
                while each channel has its own set of advantages, they all work
                best when strategically paired with other channels.
              </p>
              <button className="btn">About Company</button>
            </div>
          </div>
        </div>
      </section>
      <section className="company-logo">
        <div className="company-logo-images">
          <span className="company-logo-span">
            <div className="inner-box">
              <img className="logoImg1 c11" src={c11img} alt="c11img" />
              <img src={c12img} className="logoImg2 c22" alt="c22img" />
            </div>
          </span>
          <span className="company-logo-span">
          <div className="inner-box">
            <img className="logoImg1" src={c21img} alt="c11img" />
            <img src={c22img} className="logoImg2" alt="c22img" />
            </div>
          </span>
          <span className="company-logo-span">
          <div className="inner-box">
            <img className="logoImg1" src={c31img} alt="c11img" />
            <img src={c32img} className="logoImg2" alt="c22img" />
            </div>
          </span>
          <span className="company-logo-span">
          <div className="inner-box">
            <img className="logoImg1" src={c41img} alt="c11img" />
            <img src={c42img} className="logoImg2" alt="c22img" />
            </div>
          </span>
          <span className="company-logo-span">
          <div className="inner-box">
            <img className="logoImg1" src={c51img} alt="c11img" />
            <img src={c52img} className="logoImg2" alt="c22img" />
            </div>
          </span>
          <span className="company-logo-span">
          <div className="inner-box">
            <img className="logoImg1" src={c61img} alt="c11img" />
            <img src={c62img} className="logoImg2" alt="c22img" />
            </div>
          </span>
        </div>
      </section>
    </>
  );
};
