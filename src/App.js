import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header, Footer, SNSIcon} from './component';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {About, Work, Palmdrive, GraphicDesign,Transaction,Resume} from './component';
import createHashHistory from 'history/createBrowserHistory'
const history = createHashHistory();

class ScrollTopTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplay: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
    this._handleScroll();
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _handleScroll = (): void => {
    if (window.pageYOffset > 200 && !this.state.shouldDisplay) {
      this.setState({shouldDisplay: true});
    } else if (window.pageYOffset <= 200 && this.state.shouldDisplay) {
      this.setState({shouldDisplay: false});
    }
  };

  _handleClick = (): void => {
    window.scroll({top:0, behavior: 'smooth'})
    setTimeout(
      () => this.setState({shouldDisplay: false}),
      100,
    );
  };

  render() {
    return (
      <div
        onClick={this._handleClick}
        className={`scroll-to-top-root ${this.state.shouldDisplay ? '' : 'hidden_elem'}`}>
          <img
          className="project-img-long"
          src='/image/desktop/up-1.png'
        />
      </div>
    );
  }
}
const App = ({history}) => (
  <div>
    <Header/>
    <Router location={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/resume/" component={Resume} />
        <Route path="/work/newyear/" component={Work}/>
        <Route path="/work/palmdrive/" component={Palmdrive} />
        <Route path="/work/graphic/" component={GraphicDesign} />
        <Route path="/work/transaction/" component={Transaction} />
        <ScrollTopTop/>
      </div>
    </Router>
    <Footer/>
  </div>
);

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="profile">
          <div className="Hi-Im-Yun">
            <h1><span>
              <img className="quote" src="svg/quote.svg"/>
            </span>{"Hi I'm Yun"} </h1>
          </div>
          <div className="UI-designer-Be">A UX/UI designer. Believe in relationships with people. Think with writing and sketch. Learn by making stuff. Currently located in Bay Area, CA.</div>
        </div>
        <SNSIcon/>
        <div className="divider">
          <div>-WORK-</div>
          <div>-ABOUT-</div>
          <div>-RESUME-</div>
        </div>
        {/*<div className="project-section">
                  <div className="img-block" src={logo}>
                  </div>
                  <div className="text-block">
                    Fruits Management App
                  </div>
                </div>*/}
        <div className="project-section project-new-year-section">
          <div className="img-block">
            <img className="background-cloud" src="svg/bluecloud.svg"/>
            <img className="project-image" src="home/group-2/group-2@2x.png"/>

          </div>
          <div className="text-block">
            <div className="project-title">New Year Event Sprint</div>
            <div className="project-description">A branding event from scratch to the end in 2 weeks</div>
            <div className="view-case">
              <Link to="/work/newyear" className="view-case-description">view case</Link>
              <div className="view-case-arrow"></div>
              <div className="view-case-arrow-head">></div>
            </div>
          </div>
        </div>
        <div className="project-section project-palmdrive-section">
          <div className="img-block" src={logo}>
            <img className="background-cloud green-cloud" src="svg/greencloud.svg"/>
            <img className="project-image" src="home/group/group@3x.png"/>
          </div>
          <div className="text-block">
            <div className="project-title">Palmdrive Website</div>
            <div className="project-description">Official website of Palmdrive</div>
            <div className="view-case">
              <Link to="/work/palmdrive" className="view-case-description">view case</Link>
              <div className="view-case-arrow"></div>
              <div className="view-case-arrow-head">></div>
            </div>
          </div>
        </div>
        <div className="project-section">
          <div className="img-block">
            <img className="background-cloud purple-cloud" src="svg/purplecloud.svg"/>
            <img className="project-image" src="home/group-3/group-3@3x.png"/>
          </div>
          <div className="text-block">
            <div className="project-title">Transaction Management Design</div>
            <div className="project-description">Transaction Management is one of the five core functions of Pefin, a web-based financial tool</div>
            <div className="view-case">
              <Link to="/work/transaction" className="view-case-description">view case</Link>
              <div className="view-case-arrow"></div>
              <div className="view-case-arrow-head">></div>
            </div>
          </div>
        </div>
        <div className="project-section">
          <div className="img-block" src={logo}>
            <img className="background-cloud" src="svg/pinkcloud.svg"/>
            <div className="graphic-label">2013-present</div>
          </div>
          <div className="text-block">
            <div className="project-title">Graphic Design Collection +</div>
            <div className="project-description">A showcase of some other projects I worked on and shipped from 2013 till now</div>
            <div className="view-case">
              <Link to="/work/graphic" className="view-case-description">view case</Link>
              <div className="view-case-arrow"></div>
              <div className="view-case-arrow-head">></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
