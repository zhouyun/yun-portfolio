import React, { Component } from 'react';
import {Sidebar} from '../';
import ScrollableAnchor from 'react-scrollable-anchor'
import { HashLink as Link } from 'react-router-hash-link';

import './css/work.css';
import {Header, Footer, Navbar, HighLightOnVisible} from '../../component';

import ImageZoom from 'react-medium-image-zoom';
import Slider from "react-slick";


export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    >
      <img style={{ ...style, marginLeft:"60px" }}className="img slick-arrow-img arrow-down" src="fruito/up-1@2x.png"/>
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
      <img style={{ ...style, marginLeft:"-120px" }} className="img slick-arrow-img arrow-down" src="fruito/up-1-copy@2x.png"/>
    </div>
  );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

export class Petpair extends Component {
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

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    var previous_page = "Previous page";
    return (
      <div>
        <Sidebar
          title={'Palmdrive'}
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
              text: " Research & Results",
              anchor: "#research-results",
            },
            {
              text: "Flow & Wireframes",
              anchor: "#flow-wireframes",
            },
            {
              text: "High Fidelity & Strech Goal",
              anchor: "#high-fidelity",
            }
          ]}
        />
        <div className="work palmdrive">
            <div className="main palmdrive-main">
              <section className="content-block" id={'intro'}>
              </section>
              <h3>
                Petpair
              </h3>
              <span className="december-2016">
                October 2018
              </span>
              <div className="content-label">
                  <span className="label">Research</span>
                  <span className="label">Ideation</span>
                  <span className="label">Execution</span><br/>
                  <span className="label">Writing & Page building</span><br/>
                  </div>
              <section className="content-block palmdrive-intro">
                <div className="palmdrive-intro-wrap">
                  <img className="palmdrive-intro-img" src="petpair/bg-seed@2x.png">
                  </img>
                </div>
                <div className="intro-how"><span className="first-word">How</span> to create an experience that will help connect people looking for a new pet with the right companion for them?</div>
                <div className="rectangle-division"></div>
                <div className="intro-with intro-with-palmdrive"><span className="first-word">Petpair</span> helps you find the pets for you, and you for them.</div>
                <div className="greenone"></div>
                <img className="petpair-desktop img" src="petpair/desktop-pet@2x.png">
                </img>
                <div className="blueone"></div>
                <img className="petpair-web image_carousel img" src="petpair/petpair-browser@2x.png">
                </img>
                <Slider {...settings} className="slider-petpair">
                  <div className="petpair-browser petpair-content-1 img">
                  </div>
                  <div className="petpair-browser petpair-content-2 img">
                  </div>
                  <div className="petpair-browser petpair-content-3 img">
                  </div>
                  <div className="petpair-browser petpair-content-4 img">
                  </div>
                </Slider>
              </section>
              <div>
              <h5>Icons made by <u><a href="http://www.freepik.com" title="Freepik">Freepik</a></u></h5>
              <div className="display-tittle"><i>/ Thanks for the support from my recruitor Avery and interviewer Joel, so that I can make to this part. Thanks to all interviewees during my research and my tech support gal./</i></div>

                <p>As part of interview process with Google, I choose <HighLightOnVisible className="highlight-general">Pet Adoption</HighLightOnVisible> from the three because I feel emotionally connected to this topic.</p>
                <p>I used to have a great time with two cats and one duck that my grandma rescued from  streets. However, <HighLightOnVisible className="highlight-general">we don’t have shelters in China</HighLightOnVisible>, so I am really curious about <HighLightOnVisible className="highlight-general">how shelters work</HighLightOnVisible> in pet adoption system and excited about <HighLightOnVisible className="highlight-general">what I could do to help</HighLightOnVisible> based on the exercise.</p>
              </div>
              <section className="content-block" id={'challenge'}>
                <div className="section-title">01_Challenge</div>
              </section>
              <div className="section-sub-title"> Help the adopters and help the animals</div>
              <p>
              Before jumping into research, I started with analyzing the exercise —</p>
              <div className="display-tittle">
