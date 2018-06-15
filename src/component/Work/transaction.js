import React, { Component } from 'react';
import classnames from 'classnames';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class Transaction extends Component {
  componentWillMount(): void {
    window.scroll({top:0});
  }
  render() {
		var previous_page = "New Year Event Sprint";
    return (
			<div>
        <Sidebar
          title={'Transaction Management Design'}
          items={[
            {
              text: "Background",
              anchor: "#background",
            },
            {
              text: "The challenge",
              anchor: "#challenge",
            },
            {
              text: "Logic comes the first",
              anchor: "#logic-comes",
            },
            {
              text: "Design comes the next",
              anchor: "#design-comes",
            },
            {
              text: "Into the details",
              anchor: "#into-the-details",
            },
            {
              text: "It’s always fun to play with data",
              anchor: "#always-fun",
            },
            {
              text: "\"Hover\" is better than \"click and clear\"",
              anchor: "#hover-is",
            },
            {
              text: "Making pixels perfect",
              anchor: "#making-pixels",
            }
          ]}
        />
      <div className="work transaction">
      	<div className="main">
      		<h3>
      			Transaction Management Design
      		</h3>
      		<span className="June-2014-December-2015">
      			June 2014 - December 2015
      		</span>
      		<div className="rectangle-button">
		      		<a href="https://www.pefin.com/">
		      		<div className="rectangle-button-bg"></div>
		      		<div className="btn-text">Go to website</div>
      				</a>
      				</div>
      		<div id={'background'}>
	          <div className="section-title"> Background </div>
	        </div>
      		<p>
      			Perfin is a personal financial software company. It was founded in 2011 and is headquartered in New York.

      		</p>

	        <div className="section-sub-title"> My Role </div>
      		<p>
      			I worked at Pefin s a <HighLightOnVisible className="highlight-transaction">UX/UI designer</HighLightOnVisible> for six months.
      		</p>
      		<p>
      			I was in charge of improving transaction experience by <HighLightOnVisible className="highlight-transaction">introducing filters and trending data visualization</HighLightOnVisible>.
      		</p>

          <div className="project-img-div-long">
      			<img
	          src='/pefin/group-2@2x.png'
	        />
	        </div>
      		<div id={'challenge'}>
	          <div className="section-title" id="challenge "> The challenge </div>
	        </div>
      		<p>
      		Based on our client’s feedback, costumed tags could be added to transactions and be used as filters to check the total amount. So my first job was to <HighLightOnVisible className="highlight-transaction">figure out the logic</HighLightOnVisible> behind the chosen filters.

      		</p>

					<div id={'logic-comes'}>
	          <div className="section-title"> Logic comes the first </div>
	        </div>
	        <p>
	        	To make the logic clear, I created two kinds of filter pools. One was for <HighLightOnVisible className="highlight-transaction">“Must-have” tags</HighLightOnVisible>, and the other was for <HighLightOnVisible className="highlight-transaction">“May-have” tags</HighLightOnVisible>. This allowed users to choose any combination of filters. Later, we found that this system was too complicated for users, so we saved it for advanced settings.
	        </p>
	        <div className="project-img-div-long">
      			<img
	          src='/pefin/bitmap@2x.png'
	        />
	        </div>
	         <h5>Quick sketch for different scenarios</h5>
					<div id={'design-comes'}>
	        	<div className="section-title">Design comes the next</div>
	        </div>
	         <div className="project-img-div-long">
      			<img
	          src='/pefin/bitmap/bitmap@2x.png'
	        />
	        </div>
	        <h5>Traditional table lists and charts</h5>
	        <p>
	        	Based on customer research, we decided to do the transaction user interface as a table list. After studying the precedents, I found most of the table lists were boring and lacking structure, they were a <HighLightOnVisible className="highlight-transaction">web version of Excel</HighLightOnVisible>. So I transformed part of the information into a visualization that could be understood immediately so that users could focus on transactions without distraction.
	        </p>
	        <div className="project-img-div-long">
      			<img
	          src='/pefin/whiteboard@2x.png'
	        />
	        </div>

	        <div id={'into-the-details'}>
	        	<div className="section-title">Into the details</div>
	        </div>
	        <p>
	        	<HighLightOnVisible className="highlight-transaction">Tags shows below each transaction.</HighLightOnVisible> Users click a tag to add as a filter and edit filters by clicking bubble to enter a edit mode.
	        </p>
	         <div className="project-img-div-long">
      			<img
	          src='/pefin/group@2x.png'
	        />
	        </div>
	        <div className="section-sub-title"> 1. Space is better than lines.</div>
	         <p>
	        	I removed the boxes around elements to make a cleaner user interface.
	        </p>
	        <div className="section-sub-title"> 2. Different sizes for different layers.</div>
	         <p>
	        	Users could get a clearer picture of what transactions were made each day by viewing the <HighLightOnVisible className="highlight-transaction">bubble tree</HighLightOnVisible>.
	        </p>
	        <div className="section-sub-title"> 3. Use colors properly.</div>
	         <p>
	        	I made a list of colors which complemented each other nicely. Moreover, any color could be told from others easily at the same time. After tags attaching to each transaction, users tended to <HighLightOnVisible className="highlight-transaction">click tags</HighLightOnVisible> much more often than <HighLightOnVisible className="highlight-transaction">typing in a search bar</HighLightOnVisible>. While people could only added filter by typing in a search bar when using Mint, our competitive product
	        </p>
	        <div className="project-img-div-long">
      			<img
	          src='/pefin/ui-exhibition@2x.png'
	        />
	        </div>
	        <div id={'always-fun'}>
	        	<div className="section-title">It’s always fun to play with data</div>
	        </div>
	        <p>
	        	The webpages were designed with both <HighLightOnVisible className="highlight-transaction">bar and pie charts</HighLightOnVisible> for different needs. 90% users interacted with both pie charts and bar charts. We also had bubble charts or not for a A/B testing, and we removed it for this version.
	        </p>
	        <div className="project-img-div-long">
      			<img
	          src='/pefin/wireframe/bitmap@2x.png'
	        />
	        </div>
	        <div id={'hover-is'}>
	        	<div className="section-title">"Hover" is better than "click and clear"</div>
	        </div>
	        <div className="project-img-div-long">
      			<img
	          src='/pefin/wireframe/research@2x.png'
	        />
	        </div>
	        <p>
	        	Based on the researches, I designed with a new feature which allows users to <HighLightOnVisible className="highlight-transaction">hover</HighLightOnVisible> on a specific category to see its spending trends instead of <HighLightOnVisible className="highlight-transaction">clicking</HighLightOnVisible> it to add a filter. It also saves time of clearing filter pool. In fact, users' interactions with the elements <HighLightOnVisible className="highlight-transaction">increased by 167%</HighLightOnVisible> on this page. On iPad, users press instead of hovering.
	        </p>
	        <img class="image_carousel" src="pefin/pefin_ani.gif" width="500px" ></img>

	         <div id={'making-pixels'}>
	        	<div className="section-title">Making pixels perfect</div>
	        </div>
	        <p>
	        	I did not have the chance to finalize the product, and would love to show you more, however this project is under NDA. What is shown here is only a sneak peek. Please contact me for more details.
	        </p>
      	</div>
      </div>
			<div className="pager-holder">
				<div className="previous-page link-to-newyear">
					<Link to="/work/newyear">
						<div className="project-index">Previous Project</div>
            <div className="project-arrow-reverse"/>
						<div className="project-name">{previous_page}</div>
					</Link>
				</div>
				<div className="next-page link-to-graphic">
					<Link to="/work/graphic/">
						<div className="project-index">Next Project</div>
						<div className="project-name">Graphic Design Collection +</div>
            <div className="project-arrow"/>
					</Link>
				</div>
			</div>
		</div>
    );
  }
}
