import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class GraphicDesign extends Component {
  render() {
    return (
      <div className="graphic-design">
      	<div className="side-bar">
	      	<Sidebar>
	      		<div>
	      			Graphic Design Collection +
	      		</div>
	      		<div><div>01</div><Link to="#background">Graphic design collections for Palmdrive</Link></div>
	      		<div><div>02</div><Link to="#challenge">Wulnut English Logo and Visual Identity System (VIS)</Link></div>
	      		<div><div>03</div><Link to="#logic-comes">Palmdrive Go Logo</Link></div>
	      		<div><div>04</div><Link to="#design-comes">T-shirt design for my father’s class reunion 30 years after graduation from Beihang University</Link></div>
	      		<div><div>05</div><Link to="#into-the-details">Design-it-yourself maze</Link></div>
	      	</Sidebar>
	      </div>
      	<div className="new-year-sprint">
      		<h3>
      			Graphic Design Collection +
      		</h3>
      		<span className="december-2016">
      			2013 - present
      		</span>
      		<div id={'background'}>
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
      		<div id={'digital-rocks'}>
	          <div className="section-title" id="digital-rocks"> Wulnut English Logo and Visual Identity System (VIS) </div>
	        </div>
	        <span className="december-2016">
      			December 2017
      		</span>
      		<p>
      		Wulnut English is a fast growing startup incubated by Palmdrive, focusing on English online tutoring. After launching the VIS, the Wulnut English’s followers has bumped up 20,000 on WeChat in 3 months.
      		</p>
      		
					<div id={'design-shape'}>
	          <div className="section-title"> Palmdrive Go Logo </div>
	        </div>
	        </div>
	        <span className="december-2016">
      			February 2018
      		</span>
	        <p>
	        	Palmdrive Go is a startup incubated by Palmdrive. Its goal is to build a mentor community. I had a good time playing with Bilingual Lettering on the logo design. 
	        </p>
	       
					<div id={'great-time'}>
	        	<div className="section-title">T-shirt design for my father’s class reunion 30 years after graduation from Beihang University</div>
	        </div>
	        <span className="december-2016">
      			July 2017
      		</span>
	        <p>
	        	The t-shirt was a last minute design, but I am glad I could participate in my father’s youth in this way. 
	        </p>
	       
	        <div id={'to-be-continue'}>
	        	<div className="section-title">Design-it-yourself maze</div>
	        </div>
	        <span className="december-2016">
      			December 2013
      		</span>
	        <p>
	        	The maze is to let two strangers interact with each other despite time and location. The first person customizes the puzzle through adding/removing pieces and set game rules. The second person use the joystick to control the panel to solve it.

	        </p>
	       
      
      </div>
    );
  }
}