import React , {useState} from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa6";
import { RiMacbookLine } from "react-icons/ri";

const Qualification = () => {
    const [hide,sethide]=useState(1);

     const NumberTab=(index)=>{
        sethide(index);
     }
  return (
    <section className="qualification section">
      <h2 className="section__title  ">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={hide===1?"gap-2 qualification___button qualified-active button--flex ": "gap-2 qualification___button  button--flex overlay-color"}
          onClick={()=>{
              NumberTab(1);
          }}
          >
            <FaGraduationCap className="qualification__icon"/>

            Education
          </div>

          <div className={hide===2?"qualification___button qualified-active button--flex gap-2": "qualification___button  button--flex overlay-color gap-2"}
          onClick={()=>{
            NumberTab(2);
        }}>
            <RiMacbookLine className="qualification__icon"/>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/*  =========Education section one============================= */}
          <div className={hide===1?"qualification__content qualification__content-active w-70 ":"qualification__content  "}>
            <div className="qualification__data ">
              <div className="qualification1">
                <h3 className="qualification__title mb-2">I T S.</h3>
                <span className="qualification__subtitle">
                  PortSaid - University<br/> Faculty of Information<br/>  Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>
              <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>
            {/* ========qualification two====================== */}
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title mb-2">Web Development</h3>
                <span className="qualification__subtitle">
                  Institute - I T I
                  <br/>
                  Summer Training
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "></i> 6/2022 - 7/2022
                </div>
              </div>
             
            </div>
             {/* ========qualification three====================== */}
             <div className="qualification__data">
              <div>
                <h3 className="qualification__title mb-2">Fullstack PHP Developer</h3>
                <span className="qualification__subtitle">
                  Institute - I T I
                  <br/>
                  Intensive Course
                </span>
             
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 1/2024 - 5/2024
                </div>
              </div>
              <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line last"></span>
                
              </div>
            </div>
          </div>
          {/*  =========Experience exp content two============================= */}
          <div className={hide===2?"qualification__content qualification__content-active ":"qualification__content  "}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title mb-2">Front-end Developer</h3>
                <span className="qualification__subtitle ">
                  Freelancer  (Upwork)<br/>  
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line "></span>
                
              </div>
            </div>
            {/* ========qualification two====================== */}
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line "></span>
                
              </div>
              <div>
                <h3 className="qualification__title mb-2">Web Developer</h3>
                <span className="qualification__subtitle">
                  Institute - I T I
                  <br/>
                  Training
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 1/2024 - 5/2024
                </div>
              </div>
             
            </div>
             {/* ========qualification three====================== */}
             <div className="qualification__data">
              <div>
                <h3 className="qualification__title mb-2">Front-end Developer</h3>
                <span className="qualification__subtitle last">
                  Rukn It <br/> 
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 6/2024 - 12/2024
                </div>
              </div>
              <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line last"></span>
                
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
