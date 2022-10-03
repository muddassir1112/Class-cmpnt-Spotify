import './Component3.css'
import img1 from './spotify logos/bollywood.jpg'
import img2 from './spotify logos/punjabi.jpg'
import img3 from './spotify logos/tollywood.jpg'
import img4 from './spotify logos/hothits.jpg'
import React, { Component } from 'react'

export default class Component3 extends Component {
  render() {
    return (
        <div className="Component3">
        <div className="body">
          <h1 style={{ textAlign: "center" }}>Connect with music culture</h1>
          <div className="row">
            <div>
              <img src={img1} />
              <h3>Bollywood Butter</h3>
              <p className="heading">The finest quality Bollywood <br></br></p>
              <p className="heading">music handpicked for you.</p>
            </div>
            <div>
              <img src={img2} />
              <h3>Punjabi 101</h3>
              <p className="heading">The ultimate Punjabi hits</p>
            </div>
            <div>
              <img src={img3} />
              <h3>Tollywood Pearls</h3>
              <p className="heading">The finest music from Telegu<br></br></p><p className='heading'>films.</p>
            </div>
            <div>
              <img src={img4} />
              <h3>Hot Hits India</h3>
              <p className="heading">50 hottest hits from across the globe.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
