import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faMapMarkedAlt,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-container text-start">
                <h1>LearnJAVASCRIPT</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    ping us for any queries you have in our social media. <br />
                    we would love to hear from you
                  </small>
                </p>

                <p className="mt-5">
                  <small>
                    <FontAwesomeIcon icon={faCopyright} /> Nizam Uddin Shejan
                    2022 || Programming Hero Assignment 10
                  </small>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="right-footer-container">
                <h3>shoot us an email</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+88 01629****69</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      Silimpur Moddho Para, Ward No 14
                      <br /> Bogra Sadar, Bogra-5800
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
