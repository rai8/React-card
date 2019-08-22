import React, { Component } from "react";
import CardsUI from "./CardsUI";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
export default class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <CardsUI imgsrc={img1} title="Front-end Developer" />
          </div>
          <div className="col-md-4">
            {" "}
            <CardsUI
              imgsrc={img2}
              style={imgStyle.height}
              title="Back-end Developer"
            />
          </div>
          <div className="col-md-4">
            {" "}
            <CardsUI imgsrc={img3} title="Full stack Developer" />
          </div>
        </div>
      </div>
    );
  }
}
const imgStyle = {
  height: 150
};
