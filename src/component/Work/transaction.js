import React, { Component } from 'react';
import classnames from 'classnames';
import {Header, Footer, Navbar} from '../../component';

import { HashLink as Link } from 'react-router-hash-link';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import './css/work.css';

export class Transaction extends Component {
	constructor(props) {
	  super(props);
	  this.handleScroll = this.handleScroll.bind(this);
	  this.state = {
	  	activeLink: 1
    }
	}

	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(event) {
	  const numSec = document.getElementsByClassName("content-block").length;
    for (var i=1; i <= numSec; i++) {
    	const anchor_offset = document.getElementsByClassName("content-block")[i].getBoundingClientRect().top;
    	if(anchor_offset > 0) {
    		this.setState({activeLink: i});
    		return;
    	}
		}
	};
  render() {
    return (
      <div className="transaction">
      	<div className="side-bar">
      	<Sidebar>
      		<div className="project-link">
      			Transaction Management Design
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 1 ? 'active-index' : ''}`}>01</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 1 ? 'active-link' : ''}`} to="#background">Background</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 2 ? 'active-index' : ''}`}>02</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 2 ? 'active-link' : ''}`} to="#challenge">The challenge</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 3 ? 'active-index' : ''}`}>03</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 3 ? 'active-link' : ''}`} to="#logic-comes">Logic comes the first</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 4 ? 'active-index' : ''}`}>04</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 4 ? 'active-link' : ''}`} to="#design-comes">Design comes the next</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 5 ? 'active-index' : ''}`}>05</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 5 ? 'active-link' : ''}`} to="#into-the-details">Into the details</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 6 ? 'active-index' : ''}`}>06</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 6 ? 'active-link' : ''}`} to="#always-fun">It’s always fun to play with data</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 7 ? 'active-index' : ''}`}>07</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 7 ? 'active-link' : ''}`} to="#hover-is">"Hover" is better than "click and clear"</Link>
      		</div>
      		<div className="side-bar-row">
      			<div className={`side-bar-index ${this.state.activeLink == 8 ? 'active-index' : ''}`}>08</div>
      			<Link className={`side-bar-link ${this.state.activeLink == 8 ? 'active-link' : ''}`} to="#making-pixels">Making pixels perfect</Link>
      		</div>
      	</Sidebar>
	      </div>
      	<div className="main transaction-management-design">
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
    );
  }
}