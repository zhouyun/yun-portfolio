import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

export class Palmdrive extends Component {
  componentWillMount(): void {
    window.scroll({top:0});
  }

  render() {
		var previous_page = "Fruits Management App";
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
              anchor: "#deliver-scalable-information-architecture",
            },
            {
              text: "Fully responsive design and more",
              anchor: "#fully-responsive",
            },
            {
              text: "Design for storytelling",
              anchor: "#design-for-storytelling",
            },
            {
              text: "Design for what really matters",
              anchor: "#design-for-what-really-matters",
            },
            {
              text: "Display with hierarchy",
              anchor: "#display-with-hierarchy",
            },
            {
              text: "Repetitive element makes it consistent",
              anchor: "#repetitive-element-makes-it-consistent",
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
		      		<div className="rectangle-button">
		      		<a href="http://palmdrive.cn/">
		      		<div className="rectangle-button-bg"></div>
		      		<div className="btn-text">Go to website</div>
      				</a></div>
		      		<section className="content-block" id={'background'}>
			          <div className="section-title"> Background </div>
			        </section>
		      		<p>
		      			As more and more students know who we are and what we do through our website, <HighLightOnVisible className="highlight-palmdrive">properly presenting information and the timely updating</HighLightOnVisible> become the goal of maintaining the website.
		      		</p>

			        <div className="section-sub-title"> My Role </div>
		      		<p>
		      			I have maintained the website since I joined the Palmdrive ini April, 2016. The website had some ground work before I was in charge. To keep up with our expanding services, I redesigned the old pages and created new pages from time to time, including <HighLightOnVisible className="highlight-palmdrive">information architect maintain, copy editing, website design, project management and cross-teams coordinating</HighLightOnVisible>.
		      		</p>
              <div className="project-img-div-long">
                <img
                src='/palmdrive/palmdrive-web-display_2018-05-31/palmdrive-web-display@2x.png'
              />
              </div>
		      		<p>
		      			Some of them are displayed below. They show the design strategy I came up with when I did the work.
		      		</p>
		      		<section className="content-block" id={'deliver-scalable-information-architecture'}>
			          <div className="section-title"> Deliver scalable information architecture </div>
			        </section>
		      		<p>
		      			As our services are growing, to present information properly on the website can be challenging. So I divided the challenge into two parts —
		      		</p>
		      		<p>
		      			1. How to group the information logically and clearly
		      		</p>
		      		<p>
						2. How to present information accurately and reasonably on each page
							</p>
		      		<p>
						To achieve that, I worked on understanding the business model by <HighLightOnVisible className="highlight-palmdrive">joining the sales and service training</HighLightOnVisible>, as well as <HighLightOnVisible className="highlight-palmdrive">mentoring students myself</HighLightOnVisible>. I was even honored the best student because of actively participation and high score in the test :)
							</p>
		      		<p>
							All the efforts lead me to create a <HighLightOnVisible className="highlight-palmdrive">clear and scalable information architecture</HighLightOnVisible> as the following.
							</p>
              <div className="project-img-div-long">
                <img
                src='/palmdrive/bitmap_2018-05-31/bitmap@2x.png'
              />
              </div>
              <h5>The information architecture of present Palmdrive Website</h5>
							<section className="content-block" id={'fully-responsive'}>
			          <div className="section-title"> Fully responsive design and more </div>
			        </section>
			        <div className="content-link"><a href="http://palmdrive.cn/services"><u>Graduate Service page</u></a></div>
			        <p>
			        	As over half of the website visits are from mobile, the responsiveness of the website is important and necessary, especially for the Graduate service page which directly leads to our sales. All visitors could access our service flow easily on any devices. I also created a more <HighLightOnVisible className="highlight-palmdrive">detailed png version</HighLightOnVisible> for the sales team for a consistent user experience.

