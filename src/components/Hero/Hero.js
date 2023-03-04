import React from 'react'
import MainVideo from '../../assets/video.mp4'
import Typical from 'react-typical'
import '../Hero/Hero.css'

function Hero() {
        return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Hello</h1>
                <h1>I'm<span className="blue"> Michael Becerril</span></h1>
                {/* <p>Software Engineer & Content Creator</p> */}
                <h1>
                {" "}
                  <Typical
                  className="typical"
                  loop={Infinity}
                  steps={[
                      "Software Engineer",
                      1000,
                      "Content Creator",
                      1000,
                      "Entrepreneur",
                      1000,
                  ]}
                  />
                </h1>
                <div className="btn-group">
                    <br />
                    {/* <a className="btn" href="https://michaelbecerril.com/">Portfolio</a> */}
                    <a className="btn-new" href={require("../../assets/mjresume.pdf")} download="Michael Joel's Resume">Get Resume</a>
                </div>
            </div>
            <div className="bottom-text">
                {/* n<h2>Total Volume Secured: $42,104,783,662.47</h2> */}
            </div>
        </div>
        )
      };

export default Hero