Millions of animals are currently in shelters and foster homes awaiting adoption. Design an experience that will help connect people looking for a new pet with the right companion for them. Help an adopter find a pet which matches their lifestyle, considering factors including breed, gender, age, temperament, and health status.</div>
          <p>
          It involves pets, shelters and adopters-to-be. 
          </p>
          <div className="petpair-project-img-div-long hd">
          <ImageZoom
                image={{
                  src: 'petpair/triangle.png',
                  alt: 'triangle',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/triangle@3x.png',
                  alt: 'triangle',
                  style: {
                    width: '2100px'
                  }
                }}
              />
          </div>
          <p>
            All design decisions should align with the <HighLightOnVisible className="highlight-general">Future forward</HighLightOnVisible> and the <HighLightOnVisible className="highlight-general">Grounded</HighLightOnVisible> principles.
          </p>
          
          <section className="content-block" id={'research-results'}>
                <div className="section-title">02_Research & results</div>
              </section>
              <div className="section-sub-title"> Start with preview</div>
              <p>
                Since I was not familiar with how pet adoption system works, I gave myself about 1 hour to do a rough research. I made some drafts on the paper and wrote down assumptions that I felt I need more details from the interviewers.</p>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/sketches@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/sketches@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>
                Since I was not familiar with how pet adoption system works, I gave myself about <HighLightOnVisible className="highlight-general">1 hour</HighLightOnVisible> to do a rough research. I made some drafts on the paper and wrote down assumptions that I felt I need more details from the interviewers.</p>
            <div className="section-sub-title"> Find out the audience</div>
            <p>
              With talking to several interviewers who have pets, age ranging from 20 to 60, I narrowed down my audience to people who are <HighLightOnVisible className="highlight-general">comfortable searching pet adoption information online</HighLightOnVisible> when they are planning to adopt a pet. Also I divided the audience by levels —<br/>

              1. People who are looking for a new pet to adopt. — <HighLightOnVisible className="highlight-general">Doers</HighLightOnVisible><br/>
