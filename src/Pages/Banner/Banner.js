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
              develop Your <br /> Mind And Skills 📈
            </h1>
            <p className="text-white text-center mt-3">
              Want To Get Professional Knowledge In Fast-Developing IT Sphere?.{" "}
              <br />
              <small className="text-warning">
                If You Are Just An Amataur Who’s Willing To Get Professional
                Knowledge Check What We Prepared For You!
              </small>
            </p>
            <Link to={"/about"}>
              <Button variant="outline-info text-white about-btn">
                who are we?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
