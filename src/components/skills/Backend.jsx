import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Backend = () => {
    return (
        <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group1">
                <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                    <div>
                        <h3 className="skills__name">Laravel</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                    
                </div>
            </div>
            {/* second group */}
            <div className="skills__group2 fit-height">
                <div className="skills__data ">
                      <IoMdCheckmarkCircleOutline/>
                    <div>
                        <h3 className="skills__name">NodeJs</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data ">
                      <IoMdCheckmarkCircleOutline/>
                    <div>
                        <h3 className="skills__name">Strapi</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                
                <div className="skills__data ">
                      <IoMdCheckmarkCircleOutline/>
                    <div>
                        <h3 className="skills__name">Firbase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    )
}

export default Backend
