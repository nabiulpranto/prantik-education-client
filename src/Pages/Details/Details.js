import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../Shared/Footer/Footer";
import MenuBar from "../Shared/MenuBar/MenuBar";
// import Footer from "../Footer/Footer";
// import MenuBar from "../MenuBar/MenuBar";
import "./Details.css";

const Details = (props) => {
  const { courseId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://learning-platform-server-topaz.vercel.app/all-courses-details`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data[courseId]));
  }, []);

  return (
    <div className="details-container">
      <MenuBar></MenuBar>
      <div className="container mt-5 border-top pt-5">
        <div className="mb-5 row d-flex details-teams align-items-start justify-content-center text-white">
          <div className="col-md-6 text-start border-end">
            <img
              src={details.image}
              alt=""
              className="mt-2 img-fluid img-thumbnail"
            />
            <br />
            <h1 className="mt-3 mb-3">{details.name}</h1>
            <p className="lead"> Price: {details.price}$</p>
            <p className="lead"> Course Length: {details.time}</p>
          </div>
          <div className="col-md-6 text-start">
            <h2 className="border-bottom pb-3">{details.its_title}</h2>
            <p className="lead">{details.its_paragraph}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
