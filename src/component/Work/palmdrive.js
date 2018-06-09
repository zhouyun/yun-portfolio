import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';

export class Palmdrive extends Component {
	constructor(props) {
	  super(props);
	  this.handleScroll = this.handleScroll.bind(this);
	  // this.setState({activeTab: tab});
	}

	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(event) {
	  console.log('the scroll things', event)
	  const numSec = document.getElementsByClassName("content-block").length;
	  console.log(numSec);
	};
  render() {
    return (
      <div className="work palmdrive">
      	<div className="side-bar">
		      	<Sidebar>
		      		<div>
		      			Palmdrive Website
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">01</div>
		      			<Link className="side-bar-link" to="#background">Background</Link>
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">02</div>
		      			<Link className="side-bar-link" to="#challenge">Deliver scalable information architecture</Link>
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">03</div>
		      			<Link className="side-bar-link" to="#logic-comes">Fully responsive design and more</Link>
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">04</div>
		      			<Link className="side-bar-link" to="#design-comes">Design for storytelling</Link>
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">05</div>
		      			<Link className="side-bar-link" to="#into-the-details">Design for what really matters</Link>
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">06</div>
		      			<Link className="side-bar-link" to="#always-fun">Display with hierarchy</Link>
		      		</div>
		      		<div className="side-bar-row">
		      			<div className="side-bar-index">07</div>
		      			<Link className="side-bar-link" to="#hover-is">Repetitive element makes it consistent</Link>
		      		</div>
		      	</Sidebar>
		      </div>
	      	<div className="new-year-sprint">
	      		<h3>
	      			Palmdrive Website
	      		</h3>
	      		<span className="december-2016">
	      			April 2016 - present
	      		</span>
	      		<section className="content-block" id={'background'}>
		          <div className="section-title"> Background </div>
		        </section>
	      		<p>
	      			As more and more students know who we are and what we do through our website, properly presenting information and the timely updating become the goal of maintaining the website. 
	      		</p>
	      		
		        <div className="section-sub-title"> My Role </div>
	      		<p>
	      			I have maintained the website since I joined the Palmdrive ini April, 2016. The website had some ground work before I was in charge. To keep up with our expanding services, I redesigned the old pages and created new pages from time to time, including information architect maintain, copy editing, website design, project management and cross-teams coordinating. 
	      		</p>
	      		<p>
	      			Some of them are displayed below. They show the design strategy I came up with when I did the work.
	      		</p>
	          <div className="project-img-div-long">
	      			<img
	      			className="project-img-long"
		          src='/image/desktop/newyear-display-1.png'
		        />
		        </div>
	      		<section className="content-block" id={'challenge'}>
		          <div className="section-title"> Deliver scalable information architecture </div>
		        </section>
	      		<p>
	      			As our services are growing, to present information properly on the website can be challenging. So I divided the challenge into two parts —
	      		</p>
	      		<p>
	      			1. How to group the information logically and clearly
	      		</p>
	      		<p>     		
					2. How to present information accurately and logically on each page
						</p>
	      		<p>
					To achieve that, I worked on understanding the business model by joining the sales and service training, as well as mentoring students myself. I was even honored the best student because of actively participation and high score in the test :)
						</p>
	      		<p>
						All the efforts lead me to create a clear and scalable information architecture as the following.
						</p>
						<section className="content-block" id={'logic-comes'}>
		          <div className="section-title"> Fully responsive design and more </div>
		        </section>
		        <p>
		        	As over half of the website visits are from mobile, the responsiveness of the website is important and necessary, especially for the Graduate service page which directly leads to our sales. All visitors could access our service flow easily on any devices. I also created a more detailed png version for the sales team for a consistent user experience.
 
		        </p>
		       
						<section className="content-block" id={'design-comes'}>
		        	<div className="section-title">Design for storytelling</div>
		        </section>
		        <p>
		        	When I started to work with Tina, the Head of High School Application Department, on the High School service page, she had no idea what should be displayed on the page. After deep discussion with Tina about the high school service, I extracted the web content from the service brochure and rephrased the copy. 
		        </p>
		        <p>
		        	The content focused on 
		        </p>
		      
						<ol>
							<li>
							what High School applicants care about the most — our strength
							</li>
							<li>
							what we are good at dealing with — our service
							</li>
							<li>
							why we are good at dealing with — our team and cooperative partners
							</li>
						</ol>
						<p>
						With Tina’s fully trust and collaboration, the page design went smoothly and was delivered in two weeks.
						</p>
		        <section className="content-block" id={'into-the-details'}>
		        	<div className="section-title">Design for what really matters</div>
		        </section>
		        <p>
		        	As the google analytics showed, the Graduate Offer Showcase page had over 30% bounce rate which was far more than what our service team expect. To solve the problem, I redesigned the page with focusing on displaying our values and sharings.

		        </p>
		        <p>
		        The results are prominent, the Monthly Bounce Rate on the page decreased by 75% and the pageviews share increased by 59%.
						</p>
		        <section className="content-block" id={'always-fun'}>
		        	<div className="section-title">Display with hierarchy</div>
		        </section>
		        <p>
		        	Analysing from the discussion with the Mentor Team, the problem of the previous mentor displaying page was how to highlight our mentors.
		        </p>
		        <p>
		        In the redesign, mentors with strong background are displayed first. Users can filter mentors with majors in the second section.
						</p>
						<section className="content-block" id={'hover-is'}>
		        	<div className="section-title">Repetitive element makes it consistent</div>
		        </section>
		        <p>
		        	For all the pages that I designed, I used repetitive elements to make the website as a whole.
		        </p>
		       
	      	</div>
      </div>
    );
  }
}