			        </p>
			        <div className="mobile" >
			        <iframe className="image_carousel" src="https://player.vimeo.com/video/275159126?background=1" width="216" height="385" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			        </div>
			        <div className="web" >
					<iframe className="image_carousel" src="https://player.vimeo.com/video/275158343?background=1" width="640" height="385" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
					</div>
			        <div className="project-img-div-long">
                <img
                src='/palmdrive/invalid-name_2018-05-31/invalid-name@2x.png'
              />
              </div>
						<section className="content-block" id={'design-for-storytelling'}>
			        	<div className="section-title">Design for storytelling</div>
			        </section>
			        <div className="content-link"><a href="http://palmdrive.cn/highschool_services"><u>High School page</u></a></div>
			        <p>
			        	When I started to work with Tina, the Head of High School Application Department, on the High School service page, she had no idea what should be displayed on the page. After deep discussion with Tina about the high school service, I extracted the web content from the service brochure and <HighLightOnVisible className="highlight-palmdrive">rephrased the copy</HighLightOnVisible>.
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
							With Tina’s fully trust and collaboration, the page design went smoothly and was delivered in <HighLightOnVisible className="highlight-palmdrive">two weeks</HighLightOnVisible>.
							</p>

              <img className="image_carousel" src="palmdrive/high-school-final2.0.gif" width="750px" ></img>

			        <section className="content-block" id={'design-for-what-really-matters'}>
			        	<div className="section-title">Design for what really matters</div>
			        </section>

			        <div className="content-link"><a href="http://palmdrive.cn/graduate_showcase"><u>Graduate Offer Showcase page</u></a></div>
			        <p>
			        	As the google analytics showed, the Graduate Offer Showcase page had <HighLightOnVisible className="highlight-palmdrive">over 30% bounce rate</HighLightOnVisible> which was far more than what our service team expect. To solve the problem, I redesigned the page with focusing on <HighLightOnVisible className="highlight-palmdrive">displaying our values and sharings</HighLightOnVisible>.

			        </p>
			         <div className="project-img-div-long">
                <img
                src='/palmdrive/group-9@2x.png'
              />
              </div>
			        <p>
			        The results are prominent, the Monthly Bounce Rate on the page <HighLightOnVisible className="highlight-palmdrive">decreased by 75%</HighLightOnVisible> and the pageviews share <HighLightOnVisible className="highlight-palmdrive">increased by 59%</HighLightOnVisible>.
							</p>
			        <section className="content-block" id={'display-with-hierarchy'}>
			        	<div className="section-title">Display with hierarchy</div>
			        </section>
			         <div className="content-link"><a href="http://palmdrive.cn/mentors"><u>Mentor Page</u></a></div>
			        <p>
			        	Analysing from the discussion with the Mentor Team,
                the problem of the previous mentor displaying page was <HighLightOnVisible className="highlight-palmdrive">how to highlight our mentors</HighLightOnVisible>.
			        </p>
			        <p>
			        In the redesign, mentors with strong background are displayed first. Users can filter mentors with majors in the second section.
					</p>
					<div className="project-img-div-long">
                <img
                src='/palmdrive/group-8_2018-05-31/group-8@2x.png'
              />
              </div>
							<section className="content-block" id={'repetitive-element-makes-it-consistent'}>
			        	<div className="section-title">Repetitive element makes it consistent</div>
			        </section>
			        <p>
			        	For all the pages that I designed, I used repetitive elements to make the website as a whole.
			        </p>
			        <div className="project-img-div-long">
                <img
                src='/palmdrive/group-4_2018-05-31/group-4@2x.png'
              />
              </div>
              <div className="project-img-div-long">
                <img
                src='/palmdrive/group-6_2018-05-31/group-6@2x.png'
              />
              </div>
		      	</div>
	      </div>
				<div className="pager-holder">
					<div className="previous-page link-to-fruito">
						<Link to="/work/fruito">
							<div className="project-index">Previous Project</div>
              				<div className="project-arrow-reverse"/>
             				 <div className="project-name">{previous_page}</div>
						</Link>
					</div>
					<div className="next-page link-to-newyear">
						<Link to="/work/newyear">
							<div className="project-index">Next Project</div>
							<div className="project-name">New Year Event Sprint</div>
              				<div className="project-arrow"/>
						</Link>
					</div>
				</div>
	    </div>
    );
  }
}
