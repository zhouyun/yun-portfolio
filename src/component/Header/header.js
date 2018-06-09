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


export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src="svg/logo.svg"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  - WORK -
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to="/work/newyear">New Year Sprint </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/work/palmdrive">Palmdrive Website </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/work/graphic">Transaction Management Design </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/work/transaction">Graphic Design Collection + </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink tag={Link} to="/work/fruito">Fruito </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to="/about">- ABOUT -</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/resume">- RESUME -</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



