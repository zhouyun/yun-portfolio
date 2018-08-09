import React, { Component } from 'react';
import classnames from 'classnames';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class GraphicDesign extends Component {
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

  render() {
    var previous_page = "Pefin";
    return (
      <div>
        <Sidebar
          title={'Other Work and Experience'}
          items={[
            {
              text: "Graphic Design",
              anchor: "#graphic-design",
            },
            {
              text: "Logo & more",
              anchor: "#logo-more",
            },
            {
              text: "T-shirt Design",
              anchor: "#t-shirt",
            },
            {
              text: "Physical Design",
              anchor: "#physical-design",
            }
          ]}
        />
      <div className="work graphic-design">
      	<div className="main">
      		<h3>
      			Other work and experience
      		</h3>
      		<span className="december-2016">
      			2013 - present
      		</span>
          <p>Aside from designing for user interfaces, I also enjoy crafting <HighLightOnVisible className="highlight-graphic">brand identities, logos, illustrations and design you name it</HighLightOnVisible>. Here are a collection of design projects I love and did at work and in my spare time.</p>
      		<div className="content-block" id={'graphic-design'}>
	          <div className="section-title"> 01_Graphic design </div>
	        </div>
          <div className="section-sub-title"> Reading and note taking experience: Traditional vs Digital</div>
          <span className="december-2016">
           December 2016
          </span>
          <div className="project-img-div-long">
            <img className="small_pic"
            src='graphic/digital-reading-experience@2x.png'
          />
          </div>
          <div className="section-sub-title"> Graphic design collections for Palmdrive</div>
	        <span className="december-2016">
      			2016 - present
      		</span>
      		<p>
      			Clean and minimal design are applied to build a up-scale branding. The following are highlights designed on my own.
      		</p>

          <div className="project-img-div-long">
      			<img className="small_pic"
	          src='graphic/group-4@2x.png'
	        />
	        </div>
	        <h5>Palmdrive hiring Roll Up</h5>
	        <div className="project-img-div-long">
      			<img className="small_pic"
	          src='graphic/group-2@2x.png'
	        />
	        </div>
	        <h5>Palmdrive Undergraduate Brochure</h5>
			   <div className="project-img-div-long">
      			<img className="small_pic"
	          src='graphic/display-2-2@2x.png'
	        />
	        </div>
	        <h5>Thank You card for mid-autumn festival</h5>
          <p>
          The Thank You Card was exclusively customized for our partners, coming with the pre-ordered mooncakes. Gold foil and carving are designed to match the mooncakes packages.
          </p>

      		<div className="content-block" id={'logo-more'}>
	          <div className="section-title" > 02_Logo and more </div>
	        </div>
          <div className="section-sub-title"> Wulnut English Logo and Visual Identity System</div>
	        <span className="december-2016">
      			December 2017
      		</span>
      		<p>
      		Wulnut English is a fast growing startup incubated by Palmdrive, focusing on English online tutoring. After launching the VIS, the Wulnut English’s followers has bumped up 20,000 on WeChat in 3 months. <HighLightOnVisible className="highlight-graphic"> Please contact me for VIS.</HighLightOnVisible>
      		</p>
      		<div className="project-img-div-long">
      			<img className="small_pic"
	          src='graphic/stationery-mockup-02@2x.png'
	        />
	        </div>
	        <h5>Wulnut English logo display</h5>
          <div className="section-sub-title"> Palmdrive Go Logo</div>
	        <span className="december-2016">
      			February 2018
      		</span>

	        <p>
	        	Palmdrive Go is a startup incubated by Palmdrive. Its goal is to build a mentor community. I had a good time playing with <HighLightOnVisible className="highlight-graphic">Bilingual Lettering</HighLightOnVisible> on the logo design.
	        </p>
	        <div className="project-img-div-long">
      			<img className="small_pic"
	          src='graphic/group-5@2x.png'
	        />
	        </div>
	        <h5>Responsive logo</h5>

          <div className="content-block" id={'t-shirt'}>
            <div className="section-title">03_T-shirt design</div>
          </div>
          <div className="section-sub-title"> Class Reunion T-shirt</div>
          <span className="december-2016">
            July 2017
          </span>
          <p>
            The t-shirt was for my father’s class reunion 30 years after graduation from Beihang University, I am glad I could <HighLightOnVisible className="highlight-graphic">participate in my father’s youth</HighLightOnVisible> in this way.
          </p>
          <div className="project-img-div-long">
            <img className="small_pic"
            src='graphic/t-shirt/group@2x.png'
          />
          </div>
          <h5>People’s names compose the number 30 with the motto of Beihang University below. </h5>
          <div className="content-block" id={'physical-design'}>
            <div className="section-title">04_Physical Design</div>
          </div>
          <div className="section-sub-title"> Link Time</div>
          <span className="december-2016">
          December 2013
          </span>
          <p>
            Link Time let two strangers interact with each other despite time and location through the maze. The first person customizes the puzzle through adding/removing pieces and set game rules. The second person use the joystick to control the panel to solve it.
          </p>
          <iframe className="mazev" src="https://player.vimeo.com/video/91377740" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	        <h5>I gave the maze to a friend as a gift. While enjoy creating, I also enjoy sharing which doubles the happiness:)</h5>
      </div>
    </div>
    <div className="pager-holder">
      <div className="previous-page link-to-transaction">
        <Link to="/work/transaction">
          <div className="project-index">Previous Project</div>
          <div className="project-arrow-reverse"/>
          <div className="project-name">{previous_page}</div>
        </Link>
      </div>
    </div>
    </div>
    );
  }
}
