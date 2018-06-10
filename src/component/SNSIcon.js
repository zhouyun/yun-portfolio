import React, { Component } from 'react';
import '../App.css';

export class SNSIcon extends Component {
  render() {
    return (
      <div className="SNSIcon">
        <div className="sns-section">
          <img className="sns-icon" src="svg/linkedin.svg" href=""/>
          <img className="sns-icon" src="svg/dribbble.svg" href=""/>
          <img className="sns-icon" src="svg/medium.svg" href=""/>
          <img className="sns-icon" src="svg/ins.svg" href=""/>
        </div>
      </div>
    );
  }
}
