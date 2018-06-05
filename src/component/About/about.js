import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/about.css';

export class About extends Component {
  render() {
    return (
      <div className="work">
      	<div class="side-bar">
	      	<Sidebar>
	      		<div>
	      			palmdrive website
	      		</div>
	      		<div><a href="#background">Background</a></div>
	      		<div><a href="#digital-rocks">Digital rocks</a></div>
	      		<div><a href="#design-shape">The design shapes for the content</a></div>
	      		<div><a href="#great-time">Design Shape</a></div>
	      		<div><a href="#to-be-continue">Design Shape</a></div>
	      		<div><a href="#design-team-x">Design Shape</a></div>
	      	</Sidebar>
	      </div>
      	<div className="new-year-sprint">
      		<h3>
      			New Year Event Sprint
      		</h3>
      		<span className="december-2016">
      			December 2016
      		</span>
      		<ScrollableAnchor id={'background'}>
	          <div className="section-title"> Background </div>
	        </ScrollableAnchor>
      		<p>
      			Different from the traditional international education agency who make profit by providing studying abroad related information, Palmdrive shares it for free. With the belief of helping more Chinese students study abroad, Palmdrive operates a platform for students who want to study abroad with who studied abroad or is studying abroad. 
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
          <div class="project-img-div-long">
      			<img
      			class="project-img-long"
	          src='/image/desktop/newyear-display-1.png'
	        />
	        </div>
      		<ScrollableAnchor id={'digital-rocks'}>
	          <div className="section-title"> Digital rocks </div>
	        </ScrollableAnchor>
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
					To be more festive, colorful confetti was added and I finished the key visual in 4 hours. `}
					</p>
					<ScrollableAnchor id={'design-shape'}>
	          <div className="section-title"> The design shapes for the content </div>
	        </ScrollableAnchor>
	        <p>
	        	To get a better promotion effect on different platforms, we customized copies. 
	        </p>
	        <p>
						On Weibo and Wechat Moment, we used 9 images with questions to interact with our followers. 9-image-display forms a whole picture, leading to big visual impact.
	        </p>
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
					<ScrollableAnchor id={'great-time'}>
	        	<div className="section-title">They had a great time</div>
	        </ScrollableAnchor>
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

	        <ScrollableAnchor id={'to-be-continue'}>
	        	<div className="section-title">To be continued</div>
	        </ScrollableAnchor>
	        <p>
	        	To make the event official and accessible by larger audience, I created a website for promotion and check in so we could collect the data automatically for later analytics.
	        </p>
	        <p>Two weeks later, we host another New Year event at Sunnyvale.</p>
	        <ScrollableAnchor id={'design-team-x'}>
	        	<div className="section-title">Design Team X Marketing Team</div>
	        </ScrollableAnchor>
	        <p>
	        	Aside the New Year Event, our design team collaborated with marketing team to launch other 136 branding events nationwide, deeply engaging more than 6,000 college students. To promote those events, we created posters, brochures, H5 ads, videos, web ads, web-based games and etc. This directly leads to mainland China sales revenue grew by 233% from 1 to 3.33 million USD in 2 years, increasing market share by 2.5%. 
	        </p>
      	</div>
      </div>
    );
  }
}
