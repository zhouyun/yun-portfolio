import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        {this.props.children}
      </div>
    );
  }
}
