import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

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
    var previous_page = "Previous page";
    return (
      <div>
        <div className="work palmdrive">
          <Sidebar
            title={'Fruits Management App'}
            items={[
              {
                text: "Background",
                anchor: "#background",
              },
              {
                text: "Analysing the problem",
                anchor: "#analysing-the-problem",
              },
              {
                text: "Improve fruits management experience for everyone, everywhere",
                anchor: "#improve-fruits",
              },
              {
                text: "Recap the design challenge and metrics developing",
                anchor: "#recap",
              },
              {
                text: "Introducing Fruito",
                anchor: "#introducing",
              },
              {
                text: "Transfering the analytics to designs",
                anchor: "#transfering-the-analytics-to-design",
              },
              {
                text: "Designing with users",
                anchor: "#designing-with-users",
              },
              {
                text: "Bring it to reality",
                anchor: "#bring-it-to-reality",
              }
            ]}
          />
            <div className="main">
              <h3>
                Fruits Management App
              </h3>
              <span className="december-2016">
                March 2015 - present
              </span>
              <p>Each year, about <a href="https://www.newsmax.com/ScottRasmussen/consumption-household-nrdc/2017/11/17/id/826775/"><u>$218 billion</u></a> of food in the United States are thrown out.  Fruits and vegetable have the highest wastage rates of any food products and take <a href="https://www.newsmax.com/ScottRasmussen/consumption-household-nrdc/2017/11/17/id/826775/"><u>39%</u></a> of all the wasted food by household.</p>
              <p>To solve this problem, I created Fruito to <HighLightOnVisible className="highlight-fruito">improve fruits management experience</HighLightOnVisible> to prevent fruits waste.</p>
              <section className="content-block" id={'background'}>
                <div className="section-title"> Background </div>
              </section>
              <p>
                The idea came from my roommate, Peipei [pay-pay] when we lived in New York.
              </p>
              <p>
                As we were both far from home, newly moved to New York, and had busy study schedules, we went nuts everyday. Even worse Peipei’s parent constantly pushed her to eat veggies and fruits to stay healthy. She bought them every week but she forgot to eat them from time to time. So when she pull her black bananas out of the refrigerator with a desperate howl <HighLightOnVisible className="highlight-fruito">the third time that month</HighLightOnVisible>, I decided to do something.
              </p>

              <div className="section-sub-title"> My Role </div>
              <p>
                I designed from scratch and worked along with a developer to launch Fruito 1.0 on App Store in 12 weeks in 2015.
              </p>
              <p>
                In Feb, 2018, I started to work on Fruito 2.0.
              </p>
              <div className="project-img-div-long fruito-gif">
              <img
              src='fruito/group-9@2x.png'/>
              </div>
              <img className="fruito-display" src="fruito/fruito UI-final.gif" width="264px" ></img>
              <section className="content-block" id={'analysing-the-problem'}>
                <div className="section-title"> Analysing the problem </div>
              </section>
              <div className="section-sub-title">Reverse derivation</div>
              <p>
                With no clear mission or specific goals to prevent fruits waste, I started to interview people around me to get more clues about fruits thrown away experience.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/xmind/bitmap@2x.png'/>
              </div>
              <p>
                The interview started from why people throw fruits away. Then I got <HighLightOnVisible className="highlight-fruito">a classic story</HighLightOnVisible> about fruits —
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-2@2x.png'/>
              </div>
              <p>
                So <HighLightOnVisible className="highlight-fruito">people don’t love fruits as much as they think</HighLightOnVisible>.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/artboard@2x.png'/>
              </div>
              <h5>A map of the fruits eating broken into three phases: forming the eating, executing the eating and follow-up.</h5>
              <p>Peak:<br/>1. Purchasing<br/>2. Eating</p>
              <p>Valley:<br/>1. Forget about fruits after storing<br/>2. Finding fruits gone bad and throw them</p>

              <div className="section-sub-title">Method of exhaustion</div>
              <p>According to the interviews, the reasons leading to fruits thrown away turned out to be <HighLightOnVisible className="highlight-fruito">tiny but varied</HighLightOnVisible>.</p>
              <p>To understand what leads to the scenarios without stereotypes, I created a formula to help me.</p>
              <div className="project-img-div-long">
              <img
              src='fruito/group@2x.png'/>
              </div>
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
              <div className="project-img-div-long">
              <img
              src='fruito/group-3@2x.png'/>
              </div>
              <div className="project-img-div-long">
              <img
              src='fruito/group-4@2x.png'/>
              </div>
              <div className="project-img-div-long">
              <img
              src='fruito/group-5@2x.png'/>
              </div>
              <div className="project-img-div-long">
              <img
              src='fruito/group-6@2x.png'/>
              </div>
              <section className="content-block" id={'improve-fruits'}>
                <div className="section-title"> Improve fruits management experience for everyone, everywhere </div>
              </section>
              <p>
                As people interact with fruits at various locations, people <HighLightOnVisible className="highlight-fruito">should be able to use the tool anywhere</HighLightOnVisible>.
              </p>
              <p>buying fruits — grocery stores<br/>
              storing fruits — home<br/>
              eating fruits — home/work/on the way<br/>
              throw fruits — home</p>

              <p>So I decided to <HighLightOnVisible className="highlight-fruito">design an app</HighLightOnVisible> since people could use it everywhere. </p>

              <section className="content-block" id={'recap'}>
                <div className="section-title">Recap the design challenge and metrics developing</div>
              </section>
              <p>
                Before I could jump into designing the app, it was important to <HighLightOnVisible className="highlight-fruito">define success and understand the health of the fruits experience at scale</HighLightOnVisible>.
                </p>
              <p>I created 3 metric, time spent on purchasing fruits, frequency to eat fruits, fruits waste ratio. Each metric was measured before a tester had used the app and after.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/metric/bitmap@2x.png'/>
              </div>
              <div className="project-img-div-long">
              <img
              src='fruito/group-8@2x.png'/>
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
              <section className="content-block" id={'introducing'}>
                <div className="section-title">Introducing Fruito</div>
              </section>
              <p>
                In a fast-pasing world, everything seems out of control, Fruito <HighLightOnVisible className="highlight-fruito">gives your control back</HighLightOnVisible> by making fruits management smooth, effortless and flexible.
              </p>
              <section className="content-block1" >
                <div className="section-title1">-Purchase reasonably-</div>
              </section>
              <div className="section-sub-title"> Keep track of fruits </div>
              <p>
               with knowing what fruits they have, users could make <HighLightOnVisible className="highlight-fruito">reasonable fruits purchasing plan</HighLightOnVisible>, which save both money and time.
              </p>
              <div className="section-sub-title"> Give advice about fruits purchase </div>
              <p>
               with knowing how much fruits user’s body need, they could <HighLightOnVisible className="highlight-fruito">avoid over-purchasing</HighLightOnVisible>. The app also encourages to eat seasonal fruits.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-22@2x.png'/>
              </div>
              <section className="content-block1" >
                <div className="section-title1">-Store properly-</div>
              </section>
              <div className="section-sub-title"> Give advice about how long the fruits could be kept </div>
              <p>
               Users can plan their fruits eating
              </p>
              <div className="section-sub-title"> The way to store the fruit properly </div>
              <p>
               Users are able to keep fruits fresh longer.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-21@2x.png'/>
              </div>
              <section className="content-block1" >
                <div className="section-title1">-Eat happily-</div>
              </section>
              <div className="section-sub-title"> Interactions with the character makes eating fun </div>
              <p>
               Gamify eating fruits
              </p>
              <div className="section-sub-title"> Remind when fruits starts to getting bad </div>
              <p>
               Plan eating fruits
              </p>
              <div className="section-sub-title"> Data viz accomplishment for eating fruits </div>
              <p>
               Reward eating fruits
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-20@2x.png'/>
              </div>
              <section className="content-block1" id={'into-the-details1'}>
                <div className="section-title1">-Reuse wisely-</div>
              </section>
              <div className="section-sub-title"> Offer advice when fruits are stale </div>
              <p>
               Reuse fruits in your benefits
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/i-phone-8-copy-27@2x.png'/>
              </div>
              <section className="content-block" id={'transfering-the-analytics-to-design'}>
                <div className="section-title">Transfering the analytics to design</div>
              </section>
              <div className="section-sub-title"> Start doing is more important than doing perfect. </div>
              <p>
              I listed down several app features. The core was the <HighLightOnVisible className="highlight-fruito">tracking system of fruits</HighLightOnVisible>. There were two derived features, the <HighLightOnVisible className="highlight-fruito">reminder</HighLightOnVisible> and the <HighLightOnVisible className="highlight-fruito">eating summary</HighLightOnVisible>.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-10@2x.png'/>
              </div>
              <div className="section-sub-title"> Thinking about UI when doing UX </div>
              <p>
              When it came to Fruito UI, <HighLightOnVisible className="highlight-fruito">three primary principles</HighLightOnVisible> directed the design style, according to the feedback that I took from the interviews:
              <ol>
                <li>Fruit colors to be visually appealing</li>
                <li>Fruit shapes to be instinct</li>
                <li>Interactivity to be fun</li>
              </ol>
              </p>
              <p>
              So I drew a lot of vivid fruit icons to <HighLightOnVisible className="highlight-fruito">increase recognition</HighLightOnVisible>. Users that interact with them would feel they interact with real fruits.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-11@2x.png'/>
              </div>
              <div className="display-tittle">/ Fruits tracking system design /</div>
              <div className="section-sub-title"> How to record fruits purchase </div>
              <div className="project-img-div-long">
              <img
              src='fruito/bitmap@2x.png'/>
              </div>
              <p>
                I proposed three ideas to record fruits purchase. After several testing with a developer, manual entry was adopted by fruito v1.0 since it was stable and reliable.
              </p>
              <p>
              *In Fruito 2.0, we changed it to <HighLightOnVisible className="highlight-fruito">camera + fruit</HighLightOnVisible> since the image recognition accuracy has reached 95%.
              </p>
              <div className="section-sub-title"> How to improve the manual entry - Show tappable seasonal fruits! </div>
              <p>
                Tappable fruits work well on saving users’ time on manual entry. Moreover, I introduced tappable seasonal fruits for a better nutrition and environment. So glad that people found it really useful for adding fruits and for protecting the planet!
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-8@2x.png'/>
              </div>
              <p>
              Seasonal fruits varies from place to place. The database of seasonal fruits of different areas is huge, so I started with the database of United States in general.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/excel/bitmap@2x.png'/>
              </div>
              <h5>Seasonal fruits of United States in general</h5>
              <div className="section-sub-title"> Getting hands messy </div>
              <p>
              After trying out some sketches, I started to do the wireframes. The different greys helps me <HighLightOnVisible className="highlight-fruito">arranging the UI layers</HighLightOnVisible>.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/wireframe1/bitmap@2x.png'/>
              </div>
              <p>According to the <HighLightOnVisible className="highlight-fruito"><a href="https://cloudup.com/cWi5XVaw2wV"><u>thumb zones map</u></a></HighLightOnVisible> by Luke Wroblewski, I arranged the fruit icons on the <HighLightOnVisible className="highlight-fruito">bottom of the screen</HighLightOnVisible>.</p>
              <p>Seasonal fruits are set as a recommendation. The number of common seasonal fruits is around 6, the maximum is around 15.</p>
              <p>Clicking on a fruit is an easy way to add the fruit. Time to add a non-seasonal fruit is 3-5s while time to add a seasonal one only takes <HighLightOnVisible className="highlight-fruito">1-3s</HighLightOnVisible>.</p>
              <div className="section-sub-title"> Fruit status is the key </div>
              <p>
              When adding fruits, status could be adjusted, so <HighLightOnVisible className="highlight-fruito">countdown clock of fruit freshness</HighLightOnVisible> could be seen anywhere anytime.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/wireframe2/bitmap@2x.png'/>
              </div>
              <div className="section-sub-title"> Eating fruits could be fun </div>
              <p>
              To make the interaction with fruits direct, I designed a <HighLightOnVisible className="highlight-fruito">mouth eating animation</HighLightOnVisible> to mimic the eating process.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/wireframe3/bitmap@2x.png'/>
              </div>
              <div className="display-tittle"> / Reminder / </div>
              <div className="section-sub-title"> Be initiative </div>
              <p>
              Reminder could be set to <HighLightOnVisible className="highlight-fruito">encourage and arrange</HighLightOnVisible> eating fruits.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/wireframe4/bitmap@2x.png'/>
              </div>
              <p>
              There are 3 kinds of reminder. The left one is to notify user when it’s time to <HighLightOnVisible className="highlight-fruito">eat</HighLightOnVisible> fruits. The middle one is to <HighLightOnVisible className="highlight-fruito">remind</HighLightOnVisible> user to buy fruits. The right one is to <HighLightOnVisible className="highlight-fruito">encourage</HighLightOnVisible> user to keep a fruit eating habit.
              </p>
              <div className="display-tittle"> / History & Accomplishment / </div>
              <p>
              <HighLightOnVisible className="highlight-fruito">Rewarding is a great way to develop a habit.</HighLightOnVisible> I also designed some <HighLightOnVisible className="highlight-fruito">accomplishment badges</HighLightOnVisible> on the bottom of the screen for users to collect.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/wireframe5/bitmap@2x.png'/>
              </div>
              <div className="project-img-div-long">
              <img
              src='fruito/wireframe@2x.png'/>
              </div>
              <section className="content-block" id={'designing-with-users'}>
                <div className="section-title">Designing with users</div>
              </section>
              <p>
              With several UI iteration, I got some feedback to polish the UI. WholeFoods was a great place to do the prototype testing. 5 tests were completed in an hour.
              </p>
              <p>
              The various colors of fruits really gave me a big challenge in finding the perfect color scheme.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-8-copy@2x.png'/>
              </div>
              <p>
              Some user feedbacks to specific designs are as follows:
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-12@2x.png'/>
              </div>
              <div className="section-sub-title"> Refining the UI from the feedback </div>
              <div className="project-img-div-long">
              <img
              src='fruito/group-8-copy-2@2x.png'/>
              </div>
              <p>
                It was nice to have so much valuable feedback that I could digest with. More details were added to the next version.
              </p>
              <div className="section-sub-title"> 1. Responsive app UI </div>
              <img className="image_carousel" src="fruito/little blue.gif" width="250px" ></img>
              <div className="section-sub-title"> 2. Little Blue vs The Mouth </div>
              <p>I created a character with <HighLightOnVisible className="highlight-fruito">facial expressions</HighLightOnVisible> like blinking, opening mouth, and chewing that users could interact with.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-13@2x.png'/>
              </div>
              <p>
              With the introduction of Little Blue, it is easier for users to take suggestions or hints from it. Because with facial expressions, the words were more touching.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-14@2x.png'/>
              </div>
              <div className="section-sub-title"> 3. Let the color shine </div>
              <p>I adjusted the color theme to be more contrast to emphasize the inviting fruits.
              </p>
              <div className="project-img-div-long">
              <img
              src='fruito/color/bitmap@2x.png'/>
              </div>
              <div className="section-sub-title"> 4. Tip for storage, also mark of storage</div>
              <p>According the research, different fruits should be stored in different places. Fruits stored improperly ripen fast and then go bad easily. </p>

              <p>By following the tips on storing fruits, the app <HighLightOnVisible className="highlight-fruito">remember your fruits location</HighLightOnVisible>.</p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-19@2x.png'/>
              </div>
              <div className="section-sub-title"> 5. Deadline vs Status</div>
              <p>It’s not easy to identify the date when fruits are not edible from the fruit status (left) according to the interviews. So I changed it to a <HighLightOnVisible className="highlight-fruito">suggested expiration date</HighLightOnVisible> (right).</p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-15@2x.png'/>
              </div>
              <div className="section-sub-title"> 6. Search to add</div>
              <p>With <HighLightOnVisible className="highlight-fruito">search auto completion</HighLightOnVisible>，it’s more convienient to add fruit.</p>

              <img className="image_carousel"
              src='fruito/search auto completion.gif'width="250px"/>

              <div className="section-sub-title"> 7. Fruit Eating Challenge vs Data Visualization </div>
              <p>While fruit eating challenge might encourage excessive fruit purchase since it was a game concept, I updated the way to <HighLightOnVisible className="highlight-fruito">show fruits consumption history</HighLightOnVisible> in a table, rather than accomplishment badges.</p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-17@2x.png'/>
              </div>
              <div className="section-sub-title"> 8. Simplifying the number system </div>
              <p>The number increases by 0.1 if it is below 1 and 1 if it is above 1. Users can also select from a bunches of units for variety.</p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-18@2x.png'/>
              </div>
              <div className="section-sub-title"> 9. Celebrating for all interfaces </div>
              <p>I grouped interfaces into several categories so that they could be easily managed.</p>
              <div className="project-img-div-long">
              <img
              src='fruito/group-7@2x.png'/>
              </div>
             <section className="content-block" id={'bring-it-to-reality'}>
                <div className="section-title"> Bring it to reality</div>
              </section>
              <p>Our team of two launched the Fruito 1.0 in 2015. With the feedback from the launching, we are actively building Fruito 2.0 in our leisure time. We will launch it this August :)</p>
              <div className="project-img-div-long">
              <img
              src='fruito/thesis@2x.png'/>
              </div>
              <h5>People are trying out Fruito on the beta version</h5>
              <div className="little-blue-blink">
              <div>Come say hi to Little Blue!<img className="lbb" src="fruito/little-blue-blink.gif" height="80px" ></img></div>
              </div>

            </div>
        </div>
        <div className="pager-holder">
          <div className="next-page link-to-palmdrive">
            <Link to="/work/palmdrive">
              <div className="project-index">Next Project</div>
              <div className="project-name">Palmdrive Website</div>
                      <div className="project-arrow"/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
