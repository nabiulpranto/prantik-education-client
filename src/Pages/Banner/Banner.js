import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuBar from "../Shared/MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row banner d-flex align-items-center justify-content-center">
          <MenuBar />
          <div className="col-6">
            <h1 className="title">
              Learn And Fullfill Your Dream
            </h1>

            <Link to={"/about"}>
              <Button variant="outline-info text-white about-btn">
                Join with Us?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
