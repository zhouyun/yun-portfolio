import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header, Footer, Navbar} from './component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {About, Work} from './component';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </div>
  </Router>
);

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="SNS-bar">
          <span>f</span>
          <span>t</span>
          <span>w</span>
        </div>
        <div>
          <h1>{"Hi I'm Yun"} </h1>
          <h3>{"A UX/UI designer. Believe in relationships with people. Think with writing and sketch. Learn by making stuff. Currently located in Bay Area, CA."}</h3>
        </div>
        <div className="project-section">
          <div className="img-block" src={logo}>
          </div>
          <div className="text-block">
            Fruits Management App
          </div>
        </div>
        <div className="project-section">
          <div className="img-block" src={logo}>
          </div>
          <div className="text-block">
            New Year Event Sprint
          </div>
        </div>
        <div className="project-section">
          <div className="img-block" src={logo}>
          </div>
          <div className="text-block">
            Other Projects
          </div>
        </div>
        <div className="project-section">
          <div className="img-block" src={logo}>
          </div>
          <div className="text-block">
            Other Projects
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
