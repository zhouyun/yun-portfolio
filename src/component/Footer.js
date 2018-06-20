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
        <div className="footer-copyright">Copyright © 2018 Version 5.0 | Created by Yun Zhou with pride. Tech support by Yun's best coding pals. 😝😌🤔🙄
        </div>
      </div>
    );
  }
}
