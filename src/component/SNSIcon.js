import React, { Component } from 'react';
import '../App.css';

export class SNSIcon extends Component {
  render() {
    return (
      <div className="SNSIcon">
        <div className="sns-section">
          <a className="sns-icon-style" href="http://www.linkedin.com/pub/yun-zhou/96/b97/960">
          <div className="sns-icon-bg"></div>
            <img className="sns-icon" src="svg/linkedin.svg"/>
          </a>
          <a className="sns-icon-style" href="https://dribbble.com/yunyunyun">
          <div className="sns-icon-bg"></div>
            <img className="sns-icon" src="svg/dribbble.svg"/>
          </a>
          <a className="sns-icon-style" href="https://medium.com/@zhouyunsunnyday">
          <div className="sns-icon-bg"></div>
          <img className="sns-icon" src="svg/medium.svg"/>
          </a>
          <a className="sns-icon-style" href="https://www.instagram.com/veilofignorance/">
          <div className="sns-icon-bg"></div>
          <img className="sns-icon" src="svg/ins.svg"/>
          </a>
        </div>
      </div>
    );
  }
}
