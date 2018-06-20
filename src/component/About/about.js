import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/about.css';

export class About extends Component {
  componentDidMount() {
    window.scroll({top:0});
  }
  render() {
    return (
      <div className="work">
      <div className="main">
        <div className="section-sub-title"> A designer. </div>          
            <p>Believe in relationships with people.</p>
            <p>Think through writing and sketching.</p>
            <p>Learn by making stuff.</p>
            <p>Currently located in Bay Area, CA.</p>

          <div className="Looking-for-full-tim"> Looking for full-time UX/UI Design opportunities!</div>

        
        <div className="project-img-div-long">
            <img
            src='avata-3@2x.png'
          />
          </div>
        <div className="section-sub-title"> Fun facts</div>

            <p>I have been in chorus for 6 years, and I am starting my own.</p>
            <p>I have played through 15 puzzle games. 😃 </p>
            <p>I got my first luxury ambulance experience to the hospital the day before my National Higher Education Entrance Examination (similar to SAT test, but once a year). 😎</p>

     
          <div className="section-sub-title-about">I don’t drink coffee that much, but let’s do icecream & bubble tea! ☕ 👉 🍦 🥤
        </div>
        <div className="about-footer-info">
          <div className="about-footer-info-email">
            <div className="about-footer-info-name-text">
              <img
                className="about-footer-info-icon"
                src='image/desktop/envelope-copy-2@2x.png'
              />
              <span>EMAIL</span>
            </div>
            <div className="about-footer-info-content-text">zhouyun444-[at]-gmail-[dot]-com</div>
          </div>
          <div className="about-footer-info-location">
            <div className="about-footer-info-name-text">
              <img
                className="about-footer-info-icon"
                src='image/desktop/call-answer@2x.png'
              />
              <span>MOBILE</span>

            </div>
            <div className="about-footer-info-content-text">Request via email</div>
          </div>
          <div className="about-footer-info">
            <div className="about-footer-info-name-text">
              <img
                className="about-footer-info-icon"
                src='image/desktop/maps-and-flags@2x.png'
              />
              <span>LOCATION</span>

            </div>
            <div className="about-footer-info-content-text">San Francisco/Bay area, CA</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
