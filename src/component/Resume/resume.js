import React, { Component } from 'react';
import {Sidebar} from '../';
import './css/resume.css';

export class Resume extends Component {
  render() {
    return (
      <div className="resume">
      	<div class="Rectangle-4-Copy">Download Resume PDF</div>
        <div>
          <div>Experience</div>
          <div>
            <div>Design Lead Manager | April 2016 – present</div>
            <div>Palmdrive – Sunnyvale, CA/Shanghai, China</div>
            <div>
              <p>In charge of web pages design and design system refinement. Bounce rate decreased 10% in average and up to 75% for redesigned pages.</p>

              <p>Led user experience design for online products serving over 4,000 mentors and premium subscribers.</p>

              <p>Led collateral materials, environmental graphics, and print advertising for more than 130 branding events nationwide within one year, deeply engaging with more than 6,000 college students. This directly leads to mainland China sales revenue grew by 233% from 1 to 3.33 million USD in 2 years, increasing market share by 2.5%.</p>

              <p>Support social media marketing campaigns with digital ad layouts across multiple platforms (Tencent WeChat, Sina Weibo, Zhihu, Toutiao).</p>

              <p>Designed logos and visual identity systems for in-company startups, Wulnut English, Palmdrive Go, and Palmdrive Academy. Supported Wulnut English campaigns with digital/print products, that contributed to a 280% revenue growth within one year.</p>

              <p>Establish and host in-company design workshops to help teams follow Palmdrive style guide and improve reliability on our daily feeds for over 250k followers.</p>

              <p>Build the design team from 0 to 4 and mentor designers on user-centered design, communication, time-management and career planning.</p>

              <p>Reduced communication overhead by introducing transparent and standard work process that supported 300% campaigns without new design hires in 2017.</p>

              <p>Manage weekly design talks to share project insights, improve current design and explore design for fun.</p>
            </div>
            <div>
              <div>Design Lead Manager | January 2015 – March 2016</div>
              <div>Smart Traveler – New York, NY/ Bay Area, CA</div>
              <div>
                <p>Created website for Chinese travelers who want to travel in the U.S. <br/>Designed logo, graphic elements for web, branding and digital/print ad layouts. <br/>Build the design team of 3 designers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
