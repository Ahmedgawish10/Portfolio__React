import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">+1 Years Working</span>
            </div>
            <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">completed</h3>
                <span className="about__subtitle">12 + Projects</span>
            </div>
            <div className="about__box">
            <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/6</span>
            </div>
        </div>
    )
}

export default Info
