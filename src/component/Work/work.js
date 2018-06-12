import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';
import '../../App.css';

import classnames from 'classnames';
import {Header, Footer, Navbar} from '../../component';

export class Work extends Component {
  render() {
		var previous_page = "< Previous page";
    return (
    	<div>
	      <div className="work">
					<Sidebar
						title={'New Year Event Sprint'}
						items={[
							{
								text: "Background",
								anchor: "#background",
							},
							{
								text: "Digital rocks",
								anchor: "#digital-rocks",
							},
							{
								text: "The design shapes for the content",
								anchor: "#design-shape",
							},
							{
								text: "They had a great time",
								anchor: "#great-time",
							},
							{
								text: "To be continued",
								anchor: "#to-be-continue",
							},
							{
								text: "Design Team X Marketing Team",
								anchor: "#design-team-x",
							},
						]}
					/>
	      	<div className="main">
	      		<h3>
	      			New Year Event Sprint
	      		</h3>
	      		<span className="december-2016">
	      			December 2016
	      		</span>
	      		<div className="content-block" id={'background'}>
		          <div className="section-title"> Background </div>
		        </div>
	      		<p>
	      			Different from the traditional international education agency who make profit by providing studying abroad related information, Palmdrive shares it for free. <span className="highlight">With the belief of helping more Chinese students study abroad, Palmdrive operates a platform for students who want to </span>study abroad with who studied abroad or is studying abroad.
	      		</p>
	      		<p>
							In order to be known by the market, branding events were launched fast and massively. In this case, events for different marketing preferences were developed.
	      		</p>
	      		<p>
							New Year Event was the first city event to offer an opportunity for Palmdrive to communicate with college students and add their belief to our brand.
	      		</p>
		        <div className="section-sub-title"> My Role </div>
	      		<p>
	      			I collaborated with Su, the event executor, since the start of the project. I delivered digital posters, website, and invitation email for different platforms in 2 weeks.
	      		</p>
	          <div className="project-img-div-long">
	      			<img
	      			className="project-img-long"
		          src='/image/desktop/newyear-display-1.png'
		        />
		        </div>
	      		<div className="content-block" id={'digital-rocks'}>
		          <div className="section-title" id="digital-rocks"> Digital rocks </div>
		        </div>
	      		<p>
	      		With limit budget and time, we decided to cut off the printing part and promote the event only on digital platforms which would reduce the budget by 30% and preparation time by 50%.
	      		</p>
	      		<p>
						Moreover, it was easy for our targets to repost, @ their friends and interact with us on social media platforms, like Wechat.
						</p>
	      		<p>
						As the promotion would happen only on digital, I was so excited to start my design with no worries about the CMYK and print quality. First time I could use some real bold colors!
						</p>
	      		<p>
						To be more festive, colorful confetti was added and I finished the key visual in 4 hours.
						</p>
						<div className="project-img-div-long">
	      			<img
		          src='/new year/artboard-16_2018-06-08/artboard-16.png'
		        />
		        </div>
						<div className="content-block" id={'design-shape'}>
		          <div className="section-title"> The design shapes for the content </div>
		        </div>
		        <p>
		        	To get a better promotion effect on different platforms, we customized copies.
		        </p>
		        <p>
							On Weibo and Wechat Moment, we used 9 images with questions to interact with our followers. 9-image-display forms a whole picture, leading to big visual impact.
		        </p>
            <div className="project-img-div-long">
              <img
              src='/new year/artboard-16_2018-06-08/artboard-16.png'
            />
            </div>
		        <p>
		        	After that, we posted image with little poems to express our thanks and sincere invitation on Wechat Public Account. Our followers extracted the QR code to take the survey and sign up for the event.
		        </p>
		        <p>
		        	According to the surveys, we selected the final invitees and sent invitation emails with their name and the party schedule.
		        </p>
		        <p>
		        	To get continuous exposure and a large audience, I also designed Countdown Posters with QR code of the survey.
		        </p>
		        <p>
		        	With all the effort, we got over 200 replies on the first day which was much higher than our expectation according to our previous experience.
		        </p>
						<div className="content-block" id={'great-time'}>
		        	<div className="section-title">They had a great time</div>
		        </div>
		        <p>
		        	We borrowed Kumamon custume, which was a very popular character at that time, with the rest budget, and people love it!
		        </p>
		        <p>
		        	In all, our continuous promotion with consistent and vivid design impressed our young participants, offering them an unforgettable experience.
		        </p>
		        <p>
							The event was a big success --
						</p>

						<ol>
							<li>
								All who registered for the event showed up. The loss rate is 0%, far beyond our expectation.
							</li>
							<li>We got 85% feedback rate and 90% were satisfied with the party because they feel they were inspired by other people’s stories.
							</li>
							<li>60% posted on their own social media and 92% mentioned Palmdrive.
							</li>
							<li>100% showed their interest in next event held by us and left their personal contact for further cooperation.
							</li>
						</ol>

		        <div className="content-block" id={'to-be-continue'}>
		        	<div className="section-title">To be continued</div>
		        </div>
		        <p>
		        	To make the event official and accessible by larger audience, I created a website for promotion and check in so we could collect the data automatically for later analytics.
		        </p>
		        <p>Two weeks later, we host another New Year event at Sunnyvale.</p>
            <div className="project-img-div-long">
              <img
              src='/new year/dsc-01489_2018-06-08/dsc-01489.png'
            />
          </div>
		        <div className="content-block" id={'design-team-x'}>
		        	<div className="section-title">Design Team X Marketing Team</div>
		        </div>
		        <p>
		        	Aside the New Year Event, our design team collaborated with marketing team to launch other 136 branding events nationwide, deeply engaging more than 6,000 college students. To promote those events, we created posters, brochures, H5 ads, videos, web ads, web-based games and etc. This directly leads to mainland China sales revenue grew by 233% from 1 to 3.33 million USD in 2 years, increasing market share by 2.5%.
		        </p>
	      	</div>
	      </div>
				<div className="pager-holder">
					<div className="next-page">
						<Link to="/work/palmdrive">
							<div className="project-index">Next Project</div>
							<div className="project-name">Palmdrive Website</div>
              <div className="project-arrow"/>
						</Link>
					</div>
				</div>
	    </div>
    );
  }
}
