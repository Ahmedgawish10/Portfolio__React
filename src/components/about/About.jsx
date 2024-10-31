import React from 'react'
import "./about.css";
import AboutImg from "../../assets/p1.jpeg"
import Cv from "../../assets/AhmedGawish.pdf";
import Info from "./Info";
import { PiFilePdfBold } from "react-icons/pi";

const About = () => {
    return (
     
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            
            <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img"/>
            <div className="about__data">
                <Info/>
                <p className="about__description">
                Experienced Front-End Developer skilled in building responsive, high-performance web pages.
                 With over 2 years of experience, I have delivered multiple successful projects that received positive feedback.
                </p>
                <a download="" href={Cv} className="download__cv  button button--flex gap-2">
                  <span>                  Download CV                  </span>
                <PiFilePdfBold className='text-2xl '/>
               
                </a>
            </div>
            </div>
        </section>
    )
}

export default About
