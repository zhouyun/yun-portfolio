import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

import ImageZoom from 'react-medium-image-zoom';

export class Palmdrive extends Component {
  componentDidMount(): void {
    const parts = window.location.href.split('#');
    const currentAnchor = parts.length > 0 ? `${parts[parts.length -1]}` : '';
    const numSec = document.getElementsByClassName("content-block").length;
    for (let i = 0; i < numSec; i ++) {
      const el = document.getElementsByClassName("content-block")[i];
      if (el && el.id === currentAnchor) {
        setTimeout(
          () => {
            el.scrollIntoView({ block: 'center'});
          },
          150,
        );
        return;
      }
    }
    window.scroll({top:0});
  }

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
		var previous_page = "Previous page";
    return (
    	<div>
        <Sidebar
          title={'Palmdrive'}
          items={[
            /*{
              text: "Intro",
              anchor: "#intro",
            }*/
            {
              text: "Challenge",
              anchor: "#challenge",
            },
            {
              text: " Information Architecture",
              anchor: "#information-architecture",
            },
            {
              text: "Goal Definition & Metrics",
              anchor: "#goal-definition-metrics",
            },
            {
              text: "Wireframes & Content",
              anchor: "#wireframes-content",
            },
            {
              text: "Visual Design",
              anchor: "#visual-design",
            },
            {
              text: "Work with Developers",
              anchor: "#work-with-developers",
            },
            {
              text: "The end or not",
              anchor: "#the-end-or-not",
            }
          ]}
        />
	      <div className="work palmdrive">
		      	<div className="main palmdrive-main">
		      		<section className="content-block" id={'intro'}>
			        </section>
		      		<h3>
		      			Palmdrive
		      		</h3>
		      		<span className="december-2016">
		      			April 2016 - present
		      		</span>
		      		<div className="content-label">
		              <span className="label">Research</span>
		              <span className="label">UX Design</span>
		              <span className="label">Visual Design</span><br/>
		              <span className="label">Product Management</span><br/>
		              <span className="label">Copy Writing</span>
		              <span className="label">Prototype</span>
		              </div>
		      		<div className="rectangle-button">
		      		<a href="http://palmdrive.cn/">
		      		<div className="rectangle-button-bg"></div>
		      		<div className="btn-text">Go to website</div>
      				</a>
      				</div>
      				<section className="content-block palmdrive-intro">
      					<div className="palmdrive-intro-wrap">
      						<img className="palmdrive-intro-img" src="palmdrive/bg-seed@2x.png">
      						</img>
      					</div>
      					<div className="intro-how"><span className="first-word">How</span> to create a platform that presents information properly on all kinds of devices, and at the same time leads potential subscribers to further contact?</div>
      					<div className="rectangle-division"></div>
      					<div className="intro-with intro-with-palmdrive"><span className="first-word">With</span> the belief of helping more Chinese students study abroad, Palmdrive website operates as an entrance for students to study abroad with free resource and high-end service.</div>
      					<div className="green-circle"></div>
      					<img className="palmdrive-laptop img" src="palmdrive/palmdrive-display@2x.png">
      					</img>
      					<div className="blue-circle"></div>
      					<img className="palmdrive-browser img" src="palmdrive/group-copy-3@2x.png">
      					</img>
      					<div className="palmdrive-browser palmdrive-browser-long-image img">
      					</div>
			        </section>
		      		<section className="content-block" id={'challenge'}>
			          <div className="section-title">01_Challenge</div>
			        </section>
			        <div className="section-sub-title"> Website plays a crucial role as both displaying and selling. </div>
		      		<p>
		      		To keep up with our expanding services, I was in charge of the website redesign which aimed to</p>
					<p>
					•  Provide school application related resource<br/>
					•  Introduce our service with user friendly experience
					</p>
					
					<section className="content-block" id={'information-architecture'}>
			          <div className="section-title">02_Information Architecture</div>
			        </section>
			        <div className="section-sub-title"> Deliver scalable information architecture with every stakeholder </div>
			        <p>
		      			To understand the <HighLightOnVisible className="highlight-fruito">business model</HighLightOnVisible> and get feedbacks to be fully prepare for the mission, I</p>
					<p>
					•  Interviewed our sales, marketing and service teams<br/>
					•  Participated the sales and service training<br/>
					•  Mentored students
					</p>
		      		<p>
					All the efforts led me to create a clear and scalable information architecture as the following. 
					</p>
					 <div className="project-img-div-long hd">
	            {/*<img
	            src='palmdrive/info-arch@2x.png' 
	          	/>*/}
	          	<ImageZoom
				        image={{
				          src: 'palmdrive/info-arch@2x.png',
				          alt: 'Info Architecture',
				          style: {
                    width: '700px'
                  }
				        }}
				        zoomImage={{
				          src: 'palmdrive/info-arch@3x.png',
				          alt: 'Info Architecture',
				          style: {
                    width: '3000px'
                  }
				        }}
				      />
	         </div>
			       <h5>The information architecture of present Palmdrive Website</h5>
			       <section className="content-block" id={'goal-definition-metrics'}>
			          <div className="section-title">03_Goal Definition & Metrics</div>
			        </section>
			        <div className="section-sub-title"> Google analytics help deepen the understanding </div>
			        <p>
		      			Google analytics gave a great hint about <HighLightOnVisible className="highlight-fruito">how visitors interacted</HighLightOnVisible> with our website. Since visiting the Service page was the sign of being interested in our service, my first priority was to</p>
					<p>
					•  Increase the traffic to the page <br/>
					•  Decrease the bounce rate
					</p>
					<div className="project-img-div-long">
					 	<ImageZoom
				        image={{
				          src: 'palmdrive/behavior-flow@2x.png',
				          style: {
                    width: '700px'
                  }
				        }}
				        zoomImage={{
				          src: 'palmdrive/behavior-flow@3x.png',
				          style: {
                    width: '3000px'
                  }
				        }}
				      />
		      </div>
		             <section className="content-block" id={'wireframes-content'}>
			          <div className="section-title">04_Wireframes & Content</div>
			        </section>
			        <div className="section-sub-title"> Design for content </div>
			        <p>
		      			After collecting feedbacks about what to display, I did my first proposal with stakeholders — wireframes with the optional contents. </p>
		      <div className="project-img-div-long">
					 	<ImageZoom
				        image={{
				          src: 'palmdrive/wireframes@2x.png',
				          style: {
                    width: '700px'
                  }
				        }}
				        zoomImage={{
				          src: 'palmdrive/wireframes@3x.png',
				          style: {
                    width: '3000px'
                  }
				        }}
				      />
		      </div>
		             <div><img/></div>
		             <div className="project-img-div-long">
								 	<ImageZoom
							        image={{
							          src: 'palmdrive/wireframes-2@2x.png',
							          style: {
			                    width: '700px'
			                  }
							        }}
							        zoomImage={{
							          src: 'palmdrive/wireframes-2@3x.png',
							          style: {
			                    width: '3000px'
			                  }
							        }}
							      />
					      </div>
		             <section className="content-block" id={'visual-design'}>
			          <div className="section-title">05_Visual Design</div>
			        </section>
			        <div className="section-sub-title"> Design with flexibility </div>
			        <p>
		      			Since my stakeholders were from sales, marketing, service and developing teams, I offered different design with shifting priorities of requirement from each team. (Thanks to my budget-master mum, I have been practicing balancing since born.😅)</p>
		             <div className="project-img-div-long">
								 	<ImageZoom
							        image={{
							          src: 'palmdrive/design-detail@2x.png',
				          style: {
                    width: '700px'
                  }
							        }}
							        zoomImage={{
							          src: 'palmdrive/design-detail@3x.png',
				          style: {
                    width: '3000px'
                  }
							        }}
							      />
					      </div>
		             <h5>Design details of Graduate Showcase Page</h5>
		             <div className="section-sub-title"> Design for all devices </div>
			        <p>
		      			As over half of the website visits are from mobile, the <HighLightOnVisible className="highlight-fruito">responsiveness</HighLightOnVisible> of the website is important and necessary.</p>
		      <div className="project-img-div-long">
								 	<ImageZoom
							        image={{
							          src: 'palmdrive/mobile-design@2x.png',
				          style: {
                    width: '700px'
                  }
							        }}
							        zoomImage={{
							          src: 'palmdrive/mobile-design@3x.png',
				          style: {
                    width: '3000px'
                  }
							        }}
							      />
					      </div>

		              <div className="section-sub-title"> Visual Consistency </div>
			        <p>
		      			For all the pages that I designed, I used <HighLightOnVisible className="highlight-fruito">repetitive elements</HighLightOnVisible> to make the website as a whole.</p>
		             <div className="project-img-div-long">
								 	<ImageZoom
							        image={{
							          src: 'palmdrive/visual-consistency@2x.png',
				          style: {
                    width: '700px'
                  }
							        }}
							        zoomImage={{
							          src: 'palmdrive/visual-consistency@3x.png',
				          style: {
                    width: '3000px'
                  }
							        }}
							      />
					      </div>
		              <section className="content-block" id={'work-with-developers'}>
			          <div className="section-title">06_Work with Developers</div>
			        </section>
			        <div className="section-sub-title"> Show every details </div>
		        		<div className="project-img-div-long">
								 	<ImageZoom
							        image={{
							          src: 'palmdrive/design-delivery@2x.png',
				          style: {
                    width: '700px'
                  }
							        }}
							        zoomImage={{
							          src: 'palmdrive/design-delivery@3x.png',
				          style: {
                    width: '3000px'
                  }
							        }}
							      />
					      </div>
		             <h5>Design delivery of Graduate Service Page</h5>
		             <div><img/></div>
		             <iframe className="image_carousel high-school-web" src="https://player.vimeo.com/video/275326486?background=1&autoplay=1&loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen autoplay allow="autoplay"></iframe>
		             <h5>Interaction design with Flinto of High School Page</h5>
		             <section className="content-block" id={'the-end-or-not'}>
			          <div className="section-title">07_The end or not</div>
			        </section>
			        <div className="section-sub-title"> Teamwork rocks </div>
					 <p>Thanks to all the efforts on the new responsive and visual consistent website, the result turns out to be beyond our expectation.</p>

<p>•  The bounce rate decreased 10% on average for the whole website and up to 75% for the redesigned pages. <br/>
•  The pageviews increased 20% on average and up to 66% for the redesigned pages.<br/>
•  The traffic on Service pages increased over 30%.</p>

		      	</div>
	      </div>
				<div className="pager-holder">
					<div className="next-page link-to-fruito">
						<Link to="/work/fruito">
							<div className="project-index">Next Project</div>
							<div className="project-name">Fruito</div>
              				<div className="project-arrow"/>
						</Link>
					</div>
				</div>
	    </div>
    );
  }
}
