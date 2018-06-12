import React, { Component } from 'react';
import classnames from 'classnames';
import {Header, Footer, Navbar} from '../../component';

import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class Transaction extends Component {
  render() {
		var previous_page = "Palmdrive Website";
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
      		<div id={'background'}>
	          <div className="section-title"> Background </div>
	        </div>
      		<p>
      			Perfin is a personal financial software company. It was founded in 2011 and is headquartered in New York.

      		</p>

	        <div className="section-sub-title"> My Role </div>
      		<p>
      			I worked at Pefin s a UX/UI designer for six months.
      		</p>
      		<p>
      			I was in charge of improving transaction experience by introducing filters and trending data visualization.
      		</p>

          <div className="project-img-div-long">
      			<img
      			className="project-img-long"
	          src='/image/desktop/newyear-display-1.png'
	        />
	        </div>
      		<div id={'challenge'}>
	          <div className="section-title" id="challenge "> The challenge </div>
	        </div>
      		<p>
      		Based on our client’s feedback, costumed tags could be added to transactions and be used as filters to check the total amount. So my first job was to figure out the logic behind the chosen filters.

      		</p>

					<div id={'logic-comes'}>
	          <div className="section-title"> Logic comes the first </div>
	        </div>
	        <p>
	        	To make the logic clear, I created two kinds of filter pools. One was for “Must-have” tags, and the other was for “May-have” tags. This allowed users to choose any combination of filters. Later, we found that this system was too complicated for users, so we saved it for advanced settings.
	        </p>

					<div id={'design-comes'}>
	        	<div className="section-title">Design comes the next</div>
	        </div>
	        <p>
	        	To make the logic clear, I created two kinds of filter pools. One was for “Must-have” tags, and the other was for “May-have” tags. This allowed users to choose any combination of filters. Later, we found that this system was too complicated for users, so we saved it for advanced settings.
	        </p>
	        <p>
	        	Based on customer research, we decided to do the transaction user interface as a table list. After studying the precedents, I found most of the table lists were boring and lacking structure, they were a web version of Excel. So I transformed part of the information into a visualization that could be understood immediately so that users could focus on transactions without distraction.
	        </p>


	        <div id={'into-the-details'}>
	        	<div className="section-title">Into the details</div>
	        </div>
	        <p>
	        	Tags shows below each transaction. Users click a tag to add as a filter and edit filters by clicking bubble to enter a edit mode.
	        </p>
	        <div className="section-sub-title"> 1. Space is better than lines.</div>
	         <p>
	        	I removed the boxes around elements to make a cleaner user interface.
	        </p>
	        <div className="section-sub-title"> 2. Different sizes for different layers.</div>
	         <p>
	        	Users could get a clearer picture of what transactions were made each day by viewing the bubble tree.
	        </p>
	        <div className="section-sub-title"> 3. Use colors properly.</div>
	         <p>
	        	I made a list of colors which complemented each other nicely. Moreover, any color could be told from others easily at the same time. After tags attaching to each transaction, users tended to click tags much more often than typing in a search bar. While people could only added filter by typing in a search bar when using Mint, our competitive product
	        </p>
	        <div id={'always-fun'}>
	        	<div className="section-title">It’s always fun to play with data</div>
	        </div>
	        <p>
	        	The webpages were designed with both bar and pie charts for different needs. 90% users interacted with both pie charts and bar charts. We also had bubble charts or not for a A/B testing, and we removed it for this version.
	        </p>
	        <div id={'hover-is'}>
	        	<div className="section-title">"Hover" is better than "click and clear"</div>
	        </div>
	        <p>
	        	TBased on the researches, I designed with a new feature which allows users to hover on a specific category to see its spending trends instead of clicking it to add a filter. It also saves time of clearing filter pool. In fact, users' interactions with the elements increased by 167% on this page. On iPad, users press instead of hovering.
	        </p>
	         <div id={'making-pixels'}>
	        	<div className="section-title">Making pixels perfect</div>
	        </div>
	        <p>
	        	I did not have the chance to finalize the product, and would love to show you more, however this project is under NDA. What is shown here is only a sneak peek. Please contact me for more details.
	        </p>
      	</div>
      </div>
			<div className="pager-holder">
				<div className="previous-page">
					<Link to="/work/palmdrive">
						<div className="project-index">Previous Project</div>
            <div className="project-arrow-reverse"/>
						<div className="project-name">{previous_page}</div>
					</Link>
				</div>
				<div className="next-page">
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