2. People who are considering to adopt from shelters or buy from breeders. — <HighLightOnVisible className="highlight-general">Thinker</HighLightOnVisible><br/>
3. People who have direct interactions with pets in the past. — <HighLightOnVisible className="highlight-general">Observers</HighLightOnVisible>
            </p>
            <div className="petpair-project-img-div-long hd">
            <ImageZoom
                image={{
                  src: 'petpair/how@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/how@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
            </div>
            <p>
              <HighLightOnVisible className="highlight-general">Love is contagious.</HighLightOnVisible>
            </p>
             <div className="section-sub-title">Find out the problem</div>
             <p>
               Among the 7 interviews I did, I selected two typical ones to dive in.
             </p>
             <p>
               Ken and Lily adopted Coco when she was 7 months. They were categorized as my Audience #1.
             </p>
             <div className="petpair-project-img-div-long hd">
             <ImageZoom
                image={{
                  src: 'petpair/coco@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/coco@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
             <p>
               From Coco’s story, we know —<br/>
1. Rescued pets are not for everyone.<br/>
2. Cute cats are adopted fast.<br/>
3. A simpler tool could be used.<br/>
4. Videos are recommended.
             </p>
             <p>
               Tian and Xu bought new born Nana from a breeder. They were categorized as my Audience #2.
             </p>
             <div className="petpair-project-img-div-long hd">
             <ImageZoom
                image={{
                  src: 'petpair/nana@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/nana@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
             <p>
               From Nana’s story, we know —<br/>
1. Dogs have been trained for particular purpose. People who have committed to raise a dog prefer to have the dog meet their expectations.<br/>
2. Impact from social media can’t be ignored.<br/>
3. Shelters usually don’t have specific pure breed.
             </p>
             <p>
               Also some opinions were shared during the interview, those opinions are not necessarily true though—
             </p>
              <div className="display-tittle">“Old cats/dogs will never treat me as their owner.”— Ning, 25-30</div>
              <p>
                Old animals already show their true personality. A kitten/puppy can become very different years after you buy it. (Which is often the reason why they end up in shelters.)
              </p>
               <div className="display-tittle">“Shelters are shabby and narrow, pets aren’t happy there.” — Amy, 20-25
</div>
              <p>
                Pets from shelters are generally healthier because they get medical checks by professionals. Also pure breeds have more possibility to get genetic defect, which may cost a lot to cure. (Also a common reason why people give up their pets.)
              </p>
              <p>
                Moreover, adopting pets from shelters cost cheaper and adopters will have a lifetime resource from the community.

              </p>

              <div className="section-sub-title">Define the goal and metrics</div>
              <p>
                With all the findings, I set up my goals —<br/>

1. Find the pets best for them, and find the homes best for the pets. — <HighLightOnVisible className="highlight-general">Audience #1</HighLightOnVisible><br/>
2. Dispel the myths, educate adopters-to-be with knowledge about shelters and shelter animals. — <HighLightOnVisible className="highlight-general">Audience #2</HighLightOnVisible><br/>
3. Provide more appropriate methods for larger groups to join the community to help animals. — <HighLightOnVisible className="highlight-general">Audience #3</HighLightOnVisible>
              </p>
              <p>
                
Since it will not launch soon, I won’t dig into the metrics too much. But here comes the idea— <br/>
1. Time spend on finding the match pets<br/>
2. Test on shelters and shelter animals knowledge<br/>
3. Traffic and demographics change from google analytics on this solution

              </p>

              <section className="content-block" id={'flow-wireframes'}>
                <div className="section-title">03_Flow & wireframes</div>
              </section>
              <div className="section-sub-title">Website is a more intuitive and reasonable platform </div>
              <p>
                I chose website as the platform according to my interviewers’ experience — <br/>
1. Google search help them find the shelter’s website. — <HighLightOnVisible className="highlight-general">easy access</HighLightOnVisible><br/>
2. It’s a big deal, they prefer to take time sitting in front a laptop to do all the emails and research. — <HighLightOnVisible className="highlight-general">high efficiency</HighLightOnVisible><br/>
3. It usually happens once in a certain period of time, they will consider the second adoption after getting really acquainted with the first one. — <HighLightOnVisible className="highlight-general">low frequency</HighLightOnVisible>

              </p>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/time@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/time@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>
              <h5>
                Petpair collects and processes information from other shelters’ websites for now. Although, a website will be a perfect tool for people who want to adopt pets, an app might be a better choice for shelters if they run their organizations on Petpair, since they will use it everyday.
              </h5>
              <div className="section-sub-title">Sketch & user testing </div>
              <p>
                The features, actions and flow were already on my mind after the phases above, I did the first sketch and marked the part which needed more thoughts and feedback, then did some iterations.
              </p>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/flow@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/flow@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>
                Since the logic was pretty clear to me, I started the wireframes in Sketch.
              </p>
              <p>
                Here is the final version after several iterations.
              </p>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/wireframe-all@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/wireframe-all@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>The whole experience were divided into 4 parts - onboarding, exploring, collaborating and connecting.
              </p>
              <div className="section-sub-title">Going into details</div>
              <p>Walking through <HighLightOnVisible className="highlight-general">as a first time user</HighLightOnVisible> to the website —</p>
              <div className="display-tittle"> 1. Onboarding
              </div>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/wireframe-1@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/wireframe-1@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>After entering the homepage, a notification pops up from the bottom. It gives users the welcome and points out what the website is about. It explains why the user should do it and gives the expected time of doing the questionnaire which reduces the negative emotion to take it.</p>
              <p> The questionnaire floats above the website and background greys out to allow the user focus on the questionnaire. To get the user start without feeling overwhelmed, the questionnaire has several most important questions.(What and how many questions will be decided after more research) Each time the user selects an option, related filters are displayed and added to future search or tips are shown below. The instant interaction helps the user understand why the question exists and what to expect in the situation. All the questions should be straightforward, but if the user need some time to think and come back to the question later, s/he can use the process indicator to anchor to the question. </p>
              <p>After completing the questionnaire, the user gets a view with a loading indicator. The “processing time” gives feedback on the search progress which comforts the user. Moreover, the user can use the time to create an account and even become a subscriber. Then the user will get notification of the new pets matching his situation as soon as they arrive. (Cute ones gone fast!!!)  The account registration flow is pretty standard.</p>
              <p>The user can close the view at any time</p>
              <div className="display-tittle">Summary
              </div>
              <p>The <HighLightOnVisible className="highlight-general">questionnaire system</HighLightOnVisible> was designed to serve Goal #2 mainly. Pet adoption is hard, and we are here to help you learn. Your pet and you both need that.</p>




              <div className="display-tittle"> 2. Exploring
              </div>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/wireframe-2@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/wireframe-2@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>On the explore view, the filters created during the questionnaire are displayed. (Pet’s turn to select the user is done.) The user can also add more filters using the dropdown menu above. (Now it’s the user’s turn.) If the user is not sure about what filter s/he should add, s/he can click “not sure” button to take a more detailed questionnaire. Questions are sorted for different purpose: beginners, amateurs and pros. (A fuzzy search feature could be added as a list view menu in the future.) The filters allow the user to play around and save the results for the future. The user can change distance to refind the pets or change the sorting method to redisplay the pets. If there is no match or very few matches, some recommended pets are displayed since the user might be willing to compromise their filters to a certain extent.</p>
              <p> Each card shows the summary information of the pet, highlighting the characteristic. A video will be played after hovering on the pet profile picture, so the user will get a prominent idea about the shape, pattern, status of the pet. S/he can save the pet if s/he likes it.</p>
              <p>The fixed next and previous buttons allow the user to browse between pets seamlessly and easily. Instead of boring the user with chunks of words, the information is customized according to the user’s situation. It provides both why the user should chose this pet and what should be paid more attention to. Pet living location and contact information are displayed at the bottom of this page. The user can click the profile to see more about the place or check the reviews on google map. </p>
              <div className="display-tittle">Summary
              </div>
              <p>The <HighLightOnVisible className="highlight-general">filter system</HighLightOnVisible> was designed to serve Goal #1 mainly. With a better tool, we can serve our users and animals better.</p>



              <div className="display-tittle"> 3. Collaborating
              </div>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/wireframe-3@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/wireframe-3@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>Each collection is under one questionnaire with specific filters. Half of my interviewers have considered to have another pet in the future. If they move from an apartment to an house, their considerations will change, however, with the same account, they can edit filters from the past or plan to adopt for the future.</p>
              <p>The user can share collections via email, everyone who will live with the pet has the right and responsibility to know about it. The final vote result will show on the user’s account.</p>
              <div className="display-tittle">Summary
              </div>
              <p>The <HighLightOnVisible className="highlight-general">collbrating system</HighLightOnVisible> was designed to serve Goal #1 and Goal #3. Getting everyone onboard is a crucial way to reduce conflicts beforehand. Moreover, the tool makes the applicable scenarios broader like dormitory pet or office pet. The adorable animals could use more hands and more space :)</p>



              <div className="display-tittle"> 4. Connecting
              </div>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/wireframe-4@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/wireframe-4@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>The homepage highlights streaming channels for pets at the top. If adopting is not the most reasonable way for the user to have a companion or give love to animals, s/he can watch their channels, interact with them live or donate to others’ pet who needs help. The page is functioning like a Petpair Post for the community, this part could use some designer, journalist, video editors and Youtubers as volunteers. </p>
              <div className="display-tittle">Summary
              </div>
              <p>The <HighLightOnVisible className="highlight-general">conneting system</HighLightOnVisible> was designed to serve Goal #3 mainly. Connect more, share more, know more, then do more. Because love is contagious.</p>

              <section className="content-block" id={'high-fidelity'}>
                <div className="section-title">04_High fidelity & stretch goal</div>
              </section>
              <div className="section-sub-title">Let’s learn and decide together</div>
              <p>
                The differentiators of my solution are —<br/>
1. Educational<br/>
2. Collaboration-trending<br/>
3. Community
              </p>
              
              <div className="display-tittle">Educational</div>
              <p>While traditional questionnaire is always one way, Petpair focuses on interactivity, which automatically provides tips and adds filters, helping users learn about pet adoption. Moreover, user can play around different options to learn more, and I believe our animal friends deserve our efforts to learn how to take care of them better.</p>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/educational@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/educational@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p>While traditional questionnaire is always one way, Petpair focuses on interactivity, which automatically provides tips and adds filters, helping users <HighLightOnVisible className="highlight-general">learn about pet adoption</HighLightOnVisible>. Moreover, user can play around different options to learn more, and I believe our animal friends deserve our efforts to learn how to take care of them better.</p>
               <div className="display-tittle">Collaboration-trending</div>
              <p>When a family decides to have a pet together, they will share the responsibility and rights. So we should <HighLightOnVisible className="highlight-general">have everyone onboard</HighLightOnVisible> to help make the best decision.</p>
              <p>Same as roommates, classmates and colleagues, sharing pets are also decent options. We can have a hamster, Momo raised in our classroom, 6 year old Joe and Mike will take care of him this week, and learn more about biology and parenting. We can have a cat, Fishey raised in our office, be our therapy cat, and Ken take her home this weekend.</p>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/collabration@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/collabration@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <div className="display-tittle">Community</div>
              <div className="petpair-project-img-div-long hd">
              <ImageZoom
                image={{
                  src: 'petpair/homepage@2x.png',
                  style: {
                    width: '700px'
                  }
                }}
                zoomImage={{
                  src: 'petpair/homepage@3x.png',
                  style: {
                    width: '2100px'
                  }
                }}
              />
              </div>
              <p><HighLightOnVisible className="highlight-general">Awareness should be raised.</HighLightOnVisible> The first step we could do is to have a way to let them involve with our daily lives. My friends spend tons of time watching cats on Youtube, what if we offer them a simple way to sponsor the channel? What if we show a poster of joining party live with cute kittens as ads?  Admitting the bar of pet adoption is high, finding various ways for people to participate is the key.</p>
              <p>I sincerely invite Ed Sheeran, Taylor Swift and Selena Gomez to join us! (If they are not the most popular ones, sorry I am not really familiar with American celebrities🤷.)</p>

              <div className="display-tittle">Summary</div>
              <p><HighLightOnVisible className="highlight-general">Youtube</HighLightOnVisible> will be a great support for pet adoption boost. <HighLightOnVisible className="highlight-general">Gmail</HighLightOnVisible> and <HighLightOnVisible className="highlight-general">Google Maps</HighLightOnVisible> are the tools involved in the system already. I don’t have a TV myself, but I know <HighLightOnVisible className="highlight-general">Google Now</HighLightOnVisible> could help to show those cute animals’ pictures that  also introduces a way to bring more observers!</p>
              <div className="display-tittle">We can have so many opportunities to connect people and animals, lead them from observer to doer. Then we are making the world a better place, especially for the animals.</div>
               <div className="little-blue-blink">Let’s just keep calm and move on.</div>
               <img className="lbb" src="petpair/move-on.gif" height="120px" ></img>




    
              </p>
            </div>
        </div>
      </div>
    );
  }
}
