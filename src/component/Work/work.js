import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';
import '../../App.css';

import classnames from 'classnames';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

export class Work extends Component {
  componentWillMount(): void {
    window.scroll({top:0});
  }
  render() {
		var previous_page = "Palmdrive Website";
    return (
    	<div>
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
	      <div className="work">
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
	      			Different from the traditional international education agency who make profit by providing studying abroad related information, <span className="highlight-newyear">Palmdrive shares it for free</span>. With the belief of helping more Chinese students study abroad, Palmdrive operates a platform for students who want to study abroad with who studied abroad or is studying abroad.
	      		</p>
	      		<p>
							In order to be known by the market, branding events were launched <span className="highlight-newyear">fast and massively</span>. In this case, events for different marketing preferences were developed.
	      		</p>
	      		<p>
							New Year Event was the first city event to offer an opportunity for Palmdrive to <span className="highlight-newyear">communicate with college students and add their belief to our brand</span>.
	      		</p>
		        <div className="section-sub-title"> My Role </div>
	      		<p>
	      			I collaborated with Su, the event executor, since the start of the project. I delivered <span className="highlight-newyear">digital posters, website, and invitation email</span> for different platforms in 2 weeks.
	      		</p>
	          <div className="project-img-div-long">
	      			<img
		          src='/image/desktop/display-1@2x.png'
		        />
		        </div>
	      		<div className="content-block" id={'digital-rocks'}>
		          <div className="section-title" id="digital-rocks"> Digital rocks </div>
		        </div>
	      		<p>
	      		With limit budget and time, we decided to cut off the printing part and promote the event only on digital platforms which would reduce the budget by 30% and preparation time by 50%.
	      		</p>
	      		<p>
						Moreover, it was easy for our targets to <span className="highlight-newyear">repost, @ their friends and interact</span> with us on social media platforms, like Wechat.
						</p>
	      		<p>
						As the promotion would happen only on digital, I was so excited to start my design with <span className="highlight-newyear">no worries about the CMYK and print quality</span>. First time I could use some <span className="highlight-newyear">real bold colors</span>!
						</p>
	      		<p>
						To be more festive, colorful confetti was added and I finished the key visual in <span className="highlight-newyear">4 hours</span>.
						</p>
						<div className="project-img-div-long">
	      			<img
		          src='/new year/artboard-16_2018-06-08/artboard-16@2x.png'
		        />
		        </div>
						<div className="content-block" id={'design-shape'}>
		          <div className="section-title"> The design shapes for the content </div>
		        </div>
		        <p>
		        	To get a better promotion effect on different platforms, we <span className="highlight-newyear">customized copies</span>.
		        </p>
		        <p>
							On Weibo and Wechat Moment, we used 9 images with questions to interact with our followers. <span className="highlight-newyear">9-image-display</span> forms a whole picture, leading to big visual impact.
		        </p>
            <div className="project-img-div-long">
              <img
              src='/new year/group@2x.png'
            />
            </div>
		        <p>
		        	After that, we posted image with little poems to express our thanks and sincere invitation on <span className="highlight-newyear">Wechat Public Account</span>. Our followers extracted the <span className="highlight-newyear">QR code</span> to take the survey and sign up for the event.
		        </p>
		        <div className="project-img-div-long">
              <img
              src='/new year/group-5@2x.png'
            />
            </div>
		        <p>
		        	According to the surveys, we selected the final invitees and sent <span className="highlight-newyear">invitation emails</span> with their name and the party schedule.
		        </p>
		        <div className="project-img-div-long">
		        <img
              src='/new year/email-display@2x.png'
            />
            </div>
		        <p>
		        	To get continuous exposure and a large audience, I also designed <span className="highlight-newyear">Countdown Posters</span> with QR code of the survey.
		        </p>
		         <div className="project-img-div-long">
		        <img
              src='/new year/group-2@2x.png'
            />
            </div>
		        <p>
		        	With all the effort, we got <span className="highlight-newyear">over 200 replies</span> on the first day which was much higher than our expectation according to our previous experience.
		        </p>

						<div className="content-block" id={'great-time'}>
		        	<div className="section-title">They had a great time</div>
		        </div>
		        <p>
		        	We borrowed <span className="highlight-newyear">Kumamon custume</span>, which was a very popular character at that time, with the rest budget, and <span className="highlight-newyear">people love it</span>!
		        </p>
		        <div className="project-img-div-long">
		        <img
              src='/new year/group-3@2x.png'
            />
            </div>
            <h5>Photo credit Su</h5>
		        <p>
		        	In all, our continuous promotion with <span className="highlight-newyear">consistent and vivid design</span> impressed our young participants, offering them an unforgettable experience.
		        </p>
		        <p>
							The event was a big success --
						</p>

						<ol>
							<li>
								All who registered for the event showed up. The <span className="highlight-newyear">loss rate is 0%</span>, far beyond our expectation.
							</li>
							<li>We got <span className="highlight-newyear">85% feedback rate</span> and 90% were satisfied with the party because they feel they were inspired by other people’s stories.
							</li>
							<li>60% posted on their own social media and <span className="highlight-newyear">92% mentioned Palmdrive</span>.
							</li>
							<li>100% showed their interest in next event held by us and left their personal contact for further cooperation.
							</li>
						</ol>

		        <div className="content-block" id={'to-be-continue'}>
		        	<div className="section-title">To be continued</div>
		        </div>
		        <p>
		        	To make the event official and accessible by larger audience, I created a website for promotion and check in so we could <span className="highlight-newyear">collect the data automatically for later analytics</span>.
		        </p>
		        <div className="project-img-div-long">
		        <img
              src='/new year/group-4@2x.png'
            />
            </div>
		        <p>Two weeks later, we host another New Year event at Sunnyvale.</p>
            <div className="project-img-div-long">
              <img
              src='/new year/dsc-01489_2018-06-08/dsc-01489@2x.png'
            />
          </div>
          <h5>Photo credit Yujia</h5>
		        <div className="content-block" id={'design-team-x'}>
		        	<div className="section-title">Design Team X Marketing Team</div>
		        </div>
		        <p>
		        	Aside the New Year Event, our design team collaborated with marketing team to launch other <span className="highlight-newyear">136 branding events nationwide</span>, deeply engaging <span className="highlight-newyear">more than 6,000</span> college students. To promote those events, we created <span className="highlight-newyear">posters, brochures, H5 ads, videos, web ads, web-based games and etc</span>. This directly leads to mainland China sales revenue grew by 233% from 1 to <span className="highlight-newyear">3.33 million USD</span> in 2 years, increasing market share by 2.5%.
		        </p>
	      	</div>
	      </div>
				<div className="pager-holder">
				<div className="previous-page link-to-palmdrive">
						<Link to="/work/Palmdrive">
							<div className="project-index">Previous Project</div>
              				<div className="project-arrow-reverse"/>
             				 <div className="project-name">{previous_page}</div>
						</Link>
					</div>
					<div className="next-page link-to-transaction">
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
