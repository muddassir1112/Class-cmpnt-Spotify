import "./Component6.css";
import img1 from "./spt.jpg";
import img2 from "./spotify logos/fb-twitter-instagram.jpg";
import img3 from "./spotify logos/download.png";
import React, { Component } from "react";

export default class Component6 extends Component {
  render() {
    return (
      <div className="container2">
        <div className="row2">
          <div className="column1">
            <div>
              <img src={img1} style={{ width: "120px" }} />
            </div>
          </div>
          <div className="column2">
            <h5>Company</h5>
            <p className="para2">About</p>
            <p className="para2">Jobs</p>
            <p className="para2">For the Records</p>
          </div>
          <div className="column3">
            <h5>Communities</h5>
            <p className="para2">For Artists</p>
            <p className="para2">Developers</p>
            <p className="para2">Advertising</p>
            <p className="para2">Investors</p>
            <p className="para2">Vendors</p>
          </div>
          <div className="column4">
            <h5>Useful Links</h5>
            <a href="#" className="anchor1">
              Support
            </a>
            <br></br>
            <br></br>
            <a href="#" className="anchor1">
              Web PLayer
            </a>
            <br></br>
            <br></br>
            <a href="#" className="anchor1">
              Free Mobile App
            </a>
          </div>
          <div className="column5">
            <a href="#">
              <img
                src={img2}
                style={{ width: "80px", backgroundColor: "black" }}
              />
            </a>
          </div>
        </div>
        <div className="row3">
          <div className="footer2">
            <a href="#" className="anchor">
              Legal{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              Privacy Center{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              Privacy Policy{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              Cookies{" "}
            </a>{" "}
            &nbsp; &nbsp;
            <a href="#" className="anchor">
              About Ads{" "}
            </a>
          </div>
          <div className="footer3">
            <span style={{ fontSize: "13px" }}>
              <img src={img3} style={{ width: "20px", fontWeight: "normal" }} />
              India(English)Ⓒ2022 Spotify AB
            </span>
          </div>
        </div>
      </div>
    );
  }
}
