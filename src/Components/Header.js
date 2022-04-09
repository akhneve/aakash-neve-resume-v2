import React, { Component } from 'react';
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import { BsLinkedin } from "react-icons/bs";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} className = "Link_head" target="_blank"><BsLinkedin /></a></li>
        //<li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">

         <div className = "Particles">
         <Particles
         options={{ interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: "bubble",
               },
              onhover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                size: 17,
                
                opacity: 0.8,
                speed: 2,
              },
            },
         },
            particles: {
            color: {
                    value: ['#66b2b2', '#008080', '#b4dada']
            },

            line_linked: {
               enable: true,
               distance: 450,
               color: '#ffffff',
               opacity: 0.1,
               width: 1,
             },

            move: {
               enable: true,
               speed: 1,
               direction: 'none',
               random: true,
               straight: false,
               bounce: true,
            },
            number: {
               value: 20,
            },
            opacity: {
               value: 0.5,
               random: false,
               anim: {
                 enable: true,
                 speed: 0.2,
                 opacity_min: 0.3,
                 sync: true,
               },
            },
            size: {
               value: 50,
               random: true,
            },
         } 
      }}
   /></div>
                    <img className="profile-pic" src={profilepic} alt="Aakash Neve Profile Pic" />

            <div className="responsive-headline">
               Hi I'm <span className = "name-headline">{name}.</span>
            <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span></div>
            <h3 style={{font: "40px/30px 'opensans-bold', sans-serif"}}>
            <Typewriter
                options={{
                  strings: [
                    'I like to analyse data.',
                    'I love meeting new people.',
                    'I create unique business solutions.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '|',
                  delay: 100,
                }}
              />
            </h3>

            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
