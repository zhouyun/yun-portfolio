import React, { Component } from 'react';

export class HighLightOnVisible extends Component {
  constructor(props) {
    super(props);
    this._root = React.createRef();
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this._handleHighlight);
    this._handleHighlight();
  }

  _handleHighlight = (): void => {
    const top = this._root.current.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height * 0.8) {
       this._root.current.className = this.props.className;
       window.removeEventListener('scroll', this._handleHighlight);
    }
  };

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this._handleHighlight);
  }

  render() {
    return <span ref={this._root}>{this.props.children}</span>;
  }
}
