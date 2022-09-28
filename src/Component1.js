import "./Component1.css";
import img1 from "./spt.jpg";
function Component1() {
  return (
    <div className="Component1">
          <ul>
            <li> <img src={img1} className="logo" /> {/*Spotify Logo*/}
            </li>
            <li>
              <a href="#home"> Log In</a>
            </li>
            <li>
              <a href="#news"> Sign Up</a>
            </li>
            <li>
              <a href="#contact" style={{borderRight:"2px solid white"}}>Download</a>
            </li>
            <li>
              <a href="#about">Support</a>
            </li>
            <li>
              <a href="#about">Premium</a>
            </li>
          </ul>

      <div className="middle"> {/*middle division*/}
        <div className="content"> {/*content in the middle division*/}
          <h2 className="matter">Get Premium free for 1 month</h2>
          <p className="para">Just Rs.119/month after.Debit and Credit Card Accepted.Cancel Anytime</p>
          <button className="btn">Get Started</button> &nbsp;&nbsp;
          <button className="btn">See Other Plans</button>
          <p className="footer"><a href="#" style={{color:"white"}}>Terms and conditions aplly.</a>1 month free not avaialble for user who have already apllied for the premium.</p>
        </div>
      </div>
      <div className="bottom" > {/*bottom division*/}
        <div className="content1"> {/* content in the bottom division*/}
        <h2 className="matter1">Introducing Premium Money</h2>
          <h5>RS 7 for 1 day</h5>
          <h5>RS 25 for 1 week</h5>
          <button className="btn1">Get Mini</button>
          <a href="#" className="footer">Terms and conditions apply.</a>
        </div>
      </div>
    </div>
  );
}

export default Component1;
