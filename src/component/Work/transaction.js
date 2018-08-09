import React, { Component } from 'react';
import classnames from 'classnames';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class Transaction extends Component {
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
		var previous_page = "New Year Event";
    return (
			<div>
        <Sidebar
          title={'Pefin'}
          items={[
            {
              text: "Challenge",
              anchor: "#challenge",
            },
            {
              text: "Sketch & Scenarios",
              anchor: "#sketch-scenarios",
            },
            {
              text: "Wireframes",
              anchor: "#wireframes",
            },
            {
              text: "Visual Design",
              anchor: "#visual-design",
            },
            {
              text: "Development",
              anchor: "#development",
            }
          ]}
        />
      <div className="work transaction">
      	<div className="main">
      		<h3>
      			Pefin
      		</h3>
      		<span className="december-2016">
      			June 2014 - December 2014
      		</span>
      		<div className="rectangle-button">
		      		<a href="https://www.pefin.com/">
		      		<div className="rectangle-button-bg"></div>
		      		<div className="btn-text">Go to website</div>
      				</a>
      				</div>
      		<div id={'challenge'}>
	          <div className="section-title"> 01_Challenge </div>
	        </div>
	        <div className="section-sub-title"> UX design of transactions and data visualizing </div>
      		<p>
      			I worked at Pefin as a UX designer for six months, and was in charge of designing two of five core functions. One was designing the process of interacting with the transactions, the other was visualizing the trend data.
      		</p>
      		<p>Perfin is a personal financial software company. It was founded in 2011 and is headquartered in New York.</p>

	        <div className="display-tittle"> My Role </div>
      		<p>
      			I worked at Pefin s a <HighLightOnVisible className="highlight-transaction">UX/UI designer</HighLightOnVisible> for six months.
      		</p>
      		<p>
      			I was in charge of improving transaction experience by <HighLightOnVisible className="highlight-transaction">introducing filters and trending data visualization</HighLightOnVisible>.
      		</p>

          <div className="project-img-div-long">
      			<img className="big_pic"
	          src='pefin/group-2@2x.png'
	        />
	        </div>
      		<div className="content-block" id={'sketch-scenarios'}>
	          <div className="section-title"> 02_Sketch & Scenarios</div>
	        </div>
	        <div className="section-sub-title"> Logic comes the first. </div>
      		<p>
      		Based on our client’s feedback, costumed tags could be added to transactions and be used as filters to check the total amount. So my first job was to <HighLightOnVisible className="highlight-transaction">figure out the logic</HighLightOnVisible> behind the chosen filters.

      		</p>
	        <p>
	        	To make the logic clear, I created two kinds of filter pools. One was for <HighLightOnVisible className="highlight-transaction">“Must-have” tags</HighLightOnVisible>, and the other was for <HighLightOnVisible className="highlight-transaction">“May-have” tags</HighLightOnVisible>. This allowed users to choose any combination of filters. Later, we found that this system was too complicated for users, so we saved it for advanced settings.
	        </p>
	        <div className="project-img-div-long">
      			<img className="big_pic"
	          src='pefin/bitmap@2x.png'
	        />
	        </div>
	         <h5>Quick sketch for different scenarios</h5>
			<div className="content-block" id={'wireframes'}>
	        	<div className="section-title">03_Wireframes</div>
	        </div>
	        <div className="section-sub-title">Design comes the next</div>
	         <div className="project-img-div-long">
      			<img className="big_pic"
	          src='pefin/bitmap/bitmap@2x.png'
	        />
	        </div>
	        <h5>Traditional table lists and charts</h5>
	        <p>
	        	Based on customer research, we decided to do the transaction user interface as a table list. After studying the precedents, I found most of the table lists were boring and lacking structure, they were a <HighLightOnVisible className="highlight-transaction">web version of Excel</HighLightOnVisible>. So I transformed part of the information into a visualization that could be understood immediately so that users could focus on transactions without distraction.
	        </p>
	        <div className="project-img-div-long">
      			<img className="small_pic"
	          src='pefin/whiteboard@2x.png'
	        />
	        </div>

	        <div className="section-sub-title">It’s always fun to play with data</div>

	        <p>
	        	The webpages were designed with both <HighLightOnVisible className="highlight-transaction">bar and pie charts</HighLightOnVisible> for different needs. 90% users interacted with both pie charts and bar charts. We also had bubble charts or not for a A/B testing, and we removed it for this version.
	        </p>
	        <div className="project-img-div-long">
      			<img className="big_pic"
	          src='pefin/wireframe/bitmap@2x.png'
	        />
	        </div>

	        <div className="content-block" id={'visual-design'}>
	        	<div className="section-title">04_Visual Design</div>
	        </div>
	        <div className="section-sub-title">Into the details</div>
	        <p>
	        	<HighLightOnVisible className="highlight-transaction">Tags shows below each transaction.</HighLightOnVisible> Users click a tag to add as a filter and edit filters by clicking bubble to enter a edit mode.
	        </p>
	         <div className="project-img-div-long">
      			<img className="small_pic"
	          src='pefin/group@2x.png'
	        />
	        </div>
	        <div className="display-tittle"> 1. Space is better than lines.</div>
	         <p>
	        	I removed the boxes around elements to make a cleaner user interface.
	        </p>
	        <div className="display-tittle"> 2. Different sizes for different layers.</div>
	         <p>
	        	Users could get a clearer picture of what transactions were made each day by viewing the <HighLightOnVisible className="highlight-transaction">bubble tree</HighLightOnVisible>.
	        </p>
	        <div className="display-tittle"> 3. Use colors properly.</div>
	         <p>
	        	I made a list of colors which complemented each other nicely. Moreover, any color could be told from others easily at the same time. After tags attaching to each transaction, users tended to <HighLightOnVisible className="highlight-transaction">click tags</HighLightOnVisible> much more often than <HighLightOnVisible className="highlight-transaction">typing in a search bar</HighLightOnVisible>. While people could only added filter by typing in a search bar when using Mint, our competitive product
	        </p>
	        <div className="project-img-div-long">
      			<img className="small_pic"
	          src='pefin/ui-exhibition@2x.png'
	        />
	        </div>
	        <div className="section-sub-title">"Hover" is better than "click and clear"</div>

	        <div className="project-img-div-long">
      			<img className="big_pic"
	          src='pefin/wireframe/research@2x.png'
	        />
	        </div>
	        <div><img/></div>
	        <p>
	        	Based on the researches, I designed with a new feature which allows users to <HighLightOnVisible className="highlight-transaction">hover</HighLightOnVisible> on a specific category to see its spending trends instead of <HighLightOnVisible className="highlight-transaction">clicking</HighLightOnVisible> it to add a filter. It also saves time of clearing filter pool. In fact, users' interactions with the elements <HighLightOnVisible className="highlight-transaction">increased by 167%</HighLightOnVisible> on this page. On iPad, users press instead of hovering.
	        </p>
	        <img className="image_carousel" src="pefin/pefin_ani.gif" width="700px" ></img>
	        <h5>Interaction Design made with After Effects</h5>

	         <div className="content-block" id={'development'}>
	        	<div className="section-title">05_Development</div>
	        </div>
	        <div className="section-sub-title"></div>
	        <p>
	        For this project, I had the chance to apply my front-end development skills to realize my design with <a href="http://knockoutjs.com/"><u>Knockout</u></a>, which was so much fun. Although I did not have the chance to finalize the product </p>
	        <p>
	        	I would love to show you more, however this project is under NDA. What is shown here is only a sneak peek. Please contact me for more details.
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
						<div className="project-name">Other Work and Experience</div>
            <div className="project-arrow"/>
					</Link>
				</div>
			</div>
		</div>
    );
  }
}
