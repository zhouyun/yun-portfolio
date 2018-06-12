import React, { Component } from 'react';
import classnames from 'classnames';
import {Header, Footer, Navbar} from '../../component';

import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class GraphicDesign extends Component {
  render() {
    var previous_page = "Transaction Management Design";
    return (
      <div>
        <Sidebar
          title={'Transaction Management Design'}
          items={[
            {
              text: "Graphic design collections for Palmdrive",
              anchor: "#background",
            },
            {
              text: "Wulnut English Logo and Visual Identity System",
              anchor: "#digital-rocks",
            },
            {
              text: "Palmdrive Go Logo",
              anchor: "#design-shape",
            },
            {
              text: "T-shirt design",
              anchor: "#great-time",
            },
            {
              text: "Design-it-yourself maze",
              anchor: "#to-be-continue",
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
      		<div className="content-block" id={'background'}>
	          <div className="section-title"> Graphic design collections for Palmdrive </div>
	        </div>
	        <span className="december-2016">
      			2016 - present
      		</span>
      		<p>
      			I led a design team of 4 at Palmdrive to support a good number of campaigns and events over the last two years. Clean and minimal design are applied to build a up-scale branding. The following are highlights designed on my own.

      		</p>
      		<p>
				The Thank You Card was exclusively customized for our partners, coming with the pre-ordered mooncakes. Gold foil and carving are designed to match the mooncakes packages.

      		</p>
          <div className="project-img-div-long">
      			<img
      			className="project-img-long"
	          src='/image/desktop/newyear-display-1.png'
	        />
	        </div>
      		<div className="content-block" id={'digital-rocks'}>
	          <div className="section-title" id="digital-rocks"> Wulnut English Logo and Visual Identity System (VIS) </div>
	        </div>
	        <span className="december-2016">
      			December 2017
      		</span>
      		<p>
      		Wulnut English is a fast growing startup incubated by Palmdrive, focusing on English online tutoring. After launching the VIS, the Wulnut English’s followers has bumped up 20,000 on WeChat in 3 months.
      		</p>

					<div className="content-block" id={'design-shape'}>
	          <div className="section-title"> Palmdrive Go Logo </div>
	        </div>
	        <span className="december-2016">
      			February 2018
      		</span>
	        <p>
	        	Palmdrive Go is a startup incubated by Palmdrive. Its goal is to build a mentor community. I had a good time playing with Bilingual Lettering on the logo design.
	        </p>

					<div className="content-block" id={'great-time'}>
	        	<div className="section-title">T-shirt design for my father’s class reunion 30 years after graduation from Beihang University</div>
	        </div>
	        <span className="december-2016">
      			July 2017
      		</span>
	        <p>
	        	The t-shirt was a last minute design, but I am glad I could participate in my father’s youth in this way.
	        </p>

	        <div className="content-block" id={'to-be-continue'}>
	        	<div className="section-title">Design-it-yourself maze</div>
	        </div>
	        <span className="december-2016">
      			December 2013
      		</span>
	        <p>
	        	The maze is to let two strangers interact with each other despite time and location. The first person customizes the puzzle through adding/removing pieces and set game rules. The second person use the joystick to control the panel to solve it.
	        </p>
      </div>
    </div>
    <div className="pager-holder">
      <div className="previous-page">
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
