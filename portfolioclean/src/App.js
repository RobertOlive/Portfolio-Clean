import React, { Component } from 'react';
import Header from "./components/Header";
import Profile from "./components/images/Profile.jpg";
import Casus from "./components/images/Casus.png";
import strukture from "./components/images/strukture.png";
import codeTutor from "./components/images/codeTutor.png";
import SectionHead from "./components/SectionHead";
import Email from "./components/images/email.png";
import Github from "./components/images/github.png";
import Linkedin from "./components/images/linkedin.png";

class App extends Component {
  render() {
    return (
      <div className="parent">

        <Header />

        <div className = 'hero-image home'>
            <div className = 'hero-text'>
                <h1>Robert Olive</h1>
                <p>Web Developer</p>
                <button className = "contact-button">Get in touch</button>
            </div>
        </div>

        <div className = 'container-fluid main'>
            <div className = 'row about'>
                <SectionHead sectionTitle="About" />
                <div className = 'col-sm profile-image'>
                    <img className='profilepic' src={Profile} alt="Profile"  />
                </div>

                <div className = 'col-sm abouttext'>
                        Former construction surveyor with a newfound focus on web development. 
                        Strong experience with building client relationships, supervising a small team, and executing a plan effectively while maintaining the ability to adapt. 
                        Proficient in web development gained in a boot camp environment, including HTML, CSS, JavaScript, JQuery, Node.js, and MySQL. 
                        Aim to utilize varied background along with newly acquired skills to become a capable web developer with an emphasis on quality.
                </div>
            </div>

            <div className = 'row portfolio'>
                <SectionHead sectionTitle="Portfolio" />

                <div className ="col-sm work">
                    <a href = "http://strukture.herokuapp.com/">
                    <img src={strukture} className ="auth-image" alt="strukture"/>

                    <h3>strukture</h3>
                    </a>
                </div>

                <div className ="col-sm work">
                    <a href = "https://robertolive.github.io/codeTutor/">
                    <img src={codeTutor} className ="auth-image" alt="codeTutor"/>
                
                    <h3>codeTutor</h3>
                    </a>
                </div>

                <div className ="col-sm work">
                    <a href = "https://radiant-eyrie-36675.herokuapp.com/">
                    <img src={Casus} className ="auth-image" alt="Casus"/>
    
                    <h3>Casus</h3>
                    </a>
                </div>

            </div>

            <div className="row contact">
                <SectionHead sectionTitle="Contact" />

                <div className="col-sm social">
                    <a href="mailto:robert.aaron.olive@gmail.com">
                        <img src={Email} alt="Email"/>
                    </a>
                </div>

                <div className="col-sm social">
                    <a href="https://github.com/RobertOlive">
                        <img src={Github} alt="Github"/>
                    </a>
                </div>

                <div className="col-sm social">
                    <a href="https://www.linkedin.com/in/robert-olive/">
                        <img src={Linkedin} alt ="LinkedIn"/>
                    </a>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
