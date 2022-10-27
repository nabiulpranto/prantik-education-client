import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import MenuBar from "../Shared/MenuBar/MenuBar";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://learning-platform-server-topaz.vercel.app/all-courses-details"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });
  return (
    <div style={{ backgroundColor: "gray" }}>
      <MenuBar></MenuBar>
      <div className="row text-white text-center">
        {courses?.map((course) => (
          <div className="col-md-6 g-4 shadow-sm">
            <div className="m-5">
              <div className="logo-image">
                <img className="w-25 img-thumbnail" src={course.image} alt="" />
                <h2 className="fs-5 mt-4">Website: {course.name}</h2>
                <p className="lead fs-5 pt-2">Moto: {course.its_title}</p>
                <p className="lead fs-5">Total Time: {course.time}</p>
                <p className="lead fs-5">Price: {course.price} USD</p>
                <small className="text-info">{course.access}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
