import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Backend = () => {
    return (
        <div className="skills__content">
            <div className='plus'>+</div>
            <div className='moore__skills'>
                <h3 className="skills__title">Backend Developer</h3>
                <div className="skills__box">
                    <div className="skills__group1">
                        <div className="skills__data">
                            <IoMdCheckmarkCircleOutline />
                            <div>
                                <h3 className="skills__name">React Native</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__group2 fit-height">
                        <div className="skills__data">
                            <IoMdCheckmarkCircleOutline />
                            <div>
                                <h3 className="skills__name">Supabase</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box one">
                <div className="skills__group1">
                    <div className="skills__data">
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h3 className="skills__name">Laravel</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group2 fit-height">
                    <div className="skills__data">
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h3 className="skills__name">NodeJs</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h3 className="skills__name">Strapi</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoMdCheckmarkCircleOutline />
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend
