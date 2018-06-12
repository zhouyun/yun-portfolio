import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Work} from '../';
import './css/header.css';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    const {x, width} = this._computeIndicatorProp();
    this.state = {
      isOpen: false,
      isFixed: false,
      indicatorOffset: x,
      indicatorWidth: width,
    };
    this._navRoot = React.createRef();
    this._navPositioner = React.createRef();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount(): void {
    window.addEventListener('wheel', this._handleNavePositioning);
    window.addEventListener('popstate', this._handleIndicatorReposition);
    window.addEventListener('resize', this._handleIndicatorReposition);
    this._handleNavePositioning();
    setTimeout(() => this._handleIndicatorReposition(), 300);
  }

  _handleIndicatorReposition = (): void => {
    const {x, width} = this._computeIndicatorProp();
    this.setState({
      indicatorOffset: x,
      indicatorWidth: width,
    });
  };

  _getActiveTab(): string {
    const hash = (window.location.hash || '').toLowerCase();
    return hash.startsWith('#/resume') ? 'resume' : (
      hash.startsWith('#/about') ? 'about' :
      'work'
    );
  }

  _computeIndicatorProp = (): void => {
    const tab = this._getActiveTab();
    const refItem = document.getElementById(tab);
    if (refItem) {
      const {x, width} = refItem.getBoundingClientRect();
      return {x, width};
    }
    return {x: 0, width: 0};
  };

  _handleNavePositioning = (e): void => {
    const offsetTop = this._navRoot.current.getBoundingClientRect().top;
    if (offsetTop >= -2 && this.state.isFixed) {
      // from fixed to static
      this.setState({isFixed: false}, () => {
        this._removeClass(this._navPositioner.current, 'header-nav-fixed');
        this._removeClass(this._navPositioner.current, 'slidein');
      });
    } else {
      if (e && e.deltaY < -10) {
        if (!this.state.isFixed) {
          this.setState({isFixed: true}, () => {
            this._addClass(this._navPositioner.current, 'header-nav-fixed');
          });
        }
        setTimeout(() => {
          this._addClass(this._navPositioner.current, 'slidein');
        }, 100);
      }

      if (e && e.deltaY > 0 && this.state.isFixed) {
        this._removeClass(this._navPositioner.current, 'slidein');
      }
    }
  };

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this._handleNavePositioning);
    window.removeEventListener('popstate', this._handleIndicatorReposition);
    window.removeEventListener('resize', this._handleIndicatorReposition);
  }

  _removeClass(node, className): void {
    node.className = (node.className || '').replace(className, '').trim();
  }

  _addClass(node, className): void {
    if ((node.className || '').indexOf(className) === -1) {
      node.className = (node.className || '').concat(` ${className}`).trim();
    }
  }

  render() {
    return (
      <div ref={this._navRoot} className="header-nav">
        <div ref={this._navPositioner}>
          <Navbar color="white" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              className={`header-nav-${this.state.isOpen ? 'open' : 'collapse'}`}
              isOpen={this.state.isOpen} navbar>
              <div className="header-indicator" style={{
                left: `${this.state.indicatorOffset}px`,
                width: `${this.state.indicatorWidth}px`,
              }}/>
              <Nav className="m-auto" navbar>
                <NavItem>
                  <NavLink id="work" className="header-item" tag={Link} to="/">WORK</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="about" className="header-item" tag={Link} to="/about">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="resume" className="header-item" tag={Link} to="/resume">RESUME</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
