import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';
import Slider from "react-slick";

import './css/work.css';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    >
      <img className="img slick-arrow-img" src="fruito/up-1@2x.png"/>
    </div>
  );
}

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    >
      <img style={{ ...style, marginLeft:"-60px" }} className="img slick-arrow-img" src="fruito/up-1-copy@2x.png"/>
    </div>
  );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

export class Fruito extends Component {
  componentDidMount(): void {
    const parts = window.location.href.split('#');
    const currentAnchor = parts.length > 0 ? `${parts[parts.length -1]}` : '';
    const numSec = document.getElementsByClassName("content-block").length;
    for (let i = 0; i < numSec; i ++) {
      const el = document.getElementsByClassName("content-block")[i];
      if (el && el.id === currentAnchor) {
        setTimeout(
          () => {
            el.scrollIntoView({ block: 'center'});
          },
          150,
        );
        return;
      }
    }
    window.scroll({top:0});
  }

  render() {
    var previous_page = "Palmdrive";
    return (
      <div>
        <div className="work palmdrive">
          <Sidebar
            title={'Fruito'}
            items={[
            /*{
              text: "Intro",
              anchor: "#intro",
            }*/
            {
              text: "Challenge",
              anchor: "#challenge",
            },
            {
              text: " Research",
              anchor: "#research",
            },
            {
              text: "Goal Definition & Metrics",
              anchor: "#goal-definition-metrics",
            },
            {
              text: "Workflow",
              anchor: "#workflow",
            },
            {
              text: "wireframes",
              anchor: "#wireframes",
            },
            {
              text: "Visual Design",
              anchor: "#visual-design",
            },
            {
              text: "Work with Developers",
              anchor: "#work-with-developers",
            },
            {
              text: "Demo",
              anchor: "#demo",
            }
            ]}
          />
            <div className="main">
              <h3>
                Fruito
              </h3>
              <span className="december-2016">
                March 2015 - present
              </span>
              <div className="content-label content-label-fruito">
              <span className="label">Research</span>
              <span className="label">UX Design</span>
              <span className="label">Visual Design</span><br/>
              <span className="label">Product Management</span><br/>
              <span className="label">Copy Writing</span>
              <span className="label">Marketing</span>
              </div>
              <section className="content-block fruito-intro">
                <div className="fruito-intro-wrap">
                  <img className="fruito-intro-img" src="fruito/bg@2x.png">
                  </img>
                </div>
                <div className="intro-how-fruito">
                  <span className="first-word">How</span>  to prevent fruits waste?
                    Each year, about <a href="https://www.newsmax.com/ScottRasmussen/consumption-household-nrdc/2017/11/17/id/826775/"><u>$218 billion</u></a> of food in the United States are thrown out.  Fruits and vegetable have the highest wastage rates of any food products and take <a href="https://www.newsmax.com/ScottRasmussen/consumption-household-nrdc/2017/11/17/id/826775/"><u>39%</u></a> of all the wasted food by household.
                </div>
                <div className="rectangle-division"></div>
                <div className="intro-with"><span className="first-word">In</span> a fast-pasing world, everything seems out of control, Fruito gives your control back by making fruits management smooth, effortless and flexible.</div>
                <div className="fruito-display-wrap">
                  <img className="fruito-display-1 img" src="fruito/fruito-display-1@2x.png"></img>
                  <img className="fruito-display-2 img" src="fruito/fruito-display-2@2x.png"></img>
                </div>
                <Slider {...settings} className="slider">
                  <div className="slider-wrap">
                    <img className="fruito-mobile img" src="fruito/display-1@2x.png">
                    </img>
                    <div className="fruito-laptop fruito-bg-1">
                      <div className="fruito-slick-title">Purchase reasonably</div>
                      <div className="fruito-slick-subtitle">Keep track of fruits</div>
                      <div className="fruito-slick-content">with knowing what fruits they have, users could make reasonable fruits purchasing plan, which save both money and time.</div>
                      <div className="fruito-slick-subtitle">Give advice about fruits purchase</div>
                      <div className="fruito-slick-content">with knowing how much fruits user’s body need, they could avoid over-purchasing. The app also encourages to eat seasonal fruits.</div>
                    </div>
                  </div>
                  <div className="slider-wrap">
                    <img className="fruito-mobile img" src="fruito/display-2@2x.png">
                    </img>
                    <div className="fruito-laptop fruito-bg-2">
                      <div className="fruito-slick-title">Store properly</div>
                      <div className="fruito-slick-subtitle">Give advice about how long the fruits could be kept</div>
                      <div className="fruito-slick-content">Users can plan their fruits eating</div>
                      <div className="fruito-slick-subtitle">The way to store the fruit properly</div>
                      <div className="fruito-slick-content">Users are able to keep fruits fresh longer.
                      </div>
                      <div className="fruito-slick-subtitle">The way to store the fruit properly</div>
                      <div className="fruito-slick-content">Users are able to keep fruits fresh longer.</div>
                    </div>
                  </div>
                  <div className="slider-wrap">
                    <img className="fruito-mobile img" src="fruito/display-3@2x.png">
                    </img>
                    <div className="fruito-laptop fruito-bg-3">
                      <div className="fruito-slick-title">Eat happily</div>
                      <div className="fruito-slick-subtitle">Interactions with the character makes eating fun</div>
                      <div className="fruito-slick-content">Gamify eating fruits</div>
                      <div className="fruito-slick-subtitle">Remind when fruits starts to getting bad</div>
                      <div className="fruito-slick-content">Plan eating fruits</div>
                      <div className="fruito-slick-subtitle">Data viz accomplishment for eating fruits</div>
                      <div className="fruito-slick-content">Reward eating fruits</div>
                    </div>
                  </div>
                  <div className="slider-wrap">
                    <img className="fruito-mobile img" src="fruito/display-4@2x.png">
                    </img>
                    <div className="fruito-laptop fruito-bg-4">
                      <div className="fruito-slick-title">Reuse wisely</div>
                      <div className="fruito-slick-subtitle">Offer advice when fruits are stale</div>
                      <div className="fruito-slick-content">Reuse fruits in your benefits</div>
                    </div>
                  </div>
                </Slider>
                <div className="attach-to-bg">
                <h5>Some fruits icons made by Freepik</h5>
                </div>
              </section>
              <section className="content-block" id={'challenge'}>
                <div className="section-title section-title-challenge">01_challenge</div>
              </section>
              <div className="section-sub-title"> How to prevent fruit waste? </div>
              <p>
                The idea came from my roommate, Peipei [pay-pay] when we lived in New York.
              </p>
              <p>
                As we were both far from home, newly moved to New York, and had busy study schedules, we went nuts everyday. Even worse Peipei’s parent constantly pushed her to eat veggies and fruits to stay healthy. She bought them every week but she forgot to eat them from time to time. So when she pull her black bananas out of the refrigerator with a desperate howl <HighLightOnVisible className="highlight-fruito">the third time that month</HighLightOnVisible>, I decided to do something.
              </p>
               <section className="content-block" id={'research'}>
                <div className="section-title">02_research</div>
              </section>
              <div className="section-sub-title"> Start with target audience </div>
               <p>
                With no clear mission or specific goals to prevent fruits waste, I started to interview my colleagues and classmates to get more clues about fruits thrown away experience.
              </p>
               <div className="project-img-div-long">
              <img
              src='fruito/persona@2x.png'/>
              </div>
              <h5>A persona based on Peipei</h5>
              <div><img/></div>
              <div className="project-img-div-long">
              <img
              src='fruito/x_mind@2x.png'/>
              </div>
               <p>
                The interview started from why people throw fruits away. Then I got <HighLightOnVisible className="highlight-fruito">a classic story</HighLightOnVisible> about fruits —
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/classic_story@2x.png'/>
              </div>
               <p>
                So <HighLightOnVisible className="highlight-fruito">people don’t love fruits as much as they think</HighLightOnVisible>.
              </p>
              <div className="project-img-div-long hd">
              <img
              src='fruito/emotion_map@2x.png'/>
              </div>
              <h5>A map of the fruits eating broken into three phases: forming the eating, executing the eating and follow-up.</h5>
              <p>Peak:<br/>1. Purchasing<br/>2. Eating</p>
              <p>Valley:<br/>1. Forget about fruits after storing<br/>2. Finding fruits gone bad and throw them</p>
              <div className="section-sub-title"> Math helps understanding the problem </div>
               <p>According to the interviews, the reasons leading to fruits thrown away turned out to be <HighLightOnVisible className="highlight-fruito">tiny but varied</HighLightOnVisible>.</p>
              <p>To understand what leads to the scenarios without stereotypes, I created a formula to help me.</p>
              <div className="project-img-div-long hd">
              <img
              src='fruito/math@2x.png'/>
              </div>
              <div><img/></div>
              <p>So any reasons <HighLightOnVisible className="highlight-fruito">encouraging</HighLightOnVisible> purchasing or <HighLightOnVisible className="highlight-fruito">discouraging</HighLightOnVisible> eating, storing and reusing could cause fruit wastes</p>
              <p>The problems are:</p>
              <ol>
                <li>
                How to purchase reasonable amount of fruits?
                </li>
                <li>
                How to keep fruits fresh longer?
                </li>
                <li>
                How to eat more fruits and eat often?
                </li>
                <li>
                  How to reuse fruits?
                </li>
              </ol>
              <p>
                Then I came up with my interview questions:
              </p>
               <ol>
                <li>
                What encourages you to buy fruits? What discourages you?
                </li>
                <li>
                How do you store your fruits?
                </li>
                <li>
                What makes you eat fruits? What prevents you eat fruits?
                </li>
                <li>
                  How do you deal with stale fruits?
                </li>
              </ol>
              <p>
              With those questions, I started to collect more clue about fruits related experience and understand the challenge.
              </p>
              <p>
              Among the 9 participants, only one of them never throw fruits away while 3 of them do it regularly.
              </p>
              <p>
              The answers are categorized as beblow—
              </p>
              <Slider {...settings} className="slider2">
                <div className="project-img-div-long">
                  <img
                src='fruito/purchase@2x.png'/>
                </div>
                <div className="project-img-div-long">
                  <img
                src='fruito/eat@2x.png'/>
                </div>
                <div className="project-img-div-long">
                  <img
                src='fruito/store@2x.png'/>
                </div>
                <div className="project-img-div-long">
                  <img
                src='fruito/reuse@2x.png'/>
                </div>
              </Slider>
              <section className="content-block" id={'goal-definition-metrics'}>
                <div className="section-title">03_Goal Definition & Metrics</div>
              </section>
              <div className="section-sub-title"> Improve fruits management experience for everyone, everywhere </div>
              <p>
                As people interact with fruits at various locations, people <HighLightOnVisible className="highlight-fruito">should be able to use the tool anywhere</HighLightOnVisible>.
              </p>
              <p>buying fruits — grocery stores<br/>
              storing fruits — home<br/>
              eating fruits — home/work/on the way<br/>
              throw fruits — home</p>

              <p>So I decided to <HighLightOnVisible className="highlight-fruito">design an app</HighLightOnVisible> since people could use it everywhere. </p>
              <div className="section-sub-title"> Recap the design challenge and metrics developing </div>
              <p>
                Before I could jump into designing the app, it was important to <HighLightOnVisible className="highlight-fruito">define success and understand the health of the fruits experience at scale</HighLightOnVisible>.
                </p>
              <p>I created 3 metric, time spent on purchasing fruits, frequency to eat fruits, fruits waste ratio. Each metric was measured before a tester had used the app and after.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/metrics@2x.png'/>
              </div>
              <p>
                After all these research, the goal of the app became clear and specific. The app would help people with fruits management by giving full control of the fruits to users.
              </p>
              <ol>
                <li>
                Pre-hint about fruit <HighLightOnVisible className="highlight-fruito">purchasing</HighLightOnVisible>
                </li>
                <li>
                Keep tracking of <HighLightOnVisible className="highlight-fruito">storing</HighLightOnVisible> fruits
                </li>
                <li>
                More fun to <HighLightOnVisible className="highlight-fruito">eat</HighLightOnVisible> fruits
                </li>
                <li>
                Tips for fruit <HighLightOnVisible className="highlight-fruito">reuse</HighLightOnVisible>
                </li>
              </ol>
              <section className="content-block" id={'workflow'}>
                <div className="section-title">04_Workflow</div>
              </section>
              <div className="section-sub-title">Start doing is more important than doing perfect.</div>
              <p>
              I listed down several app features. The core was the <HighLightOnVisible className="highlight-fruito">tracking system of fruits</HighLightOnVisible>. There were two derived features, the <HighLightOnVisible className="highlight-fruito">reminder</HighLightOnVisible> and the <HighLightOnVisible className="highlight-fruito">eating summary</HighLightOnVisible>.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/workflow@2x.png'/>
              </div>
               <section className="content-block" id={'wireframes'}>
                <div className="section-title">05_Wireframes</div>
              </section>
              <div className="section-sub-title">Improve fruits management experience for everyone, everywhere</div>
              <div className="display-tittle">1. How to record fruits purchase</div>
              <div className="project-img-div-long">
              <img
              src='fruito/input@2x.png'/>
              </div>
              <div><img/></div>
              <p>
                To record fruits purchase, I proposed three ideas. After several testing with a developer, manual entry was adopted by fruito v1.0 since it was stable and reliable.
              </p>
              <p>
              *In Fruito hackathon version, we changed it to <HighLightOnVisible className="highlight-fruito">camera + fruit</HighLightOnVisible>. Check the <a href="#/work/fruito#demo"><u>prototype video</u></a>.
              </p>
              <div className="display-tittle">2. How to improve the manual entry</div>
              <p>
                To improve the experience of manual entry, I introduced tappable fruits, which works well on saving users’ time on manual entry. Moreover, tappable seasonal fruits work for a better nutrition and environment. So glad that people found it really useful for adding fruits and for protecting the planet!
              </p>
              <p>
              Seasonal fruits varies from place to place. The database of seasonal fruits of different areas is huge, so I started with the <a href="https://docs.google.com/spreadsheets/d/1PBh_hj84I5pzB4BwmIjYsH8_cL3_Z9FTExOB29UB7J0/edit?usp=sharing"><u>database of United States</u></a> in general.
              </p>
              <div className="project-img-div-long hd">
              <img
              src='fruito/wireframe@2x.png'/>
              </div>
              <h5>The different greys helps me arranging the UI layers.</h5>


              <section className="content-block" id={'visual-design'}>
                <div className="section-title">06_Visual Design</div>
              </section>
              <div className="section-sub-title">Users can hate and love your design at the same time.</div>
              <p>
              With several UI iteration, I got some feedback to polish the UI. WholeFoods was a great place to do the prototype testing. 5 tests were completed in an hour.
              </p>

              <div className="project-img-div-long">
              <img
              src='fruito/fruito_v1@2x.png'/>
              </div>
              <div className="section-sub-title"> Learn from both the bad and the good. </div>
              <p>
                It was nice to have so much valuable feedback that I could digest with. I have more iterations later.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/ui_iteration@2x.png'/>
              </div>
              <img className="fruito-display" src="fruito/fruito UI-final.gif" width="264px" ></img>
               <section className="content-block" id={'work-with-developers'}>
                <div className="section-title">07_Work with Developers</div>
              </section>
              <div className="section-sub-title">As organized as possible</div>
              <p>Our team of two are actively building Fruito 1.0 in our leisure time.</p>
              <div className="project-img-div-long hd">
              <img
              src='fruito/ui_display@2x.png'/>
              </div>

             <section className="content-block" id={'demo'}>
                <div className="section-title">08_Demo</div>
              </section>
              <div className="section-sub-title">Embrace the machine learning tech!</div>
              <p>In July, we took <a href="https://www.hackathon.com/event/att-entertainment-hackathon---bay-area-46506954553"><u>ATT Hackathon</u></a> and really had a good time working with other developers and designers. We used core ML the first time to improve the adding fruits experience.</p>
               {/*<div className="project-img-div-long">
              <img
              src='fruito/att_bg@2x.png'/>
              </div>*/}
              <div className="image_carousel_fruito screen-rec">
                <div className="image_carousel_fruito_wrap">
                </div>
                <div className="image_carousel_fruito_video">
                  <iframe src="https://player.vimeo.com/video/284776865?autoplay=1&loop=1&autopause=0" allow="autoplay" width="240" height="520" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              </div>
              <h5>Take a glimpse of the Hackathon version</h5>
              <div className="little-blue-blink">
              <div>Let‘s prevent fruit waste togather!<img className="lbb" src="fruito/little-blue-blink.gif" height="80px" ></img></div>
              </div>

            </div>
        </div>
        <div className="pager-holder">
          <div className="previous-page link-to-palmdrive">
            <Link to="/work/palmdrive">
              <div className="project-index">Next Project</div>
              <div className="project-arrow-reverse"/>
              <div className="project-name">{previous_page}</div>
            </Link>
          </div>
          <div className="next-page link-to-newyear">
            <Link to="/work/newyear">
              <div className="project-index">Next Project</div>
              <div className="project-name">New Year Event</div>
                      <div className="project-arrow"/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
