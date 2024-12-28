import React from 'react'
import { RiBookmark3Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <span className='flex justify-center'>  <RiBookmark3Line className="about__icon  "/> </span>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">+2 Years </span>
            </div>
            <div className="about__box">
            <span className='flex justify-center'>  <SiBookstack className="about__icon  "/> </span>
            <h3 className="about__title">completed</h3>
                <span className="about__subtitle">+12  Projects</span>
            </div>
            <div className="about__box">
            <span className='flex justify-center'>  <MdOutlineSupportAgent className="about__icon  "/> </span>
            <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/6</span>
            </div>
        </div>
    )
}

export default Info
