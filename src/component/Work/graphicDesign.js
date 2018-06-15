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
    var previous_page = "Transaction Management Design";
    return (
      <div>
        <Sidebar
          title={'Transaction Management Design'}
          items={[
            {
              text: "Graphic design collections for Palmdrive",
              anchor: "#palmdrive",
            },
            {
              text: "Wulnut English Logo and Visual Identity System",
              anchor: "#wulnut-english",
            },
            {
              text: "Palmdrive Go Logo",
              anchor: "#palmdrive-go",
            },
            {
              text: "T-shirt design",
              anchor: "#t-shirt",
            },
            {
              text: "Design-it-yourself maze",
              anchor: "#maze",
            }
          ]}
        />
      <div className="work graphic-design">
      	<div className="main">
      		<h3>
      			Graphic Design Collection +
      		</h3>
      		<span className="december-2016">
      			2013 - present
      		</span>
          <p>Aside from designing for user interfaces, I also enjoy crafting <HighLightOnVisible className="highlight-graphic">brand identities, logos, illustrations and design you name it</HighLightOnVisible>. Here are a collection of design projects I love and did at work and in my spare time.</p>
      		<div className="content-block" id={'palmdrive'}>
	          <div className="section-title"> Graphic design collections for Palmdrive </div>
	        </div>
	        <span className="december-2016">
      			2016 - present
      		</span>
      		<p>
      			I led a design team of 4 at Palmdrive to support a good number of campaigns and events over the last two years. Clean and minimal design are applied to build a up-scale branding. The following are highlights designed on my own.
      		</p>

          <div className="project-img-div-long">
      			<img
	          src='graphic/group-4@2x.png'
	        />
	        </div>
	        <h5>Palmdrive hiring Roll Up</h5>
	        <div className="project-img-div-long">
      			<img
	          src='graphic/group-2@2x.png'
	        />
	        </div>
	        <h5>Palmdrive Undergraduate Brochure</h5>
			   <div className="project-img-div-long">
      			<img
	          src='graphic/display-2-2@2x.png'
	        />
	        </div>
	        <h5>Thank You card for mid-autumn festival</h5>
          <p>
          The Thank You Card was exclusively customized for our partners, coming with the pre-ordered mooncakes. Gold foil and carving are designed to match the mooncakes packages.
          </p>

      		<div className="content-block" id={'wulnut-english'}>
	          <div className="section-title" > Wulnut English Logo and Visual Identity System (VIS) </div>
	        </div>
	        <span className="december-2016">
      			December 2017
      		</span>
      		<p>
      		Wulnut English is a fast growing startup incubated by Palmdrive, focusing on English online tutoring. After launching the VIS, the Wulnut English’s followers has bumped up 20,000 on WeChat in 3 months. <HighLightOnVisible className="highlight-graphic"> Please contact me for VIS.</HighLightOnVisible>
      		</p>
      		<div className="project-img-div-long">
      			<img
	          src='graphic/stationery-mockup-02@2x.png'
	        />
	        </div>
	        <h5>Wulnut English logo display</h5>

				<div className="content-block" id={'palmdrive-go'}>
	          <div className="section-title"> Palmdrive Go Logo </div>
	        </div>
	        <span className="december-2016">
      			February 2018
      		</span>

	        <p>
	        	Palmdrive Go is a startup incubated by Palmdrive. Its goal is to build a mentor community. I had a good time playing with <HighLightOnVisible className="highlight-graphic">Bilingual Lettering</HighLightOnVisible> on the logo design.
	        </p>
	        <div className="project-img-div-long">
      			<img
	          src='graphic/group-5@2x.png'
	        />
	        </div>
	        <h5>Responsive logo</h5>

					<div className="content-block" id={'t-shirt'}>
	        	<div className="section-title">T-shirt design for my father’s class reunion 30 years after graduation from Beihang University</div>
	        </div>
	        <span className="december-2016">
      			July 2017
      		</span>
	        <p>
	        	The t-shirt was a last minute design, but I am glad I could <HighLightOnVisible className="highlight-graphic">participate in my father’s youth</HighLightOnVisible> in this way.
	        </p>
	        <div className="project-img-div-long">
      			<img
	          src='graphic/t-shirt/group@2x.png'
	        />
	        </div>
	        <h5>People’s names compose the number 30 with the motto of Beihang University below. </h5>
	        <div className="content-block" id={'maze'}>
	        	<div className="section-title">Design-it-yourself maze</div>
	        </div>
	        <span className="december-2016">
      			December 2013
      		</span>
	        <p>
	        	The maze is to let two strangers interact with each other despite time and location. The first person customizes the puzzle through adding/removing pieces and set game rules. The second person use the joystick to control the panel to solve it.
	        </p>
          <iframe id="mazev" src="https://player.vimeo.com/video/91377740" width="750" height="420" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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
