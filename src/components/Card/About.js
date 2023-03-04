import React from 'react';
import './About.css'
import { SiReact, SiCss3, SiAdobepremierepro } from 'react-icons/si';
import { GiSushis } from "react-icons/gi";

import Card from '../Card/Card';


const About = () => {
  return (
<div className="about">
    <div className="container">
      <h2>Unleashed Creativity</h2>
      <p>Michael J. Becerril is a software engineer and content creator who specializes in entrepreneurship content. Becerril currently focuses on front end development, UX/UI Design and content creation</p>
    <div className="card-container">
        <div className="card">
            <Card icon={<GiSushis className='icon' />}heading='SHIMA SUSHI' text='Shima Sushi Bar & Oriental Cuisine is a Korean BBQ and Sushi Restaurant located in Aguadilla, Puerto Rico.' />
            <a className="btn2" href="https://vigilant-boyd-b888e8.netlify.app/#">Demo Site</a>
        </div>
        <div className="card">
            <Card icon={<SiReact className='icon' />} heading='Expensify' text='This app is an expense tracker where you can itemize and categorize the difference items and services you have purchased.'/>
            <a className="btn2" href="#">Demo Site</a>
        </div>
        <div className="card">
            <Card icon={<SiCss3 className='icon' />} heading='POWER LIST' text='A todo list for your everyday routines and habits. Start your day the right way with your intentions how you intend to live life.'/>
            <a className="btn2" href="#">Demo Site</a>
        </div>
        </div>
        <a href="/" className="btn">Contact</a>
    </div>
  </div>
  )
};

export default About;
