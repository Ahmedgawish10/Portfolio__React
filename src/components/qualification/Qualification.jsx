import React , {useState} from "react";
import "./qualification.css";

const Qualification = () => {
    const [hide,sethide]=useState(1);

     const NumberTab=(index)=>{
        sethide(index);
     }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={hide===1?"qualification___button qualified-active button--flex":
          "qualification___button  button--flex"}
          onClick={()=>{
              NumberTab(1);
          }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={hide===2?"qualification___button qualified-active button--flex":
          "qualification___button  button--flex"}
          onClick={()=>{
            NumberTab(2);
        }}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/*  =========qualification content one============================= */}
          <div className={hide===1?"qualification__content qualification__content-active w-70 ":"qualification__content  "}>
            <div className="qualification__data ">
              <div>
                <h3 className="qualification__title">Web Design</h3>
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
            </div>
            {/* ========qualification two====================== */}
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line"></span>
                
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Institute - I T I
                  <br/>
                  Summer Training
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt "></i> 2019 - 2023
                </div>
              </div>
             
            </div>
             {/* ========qualification three====================== */}
             <div className="qualification__data">
                {/* <div></div> */}
               
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  PortSaid - University <br/>
                  Faculty of
Information Technology
                </span>
                
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>
              <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line last"></span>
                
              </div>
            </div>
             {/* ========qualification four====================== */}
             {/* <div className="qualification__data">
                <div></div>
                <div>
                <span className="quaification-roundder"></span>
                  <span className="qualification__line last"></span>
                
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Port-Said - University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2023
                </div>
              </div>
             
            </div> */}
          
          </div>
          {/*  =========qualification content two============================= */}
          <div className={hide===2?"qualification__content qualification__content-active ":"qualification__content  "}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle ">
                  PortSaid -University<br/>  Faculty of Information<br/>  Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - Present
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
                  <span className="qualification__line last"></span>
                
              </div>
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  PortSaid - University <br/> Faculty of Information<br/>  Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - Present
                </div>
              </div>
             
            </div>
             {/* ========qualification three====================== */}
             
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
