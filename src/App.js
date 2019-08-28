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
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }


    return (
      <div className="parent">

        <Header />

        <div className = 'hero-image home'>
            <div className = 'hero-text'>
                <h1>Robert Olive</h1>
                <p>Web Developer</p>
            </div>
        </div>

        <div className = 'container-fluid main'>


            <div className = "row about justify-content-sm-center">
                <SectionHead className="col-12" sectionTitle="About" />
                <div className = 'col-sm-12 col-md-6 profile-image'>
                    <img className='profilepic' src={Profile} alt="Profile"  />
                </div>

                <div className = 'col-sm-12 col-md-6 abouttext'>
                    My name is Rob Olive and I'm a full-stack web developer as well as all-around geek. I gained my Web Development experience through the University of Central Florida
                    Coding Bootcamp and am transitioning away from a career in construction surveying and civil engineering. I love learning new technologies and concepts and applying
                    them to practical and functional websites.
                    <br></br>
                    <br></br>
                    In my free time I enjoy traveling, catching up on videogames (I'm always behind), and just generally gaining new experiences. In the past few years I've lived in 3
                    states, gone skydiving, left the country, made friends everywhere I've gone.
                    <br></br>
                    <br></br>
                    My Web Development skill set includes HTML, CSS, JavaScript, Node.js, React.js, MySQL, MongoDB, and Express. On top of those skills, in the past few years I have led teams,
                    engaged heavily with contractors as well as clients, and delivered a get-the-job-done mentality in everything I've done. I'm always learning, advancing, and changing
                    perspectives.
                </div>
            </div>

            
            <div className = 'row portfolio justify-content-sm-center'>
                <SectionHead sectionTitle="Portfolio" className="col-12" />

                <div className ="col-8 col-md-4 work">
                    <a href = "http://strukture.herokuapp.com/">
                    <img src={strukture} className ="auth-image" alt="strukture"/>

                    <h3>strukture</h3>
                    </a>
                </div>

                <div className ="col-8 col-md-4 work">
                    <a href = "https://robertolive.github.io/codeTutor/">
                    <img src={codeTutor} className ="auth-image" alt="codeTutor"/>
                
                    <h3>codeTutor</h3>
                    </a>
                </div>

                <div className ="col-8 col-md-4 work">
                    <a href = "https://radiant-eyrie-36675.herokuapp.com/">
                    <img src={Casus} className ="auth-image" alt="Casus"/>
    
                    <h3>Casus</h3>
                    </a>
                </div>

            </div>

            <div className="row contact justify-content-sm-center">
                <SectionHead sectionTitle="Contact" />

                <div className="col-sm-4 social">
                    <a href="mailto:robert.aaron.olive@gmail.com">
                        <img src={Email} alt="Email"/>
                    </a>
                </div>

                <div className="col-sm-4 social">
                    <a href="https://github.com/RobertOlive">
                        <img src={Github} alt="Github"/>
                    </a>
                </div>

                <div className="col-sm-4 social">
                    <a href="https://www.linkedin.com/in/robert-olive/">
                        <img src={Linkedin} alt ="LinkedIn"/>
                    </a>
                </div>
            </div>
        </div>

        <div className="footer">
        Copyright Robert Olive 2018
        </div>

      </div>
    );
  }
}

export default App;
