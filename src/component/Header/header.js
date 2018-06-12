import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
    this.state = {
      isOpen: false,
      isFixed: false,
    };
    this._navRoot = React.createRef();
    this._navPositioner = React.createRef();
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this._handleNavePositioning);
    this._handleNavePositioning();
  }

  _handleNavePositioning = (): void => {
    const offsetTop = this._navRoot.current.getBoundingClientRect().top;
    const token = this._token;
    // from static to fixed
    if (offsetTop < -60 && !this.state.isFixed) {
      this.setState({isFixed: true}, () => {
        this._addClass(this._navPositioner.current, 'header-nav-fixed');
        setTimeout(() => {
          this._addClass(this._navPositioner.current, 'slidein');
        }, 200);
      });
    } else if (offsetTop >= -2 && this.state.isFixed) {
      // from fixed to static
      this.setState({isFixed: false}, () => {
        this._removeClass(this._navPositioner.current, 'header-nav-fixed');
        this._removeClass(this._navPositioner.current, 'slidein');
      });
    }
  };

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this._handleNavePositioning);
  }

  _removeClass(node, className): void {
    node.className = (node.className || '').replace(className, '').trim();
  }

  _addClass(node, className): void {
    node.className = (node.className || '').concat(` ${className}`).trim();
  }

  render() {
    return (
      <div ref={this._navRoot} className="header-nav">
        <div ref={this._navPositioner}>
          <Navbar color="white" light expand="md">
            <NavbarBrand className="nav-cloud-icon" href="/">
              <img src="svg/logo.svg"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="m-auto" navbar>
                <NavItem>
                  <NavLink className="header-item" tag={Link} to="/work/newyear">WORK</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="header-item" tag={Link} to="/about">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="header-item" tag={Link} to="/resume">RESUME</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
