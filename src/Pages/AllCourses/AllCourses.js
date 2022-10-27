import {
  faBullseye,
  faCloud,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllCourses.css";

const AllCourses = () => {
  //   const CourseData = useContext(courseContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://learning-platform-server-topaz.vercel.app/all-courses-details"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });

  // console.log(courses); //array of objects

  return (
    <div className="container all-courses text-center">
      <div className="all-course">
        <h1>Explore Resources</h1>
        <p className="lead fs-6">
          here is a little bit about our library of resources for your
          programming, and Computer Science studies
        </p>
        <br />
      </div>
      <div className="courses ">
        <div className="row">
          {courses?.map((course) => (
            <div className="col-md-3">
              <div className="cart">
                <div className="logo-image">
                  <img className="img-fluid" src={course.image} alt="" />
                  <h2 className="fs-5 mt-2">{course.name}</h2>
                  <p className="lead fs-5">{course.time}</p>
                  <small className="text-info">{course.access}</small> <br />
                  <Link to={`/details/${course.id}`}>
                    <Button className="btn btn-outline-info mt-2">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 bg-image bg-parallax overlay">
        <div className="container">
          <div className="row">
            <div className="p-5 col-md-6 text-start text-white">
              <h2>Grab a 50% offer</h2>
              <p className="lead fs-5">
                get our deal and have a chance to study for your desired subject
                abroad and get your dream job
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="section-hr" />
      <div className="row">
        <div className="section-header text-center">
          <h1 className="mt-5">
            Why Learn<span style={{ color: "#374050" }}>JAVASCRIPT ?</span>
          </h1>
          <p className="lead fs-5">
            because we have the best resources avaiable, not just to study but
            to have a mind refreshment
          </p>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faCloud} />
            <div className="feature-content text-start">
              <h4>Online Courses</h4>
              <p className="lead fs-5">
                Containing all the suggestions on books, videos, walkthroughs,
                animations, diagrams, podcasts, tips, tactics and extra
                resources, users can follow a study routine synchronized with
                their test date
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faBullseye} />
            <div className="feature-content text-start">
              <h4>Live Sessions</h4>
              <p className="lead fs-5">
                live walkthrough of official practice tests on both English and
                Math section and answer submission by a JavaScript poll + zoom
                based private tutoring system on need basis
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature d-flex justify-content-start">
            <FontAwesomeIcon className="feature-icon" icon={faGamepad} />
            <div className="feature-content text-start">
              <h4>Interactive Games</h4>
              <p className="lead fs-5">
                cognitive skills through exercises and games like "The Math
                Game", "The Dice", "The Simon Game", "Fruit Slice Game" as an
                excercise for muscle memory
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
