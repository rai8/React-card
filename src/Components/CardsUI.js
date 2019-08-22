import React from "react";
import img1 from "../images/img1.jpeg";

export default function Cards(props) {
  return (
    <div>
      <div className="card-text-center">
        <div className="overflow">
          <img src={img1} alt="image1" className="card-img-top" />
          <div className="card-body text-dark">
            <h4 className="card-title">Software Programmer</h4>
            <p className="card-text text-secondary">lorem201 </p>
            <button className="btn btn-outline-success">
              Find more about them
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
