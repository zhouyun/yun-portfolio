import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';
import {Header, Footer, Navbar} from '../../component';

export class Palmdrive extends Component {
  render() {
		var previous_page = "New Year Event Sprint";
    return (
    	<div>
        <Sidebar
          title={'Palmdrive Website'}
          items={[
            {
              text: "Background",
              anchor: "#background",
            },
            {
              text: "Deliver scalable information architecture",
              anchor: "#challenge",
            },
            {
              text: "Fully responsive design and more",
              anchor: "#logic-comes",
            },
            {
              text: "Design for storytelling",
              anchor: "#design-comes",
            },
            {
              text: "Design for what really matters",
              anchor: "#into-the-details",
            },
            {
              text: "Display with hierarchy",
              anchor: "#always-fun",
            },
            {
              text: "Repetitive element makes it consistent",
              anchor: "#hover-is",
            }
          ]}
        />
	      <div className="work palmdrive">
		      	<div className="main">
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
              <div className="project-img-div-long">
                <img
                className="project-img-long"
                src='/palmdrive/palmdrive-web-display_2018-05-31/palmdrive-web-display.png'
              />
              </div>
		      		<p>
		      			Some of them are displayed below. They show the design strategy I came up with when I did the work.
		      		</p>
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
              <div className="project-img-div-long">
                <img
                className="project-img-long"
                src='/palmdrive/bitmap_2018-05-31/bitmap.png'
              />
              </div>
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
				<div className="pager-holder">
					<div className="previous-page">
						<Link to="/work/newyear">
							<div className="project-index">Previous Project</div>
              <div className="project-arrow-reverse"/>
              <div className="project-name">{previous_page}</div>
						</Link>
					</div>
					<div className="next-page">
						<Link to="/work/transaction">
							<div className="project-index">Next Project</div>
							<div className="project-name">Transaction Management Design</div>
              <div className="project-arrow"/>
						</Link>
					</div>
				</div>
	    </div>
    );
  }
}
