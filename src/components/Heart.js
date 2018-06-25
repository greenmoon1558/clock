import React, { Component } from 'react'
import '../assets/css/heart.css'

class Heart extends Component {
  render() {
    
      return (
      <div className='heart'>
        <p>Made with <span className="heart__css"></span> by <a className='heart__author' href='https://github.com/greenmoon1558/clock.git' target="_blank">Greenmoon</a></p>
      </div>
    )
  };

};

export default Heart;

