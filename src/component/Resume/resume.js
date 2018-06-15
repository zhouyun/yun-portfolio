import React, { Component } from 'react';
import {Sidebar,HighLightOnVisible} from '../';
import './css/resume.css';

export class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="rectangle-resume">
              <a href="resume6.4.pdf" target="blank">
              <div className="rectangle-button-bg"></div>
              <div className="btn-text">Download Resume PDF</div>
              </a>
              </div>
        <div className="resume-total">
          <div className="resume-title">
            <div className="resume-title-text">Experience</div>
          </div>
          <div className="resume-content">
            <div className="resume-content-title">Design Lead Manager | April 2016 – present</div>
            <div className="resume-content-location">Palmdrive – Sunnyvale, CA/Shanghai, China</div>
            <div className="resume-content-detail">
              <p>In charge of <HighLightOnVisible className="highlight-general"> web pages design and design system refinement</HighLightOnVisible>. Bounce rate decreased 10% in average and up to 75% for redesigned pages.</p>

              <p>Led <HighLightOnVisible className="highlight-general"> user experience design</HighLightOnVisible> for online products serving over 4,000 mentors and premium subscribers.</p>

              <p>Led <HighLightOnVisible className="highlight-general"> collateral materials, environmental graphics, and print advertising</HighLightOnVisible> for more than 130 branding events nationwide within one year, deeply engaging with more than 6,000 college students. This directly leads to mainland China sales revenue grew by 233% from 1 to 3.33 million USD in 2 years, increasing market share by 2.5%.</p>

              <p>Support <HighLightOnVisible className="highlight-general"> social media marketing campaigns</HighLightOnVisible> with digital ad layouts across multiple platforms (Tencent WeChat, Sina Weibo, Zhihu, Toutiao).</p>

              <p>Designed <HighLightOnVisible className="highlight-general"> logos and visual identity systems</HighLightOnVisible> for in-company startups, Wulnut English, Palmdrive Go, and Palmdrive Academy. Supported Wulnut English campaigns with digital/print products, that contributed to a <HighLightOnVisible className="highlight-general"> 280% revenue growth</HighLightOnVisible> within one year.</p>

              <p>Establish and host in-company design workshops to help teams follow Palmdrive style guide and improve reliability on our daily feeds for over <HighLightOnVisible className="highlight-general"> 400k followers</HighLightOnVisible>.</p>

              <p>Build the design team from 0 to 4 and mentor designers on user-centered design, communication, time-management and career planning.</p>

              <p>Reduced communication overhead by introducing transparent and standard work process that supported <HighLightOnVisible className="highlight-general"> 300% campaigns without new design hires</HighLightOnVisible> in 2017.</p>

              <p>Manage <HighLightOnVisible className="highlight-general"> weekly design talks</HighLightOnVisible> to share project insights, improve current design and explore design for fun.</p>
            </div>
            <div className="resume-content">
              <div className="resume-content-title">Design Lead Manager | January 2015 – March 2016</div>
              <div className="resume-content-location">Smart Traveler – New York, NY/ Bay Area, CA</div>
              <div className="resume-content-detail">
                <p>Created website for Chinese travelers who want to travel in the U.S. <br/>Designed logo, graphic elements for web, branding and digital/print ad layouts. <br/>Build the design team of 3 designers.</p>
              </div>
            </div>
            <div className="resume-content">
              <div className="resume-content-title">Digital Media Instructor | November 2014 – May 2015</div>
              <div className="resume-content-location">Digital Media Instructor | November 2014 – May 2015</div>
              <div className="resume-content-detail">
                <p>Collaborated with mentors and facilitators in curricular oversight and monthly
                  workshops involving video editing and programming for Girls Write Now, a non-profit
                  organization. </p>
                </div>
              </div>
              <div className="resume-content">
                <div className="resume-content-title">UX/UI Designer | June 2014 – December 2014</div>
                <div className="resume-content-location">UX/UI Designer | June 2014 – December 2014</div>
                <div className="resume-content-detail">
                  <p>Worked on user need analysis and information architecture.<br/>
                  Fulfilled financial management website with HTML, CSS, jQuery, JavaScript and Knockout.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-total">
            <div className="resume-title">
              <div className="resume-title-text">Skills</div>
            </div>
            <div className="resume-content">
              <div className="resume-content-title">UX/UI Design</div>
              <div className="resume-content-detail">
                <p>XMind, Sketch, Illustrator, Photoshop, Flinto, InVision, After Effects</p>
              </div>
              <div className="resume-content">
                <div className="resume-content-title">Visual Design</div>
                <div className="resume-content-detail">
                  <p>Branding, Iconography, Infographic, Illustration</p>
                </div>
              </div>
              <div className="resume-content">
                <div className="resume-content-title">Front-end Development</div>
                <div className="resume-content-detail">
                  <p>HTML, CSS, basic JavaScript </p>
                </div>
              </div>
              <div className="resume-content">
                <div className="resume-content-title">Language</div>
                <div className="resume-content-detail">
                  <p>Fluent in English, native in Mandarin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-total">
            <div className="resume-title">
              <div className="resume-title-text">Education</div>
            </div>
            <div className="resume-content">
              <div className="resume-content-title">M.F.A. in Design and Technology | 2013 - 2015</div>
              <div className="resume-content-detail">
                <p>Parsons the New School for Design – New York, NY</p>
              </div>
              <div className="resume-content">
                <div className="resume-content-title">B.E. in Software Engineering | 2009 - 2013 <br/>Associated program in Finance | 2010 - 2011</div>
                <div className="resume-content-detail">
                  <p>Wuhan University – Wuhan, China</p>
                </div>
              </div>
              <div className="resume-content">
                <div className="resume-content-title">Graphic Design and Speech Communication | 2016 - 2017</div>
                <div className="resume-content-detail">
                  <p>De Anza College – Cupertino, CA </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
