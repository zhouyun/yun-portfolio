import React, { Component } from 'react';
import '../App.css';
import {SNSIcon} from '../component';


export class Footer extends Component {
  render() {
    return (
      <div className="footer">
				<p>
          I appreciate your time for knowing me.<br/>More than that,
          I appreciate the possibility that we know each other.
				</p>

        <SNSIcon/>
        <h9>Copyright © 2018 Yun Zhou | Portfolio Version 4.0
        </h9>
      </div>
    );
  }
}
