import "./Component4.css";
import img1 from "./spotify logos/paymnt.png";
import React, { Component } from "react";

export default class Component4 extends Component {
  render() {
    return (
      <div>
        <div className="header1">
          <h2>Pick your Premium</h2>
          <h4>
            Listen without limits on your phone, speaker and other devices.
          </h4>
          <img src={img1} />
        </div>
        <div className="row1">
          <div className="col1">
            <div className="col1-item">
                <div className="upper">
              <button className="btn2">One time-plans available</button>
              <h2>Mini</h2>
              <p>From Rs.7/day</p>
              <p>1 account</p>
              </div>
              <br></br><br></br> &nbsp;
              <hr></hr>
              <ul className="ul2">
                <li className="li2">Add free music listening</li>
                <li className="li2">Group Session</li>
                <li className="li2">Download 30 songs on 1 mobile device</li>
              </ul>
              
              <br></br><br></br><br></br><br></br>
              <button className="btn4">View Plans</button>
              <p className="para1"><a href="#" style={{color:"black"}}>Terms and Conditions apply.</a></p>
            </div>
          </div>
          
          <div className="col2">
            <div className="col2-item">
            <div className="upper">
              <button className="btn3">1 month free</button> <br></br>
              <br></br>
              <button className="btn2">One time-plans available</button>
              <h2>Individual</h2>
              <p>Rs.119/month after offer period </p>
              <p>1 account</p>
              </div>
              <hr></hr>
              <ul className="ul2">
                <li className="li2">Add free music listening</li>
                <li className="li2">Group Session</li>
                <li className="li2">Download 10K songs/devices on 5 devices</li>
              </ul>
              
              <br></br><br></br><br></br><br></br> 
              <button className="btn4">View Plans</button>
              <p className="para1"><a href="#" style={{color:"black"}}>Terms and Conditions apply.</a>1 month free not available for users who have already tried premium.</p>
            </div>
          </div>
          <div className="col3">
            <div className="col3-item">
            <div className="upper">
              <button className="btn3">1 month free</button>
              <br></br>
              <br></br>
              <button className="btn2">One time-plans available</button>
              <h2>Duo</h2>
              <p>Rs.149/month after offer period </p>
              <p>2 account</p>
              </div>
              <hr></hr>
              <ul className="ul2">
              <li className="li2">For couples who live together</li>
                <li className="li2">Add free music listening</li>
                <li className="li2">Group Session</li>
                <li className="li2">Download 10K songs/devices on 5 devices per account</li>
              </ul>
                <br></br><br></br><br></br>
              <button className="btn4">View Plans</button>
              <p className="para1"><a href="#" style={{color:"black"}}>Terms and Conditions apply.</a>1 month free not available for users who have already tried premium.</p>
            </div>
          </div>
          <div className="col4">
            <div className="col4-item">
            <div className="upper">
              <button className="btn3">1 month free</button>
              <br></br>
              <br></br>
              <button className="btn2">One time-plans available</button>
              <h2>Family</h2>
              <p>Rs.179/month after offer period </p>
              <p>Upto 6 account</p>
              </div>
              <hr></hr>
              <ul className="ul2">
              <li className="li2">For family who live together</li>
              <li className="li2">Block explicit music</li>
                <li className="li2">Add free music listening</li>
                <li className="li2">Group Session</li>
                <li className="li2">Download 10K songs/devices on 5 mobile devices</li>
              </ul>
              <br></br><br></br>
              <button className="btn4">View Plans</button>
              <p className="para1"><a href="#" style={{color:"black"}}>Terms and Conditions apply.</a>1 month free not available for users who have already tried premium.</p>
            </div>
          </div>
          
        </div>
        <div className="discount">
            <span><b>Special discount for eligible students in university</b></span> &nbsp;
            <button className="learnmore">Learn More</button>
          </div>
      </div>
    );
  }
}
