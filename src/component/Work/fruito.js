import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';
import {Header, Footer, Navbar} from '../../component';

export class Fruito extends Component {
  render() {
    var previous_page = "< New Year Event Sprint";
    return (
      <div>
        <div className="work palmdrive">
          <Sidebar
            title={'Palmdrive Website'}
            items={[
              {
                text: "Background",
                anchor: "#background",
              },
              {
                text: "Deliver scalable information architecture",
                anchor: "#challenge",
              },
              {
                text: "Fully responsive design and more",
                anchor: "#logic-comes",
              },
              {
                text: "Design for storytelling",
                anchor: "#design-comes",
              },
              {
                text: "Design for what really matters",
                anchor: "#into-the-details",
              },
              {
                text: "Display with hierarchy",
                anchor: "#always-fun",
              },
              {
                text: "Repetitive element makes it consistent",
                anchor: "#hover-is",
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
              <p>Each year, about $218 billion of food in the United States are thrown out.  Fruits and vegetable have the highest wastage rates of any food products and take 39% of all the wasted food by household.</p>
              <p>To solve this problem, I created Fruito to improve fruits management experience to prevent fruits waste.</p>
              <section className="content-block" id={'background'}>
                <div className="section-title"> Background </div>
              </section>
              <p>
                The idea came from my roommate, Peipei [pay-pay] when we lived in New York.
              </p>
              <p>
                As we were both far from home, newly moved to New York, and had busy study schedules, we went nuts everyday. Even worse Peipei’s parent constantly pushed her to eat veggies and fruits to stay healthy. She bought them every week but she forgot to eat them from time to time. So when she pull her black bananas out of the refrigerator with a desperate howl the third time that month, I decided to do something.
              </p>

              <div className="section-sub-title"> My Role </div>
              <p>
                I designed from scratch and worked along with a developer to launch Fruito 1.0 on App Store in 12 weeks in 2015.
              </p>
              <p>
                In Feb, 2018, I started to work on Fruito 2.0.
              </p>
              <div className="project-img-div-long">
                <img
                className="project-img-long"
                src='/palmdrive/palmdrive-web-display_2018-05-31/palmdrive-web-display.png'
              />
              </div>
              <section className="content-block" id={'challenge'}>
                <div className="section-title"> Analysing the problem </div>
              </section>
              <div className="section-sub-title">Reverse derivation</div>
              <p>
                With no clear mission or specific goals to prevent fruits waste, I started to interview people around me to get more clues about fruits thrown away experience.
              </p>
              <p>
                The interview started from why people throw fruits away. Then I got a classic story about fruits —
              </p>
              <p>
                So people don’t love fruits as much as they think. 
              </p>
              <p>Peak:<br/>1. Purchasing<br/>2. Eating</p>
              <p>Valley:<br/>1. Forget about fruits after storing<br/>2. Finding fruits gone bad and throw them</p>
              
              <div className="section-sub-title">Method of exhaustion</div>
              <p>According to the interviews, the reasons leading to fruits thrown away turned out to be tiny but varied.</p>
              <p>To understand what leads to the scenarios without stereotypes, I created a formula to help me.</p>
              <p>So any reasons encouraging purchasing or discouraging eating, storing and reusing could cause fruit wastes</p>
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
              <section className="content-block" id={'logic-comes'}>
                <div className="section-title"> Improve fruits management experience for everyone, everywhere </div>
              </section>
              <p>
                As people interact with fruits at various locations, people should be able to use the tool anywhere.
              </p>
              <p>buying fruits — grocery stores<br/>
              storing fruits — home<br/>
              eating fruits — home/work/on the way<br/>
              throw fruits — home</p>

              <p>So I decided to design an app since people could use it everywhere. </p>

              <section className="content-block" id={'design-comes'}>
                <div className="section-title">Recap the design challenge and metrics developing</div>
              </section>
              <p>
                Before I could jump into designing the app, it was important to define success and understand the health of the fruits experience at scale.
                </p>
              <p>I created 3 metric, time spent on purchasing fruits, frequency to eat fruits, fruits waste ratio. Each metric was measured before a tester had used the app and after. 
              </p>
              <p>
                After all these research, the goal of the app became clear and specific. The app would help people with fruits management by giving full control of the fruits to users.
              </p>
              <ol>
                <li>
                Pre-hint about fruit purchasing
                </li>
                <li>
                Keep tracking of storing fruits
                </li>
                <li>
                More fun to eat fruits
                </li>
                <li>
                Tips for fruit reuse
                </li>
              </ol>
              <section className="content-block" id={'into-the-details'}>
                <div className="section-title">Introducing Fruito</div>
              </section>
              <p>
                In a fast-pasing world, everything seems out of control, Fruito gives your control back by making fruits management smooth, effortless and flexible.
              </p>
              <section className="content-block1" id={'into-the-details1'}>
                <div className="section-title1">- Purchase reasonably -</div>
              </section>
              <div className="section-sub-title"> Keep track of fruits </div>
              <p>
               with knowing what fruits they have, users could make reasonable fruits purchasing plan, which save both money and time.
              </p>
              <div className="section-sub-title"> Give advice about fruits purchase </div>
              <p>
               with knowing how much fruits user’s body need, they could avoid over-purchasing. The app also encourages to eat seasonal fruits.
              </p>
              <section className="content-block1" id={'into-the-details1'}>
                <div className="section-title1">- Store properly -</div>
              </section>
              <div className="section-sub-title"> Give advice about how long the fruits could be kept </div>
              <p>
               hey could plan their fruits eating
              </p>
              <div className="section-sub-title"> The way to store the fruit properly </div>
              <p>
               to keep fruits fresh longer
              </p>
              <section className="content-block1" id={'into-the-details1'}>
                <div className="section-title1">- Eat happily -</div>
              </section>
              <div className="section-sub-title"> Interactions with the character makes eating fun </div>
              <p>
               gamify eating fruits
              </p>
              <div className="section-sub-title"> Remind when fruits starts to getting bad </div>
              <p>
               plan eating fruits
              </p>
              <div className="section-sub-title"> Data viz accomplishment for eating fruits </div>
              <p>
               reward eating fruits
              </p>
              <section className="content-block1" id={'into-the-details1'}>
                <div className="section-title1">- Reuse wisely -</div>
              </section>
              <div className="section-sub-title"> Offer advice when fruits are stale </div>
              <p>
               reuse fruits in your benefits
              </p>
               <section className="content-block" id={'into-the-details'}>
                <div className="section-title">Transfering the analytics to design</div>
              </section>
              <div className="section-sub-title"> Start doing is more important than doing perfect. </div>
              <p>
              I listed down several app features. The core was the tracking system of fruits. There were two derived features, the reminder and the eating summary.
              </p>
              <div className="section-sub-title"> Thinking about UI when doing UX </div>
              <p>
              When it came to Fruito UI, three primary principles directed the design style, according to the feedback that I took from the interviews:
              <ol>
                <li>Fruit colors to be visually appealing</li>
                <li>Fruit shapes to be instinct</li>
                <li>Interactivity to be fun</li>
              </ol>
              </p>
              <p>
              So I drew a lot of vivid fruit icons to increase recognition. Users that interact with them would feel they interact with real fruits.
              </p>
              <div className="display-tittle">/ Fruits tracking system design /</div>
              <div className="section-sub-title"> How to record fruits purchase </div>
              <p>
                I proposed three ideas to record fruits purchase. After several testing with a developer, manual entry was adopted by fruito v1.0 since it was stable and reliable.
              </p>
              <p>
              *In Fruito 2.0, we changed it to camera + fruit since the image recognition accuracy has reached 95%.
              </p>
              <div className="section-sub-title"> How to improve the manual entry - Show tappable seasonal fruits! </div>
              <p>
                Tappable fruits work well on saving users’ time on manual entry. Moreover, I introduced tappable seasonal fruits for a better nutrition and environment. So glad that people found it really useful for adding fruits and for protecting the planet!
              </p>
              <p>
              Seasonal fruits varies from place to place. The database of seasonal fruits of different areas is huge, so I started with the database of United States in general. 
              </p>
              <div className="section-sub-title"> Getting hands messy </div>
              <p>
              After trying out some sketches, I started to do the wireframes. The different greys helps me arranging the UI layers.
              </p>
              <p>According to the thumb zones map by Luke Wroblewski, I arranged the fruit icons on the bottom of the screen.</p>
              <p>Seasonal fruits are set as a recommendation. The number of common seasonal fruits is around 6, the maximum is around 15.</p>
              <p>Clicking on a fruit is an easy way to add the fruit. Time to add a non-seasonal fruit is 3-5s while time to add a seasonal one only takes 1-3s.</p>
              <div className="section-sub-title"> Fruit status is the key </div>
              <p>
              When adding fruits, status could be adjusted, so countdown clock of fruit freshness could be seen anywhere anytime.
              </p>
              <div className="section-sub-title"> Eating fruits could be fun </div>
              <p>
              To make the interaction with fruits direct, I designed a mouth eating animation to mimic the eating process.
              </p>
              <div className="display-title"> / Reminder / </div>
              <div className="section-sub-title"> Be initiative </div>
              <p>
              Reminder could be set to encourage and arrange eating fruits.
              </p>
              <p>
              There are 3 kinds of reminder. The left one is to notify user when it’s time to eat fruits. The middle one is to remind user to buy fruits. The right one is to encourage user to keep a fruit eating habit.
              </p>
              <div className="display-title"> / History & Accomplishment / </div>
              <p>
              Rewarding is a great way to develop a habit. I also designed some accomplishment badges on the bottom of the screen for users to collect.
              </p>
              <section className="content-block" id={'into-the-details'}>
                <div className="section-title">Designing with users</div>
              </section>
              <p>
              With several UI iteration, I got some feedback to polish the UI. WholeFoods was a great place to do the prototype testing. 5 tests were completed in an hour.
              </p>
              <p>
              The various colors of fruits really gave me a big challenge in finding the perfect color scheme. 
              </p>
              <p>
              Some user feedbacks to specific designs are as follows:
              </p>
              <div className="section-sub-title"> Refining the UI from the feedback </div>
              <p>
                It was nice to have so much valuable feedback that I could digest with. More details were added to the next version.
              </p>
              <div className="section-sub-title"> 1. Responsive app UI </div>
              <div className="section-sub-title"> 2. Little Blue vs The Mouth </div>
              <p>I created a character with facial expressions like blinking, opening mouth, and chewing that users could interact with.
              </p>
              <p>
              With the introduction of Little Blue, it is easier for users to take suggestions or hints from it. Because with facial expressions, the words were more touching.
              </p>
              <div className="section-sub-title"> 3. Let the color shine </div>
              <p>I adjusted the color theme to be more contrast to emphasize the inviting fruits.
              </p>
              <div className="section-sub-title"> 4. Tip for storage, also mark of storage</div>
              <p>According the research, different fruits should be stored in different places. Fruits stored improperly ripen fast and then go bad easily. </p>

              <p>By following the tips on storing fruits, the app remember your fruits location.</p>
              <div className="section-sub-title"> 5. Deadline vs Status</div>
              <p>It’s not easy to identify the date when fruits are not edible from the fruit status (left) according to the interviews. So I changed it to a suggested expiration date (right).</p>
              <div className="section-sub-title"> 6. Search to add</div>
              <p>With search auto completion，it’s more convienient to add fruit.</p>
              <div className="section-sub-title"> 7. Fruit Eating Challenge vs Data Visualization </div>
              <p>While fruit eating challenge might encourage excessive fruit purchase since it was a game concept, I updated the way to show fruits consumption history in a table, rather than accomplishment badges.</p>
              <div className="section-sub-title"> 8. Simplifying the number system </div>
              <p>The number increases by 0.1 if it is below 1 and 1 if it is above 1. Users can also select from a bunches of units for variety.</p>
            </div>
        </div>
        <div>
          <div className="previous-page">
            <Link to="/work/newyear">
              <div className="project-index">Previous Project</div>
              <div>{previous_page}</div>
            </Link>
          </div>
          <div className="next-page">
            <Link to="/work/transaction">
              <div className="project-index">Next Project</div>
              <div>Transaction Management Design ></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
