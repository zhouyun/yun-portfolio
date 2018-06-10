import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/about.css';

export class About extends Component {
  render() {
    return (
      <div className="about">
      	<div className=""> A designer.</div>
      	<div className=""> 
	      	Believe in relationships with people. 
					Think through writing and sketching. 
					Learn by making stuff. 
					Currently located in Bay Area, CA. 
				</div>
      	<div className=""> Looking for full-time UX/UI Design opportunities!</div>
      	<div className=""> Fun facts</div>
      	<div className=""> 
      		I have been in chorus for 6 years, and I am starting my own. 
					I have played through 15 puzzle games. 😃
					I got my first luxury ambulance experience to the hospital the day before my National Higher Education Entrance Examination (similar to SAT test, but once a year).
      	</div>
      	<div className=""> I don’t drink coffee that much, but let’s do bubble tea & icecream!</div>
      	<div className=""> 
      		<div>
      			<div>
      				<span>EMAIL</span>
      				
      			</div>
      			<div>zhouyun444-[at]-gmail-[dot]-com</div>
      		</div>
      		<div>
      			<div>
      				<span>MOBILE</span>
      				
      			</div>
      			<div>Request via email</div>
      		</div>
      		<div>
      			<div>
      				<span>LOCATION</span>
      				
      			</div>
      			<div>San Francisco/Bay area, CA</div>
      		</div>
      	</div>
      </div>
    );
  }
}
