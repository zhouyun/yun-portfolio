import React, {Component} from 'react';
import {
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
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/work">{"-work-"}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">{"-about-"}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resume">{"-resume-"}</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}