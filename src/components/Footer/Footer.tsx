import React from "react";
import "./Footer.css";
import logoBe from "./1608868_behance_icon.svg";
import logoUp from "./up-arrow-svgrepo-com.svg";
import logoDrible from "./669688_dribbble_designers_line-icon_social_web_icon.svg";
import logoIns from "./instagram-svgrepo-com.svg";
import logoFace from "./facebook-176-svgrepo-com.svg";
import logoIn from "./linkedin-svgrepo-com.svg";
import arrowRight from "./right-arrow-svgrepo-com.svg";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <img
          src="https://wantedfornothing.com/wp-content/uploads/2023/02/copyright.svg"
          alt=""
          className="Footer____img"
        />
        <ul className="Footer__list">
          <li className="Footer__list__item" id="tomato">
            INFO@WANTEDFORNOTHING.COM
          </li>
          <li className="Footer__list__item">CONTACT US</li>
          <li className="Footer__list__item" id="li">
            PRIVACY POLICY TERMS OF USE
          </li>
          <div className="Footer__list__div">
            <img src={logoDrible} alt="" className="Footer__list__div__img" />
            <img src={logoBe} alt="" className="Footer__list__div__img" />
            <img src={logoIns} alt="" className="Footer__list__div__img" />
            <img src={logoFace} alt="" className="Footer__list__div__img" />
            <img src={logoIn} alt="" className="Footer__list__div__img" />
          </div>
        </ul>
        <div className="Footer__inp">
          <p className="Footer__inp__p">STAY IN THE KNOW</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="Footer__inp__inp"
          />
          <img src={arrowRight} alt="" className="Footer__inp__svg" />
        </div>
        <img src={logoUp} alt="" className="Footer____img" />
      </div>
      <div className="FooterTime">
        <div className="FooterTime__item">
          <div className="FooterTime__el" id="FooterTime__el__f"></div>
          <p className="FooterTime__item__p">LOS ANGELES</p>
        </div>
        <div className="FooterTime__item">
          <div className="FooterTime__el" id="FooterTime__el__s"></div>
          <p className="FooterTime__item__p">NEW YOURK</p>
        </div>
        <div className="FooterTime__item">
          <div className="FooterTime__el" id="FooterTime__el__t"></div>
          <p className="FooterTime__item__p">BUDAPEST</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
