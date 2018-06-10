import React, { Component } from 'react';
import '../App.css';
import {SNSIcon} from '../component';


export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
					<p>I appreciate your time for knowing me.<br/>More than that, I appreciate the possibility that we know each other.
					</p>
        <SNSIcon/>
      </div>
    );
  }
}
