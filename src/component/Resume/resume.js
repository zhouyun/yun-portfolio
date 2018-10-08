import React, { Component } from 'react';
import {Sidebar,HighLightOnVisible} from '../';
import './css/resume.css';

export class Resume extends Component {
  componentDidMount() {
    window.scroll({top:0});
  }
  render() {
    return (
      <div className="work">
      <div className="main">
        <div className="rectangle-button">
              <a href="YunZhou_VisualUXDesigner.pdf" target="blank">
              <div className="rectangle-button-bg"></div>
              <div className="btn-text">Download Resume PDF</div>
              </a>
              </div>
        <div className="resume-total">
          <div className="resume-title">
            <div className="resume-title-text">Experience</div>
          </div>
          <div className="resume-content">
            <div className="resume-content-title">Design Lead | April 2016 – present</div>
            <div className="resume-content-location">Palmdrive – Sunnyvale, CA/Shanghai, China</div>
            <div className="resume-content-detail">
            <div className="resume-sub">Interaction design:</div>
              <p>• Redesigned College Application Management System, a platform for consultants, mentors and coordinators to collaborate to help students with the application process. Serving over 4,000 mentors and premium subscribers, achieving over 16 million USD annual revenue.</p>

              <p>• Designed College Application Assistant web app for students to arrange and follow their application process.</p>
              <div className="resume-sub">Design system:</div>
              <p>• Refined Palmdrive Style Guide by expanding web components and visual elements.</p>
              <p>
                • Designed the UI Component Gallery for College Application Assistant web app. 
              </p>
              <p>
                • Designed logos and visual identity systems for in-company startups, Wulnut English, Palmdrive Go, and Palmdrive Academy. 
              </p>
              <div className="resume-sub">Marketing design:</div>
              <p>• In charge of website redesign. Bounce rate decreased 10% in average and up to 75% for redesigned pages.</p>

              <p>• Led digital layouts, collateral materials, environmental graphics, and print advertising for more than 130 branding events nationwide within one year, deeply engaging with more than 6,000 college students. Directly leading to mainland China sales revenue grew by 233% from 1 to 3.33 million USD in 2 years, increasing market share by 2.5%.</p>
              <div className="resume-sub">Other:</div>
              <p>• Establish and host in-company design workshops and weekly design talks.</p>

              <p>• Build the design team from 0 to 4.</p>

              <p>• Reduced communication overhead by introducing transparent and standard work process that supported 300% campaigns without new design hires in 2017.</p>

            </div>
            <div className="resume-content">
              <div className="resume-content-title">UX/UI Designer | January 2015 – March 2016</div>
              <div className="resume-content-location">Smart Traveler – New York, NY/ Bay Area, CA</div>
              <div className="resume-content-detail">
                <p>• Created website for Chinese travelers who want to travel in the U.S.</p>
                <p>
                • Designed logo, graphic elements for web, branding and digital/print ad layouts. </p>
                <p>• Build the design team of 3 designers. </p>
              </div>
            </div>
          
              <div className="resume-content">
                <div className="resume-content-title">UX/UI Intern | June 2014 – December 2014</div>
                <div className="resume-content-location">Pefin – New York, NY</div>
                <div className="resume-content-detail">
                  <p>• Worked on user need analysis and information architecture.</p>
                  <p>• Fulfilled the financial management website with HTML, CSS, jQuery, JavaScript and Knockout.
                  </p>
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
            </div>
          </div>
          </div>
        </div>
      );
    }
  }
