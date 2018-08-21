import React, { Component } from 'react';
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="parent">

        <Header />

        <div class = 'hero-image'>
            <div class = 'hero-text'>
                <h1>Robert Olive</h1>
                <p>Web Developer</p>
                <button class = "contact-button">Get in touch</button>
            </div>
        </div>

        <div class = 'container main'>
            <div class = 'row'>
                <div class = 'col-sm profile-image'></div>

                <div class = 'col-sm'>
                        Former construction surveyor with a newfound focus on web development. 
                        Strong experience with building client relationships, supervising a small team, and executing a plan effectively while maintaining the ability to adapt. 
                        Proficient in web development gained in a boot camp environment, including HTML, CSS, JavaScript, JQuery, Node.js, and MySQL. 
                        Aim to utilize varied background along with newly acquired skills to become a capable web developer with an emphasis on quality.
                </div>
            </div>

            <div class = 'row'></div>
        </div>
        
      </div>
    );
  }
}

export default App;
