import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Frontend = () => {
    return (
      <div className="skills__content">
            <div className='plus'>+</div>
        <div className='moore__skills'>
        <h3 className="skills__title">Frontend Developer</h3>
           {/*a- second group */}
        <div className="skills__box">
              <div className="skills__group1">
                 <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name"> Git & Github </h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">Sass</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
                     <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">BootStrap</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">Tailwind</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>

                  
              </div>
              {/*b- second group */}

              <div className="skills__group2">
                   <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">redux Toolkit</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">TypeScript</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">React MUI</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">Wordpress</h3>
                          <span className="skills__level">Basic</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
         {/* a- first group */}
          <h3 className="skills__title">Frontend Developer</h3>
          <div className="skills__box one">
              <div className="skills__group1">
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">HTML</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">CSS</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">JavaScript</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
              </div>
              {/* b- first group */}
              <div className="skills__group2">
              <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">ReactJs</h3>
                          <span className="skills__level">Advanced</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">NextJs</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                  </div>
                  <div className="skills__data">
                      <IoMdCheckmarkCircleOutline/>
                      <div>
                          <h3 className="skills__name">Angular</h3>
                          <span className="skills__level">Basic</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Frontend
