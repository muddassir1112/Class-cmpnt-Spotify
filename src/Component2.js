import "./Component2.css";
import img1 from "./spotify logos/add.png";
import img2 from "./spotify logos/music.png";
import img3 from "./spotify logos/play.png";
import img4 from "./spotify logos/pay.png";
import React, { Component } from "react";

export default class Component2 extends Component {
  render() {
    return (
      <div className="Component2">
        <div className="body">
          <h2 style={{ textAlign: "center" }}>The Power Of Premium</h2>
          <div className="row">
            <div className="col1">
              <img src={img1} />
              <h3>Add free music listening</h3>
              <h6 className="heading">Enjoy uniterrupted music</h6>
            </div>
            <div className="col2">
              <img src={img2} />
              <h3>Offline playback</h3>
              <h6 className="heading">Save your data by listening offline</h6>
            </div>
            <div className="col3">
              <img src={img3} />
              <h3>Play everywhere</h3>
              <h6 className="heading">Listen on your speakers,TV and other favourite devices.</h6>
            </div>
            <div className="col4">
              <img src={img4} />
              <h3>Pay your way</h3>
              <h6 className="heading">Prepay with Paytm,UPI and more.</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
