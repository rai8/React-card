import React from "react";

import "../card-style.css";

export default function Cards(props) {
  return (
    <div>
      <div className="card-text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="image1" className="card-img-top" />
          <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
              Just like a cowboy in a western, your “trigger” fingers start
              itching. You get a healthy buzz from the endless possibilities
              that await you – you’re inspired by that one amazing idea. Let’s
              face it – you know you’re going to drop any and all plans and dive
              into this project with every drop of energy at your disposal.
              You’re going to be up all day and all night. Sooner or later, you
              snap, drop everything, and start coding this exciting new idea
              into reality – one line at a time. Most of the time, this burst of
              motivation is a good thing. It catalyzes action like a drop of
              nitro inside your fuel tank. You feel hyper-focused and complete
              tasks at lightning speed.{" "}
            </p>
            <button className="btn btn-outline-success">
              Find more about them
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
