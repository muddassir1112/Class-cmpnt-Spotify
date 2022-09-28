import './Component5.css'
import React, { Component } from 'react'

export default class Component5 extends Component {
  render() {
    
    return (
      <div>
    
<div className='question'>
    <h2 style={{textAlign:"center"}}>Question?</h2>
    <p style={{textAlign:"center" ,paddingBottom:"4%"}}>We've got answers</p>
    <span>What is Spotify and Spotify Premium?</span>
    <button className='answers' onClick={this.ans} value="first">▼</button> 
    <p id ='demo'></p> <hr></hr>
    <span>How do I cancel?</span>
    <button className='answers' onClick={this.ans} value="second">▼</button>
    <p id ='demo'></p> <hr></hr>
    <span>How does the Duo and Family Plan work?</span>
    <button className='answers' onClick={this.ans} value="third">▼</button>
    <p id ='demo'></p><hr></hr>
    <span>How many devices can I listen to?</span>
    <button className='answers' onClick={this.ans} value="fourth">▼</button>
    <p id ='demo'></p><hr></hr>
    <span>How does the student plan work?</span>
    <button className='answers'onClick={this.ans} value="fifth">▼</button>
    <p id ='demo'></p><hr></hr>
    
    
</div>
      </div>
    )
  }
  ans=()=>{
    // var ele;
    // const msg = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    // // document.getElementById('demo').innerHTML = msg ;
    // if( ele == "first")
    // {
    //     document.getElementById('demo').innerHTML = msg
    // }
  }
}
