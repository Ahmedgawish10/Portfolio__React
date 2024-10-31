import React , {useState} from 'react'
import './services.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Services = () => {
     const [closeModel,openModel]=useState(0);
     const NumberTab=(index)=>{
        openModel(index);
     }
    return (
      <section className="services section" id="services">
           <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="serivces__content">
                    <div>
                    <i className="uil uil-web-grid services__icon"></i>         
                    <h3 className="services__title">Frontend <br/>Developer </h3>
                    </div>
                    <span className="services__button flex items-center " onClick={()=>{
                        NumberTab(1);
                    }}> View More 
                    <FaLongArrowAltRight className='services__button-icon text-xl gap-3 '/>
                    </span>
                    <div className={closeModel===1? "services__model services__model-show":"services__model"}>
                        <div className="services__model-content">
                       <div className="close__model"> <IoMdClose className="uil uil-times button__close-icon" onClick={()=>{
                            openModel(!closeModel);
                        }}/></div>
                        <h3 className="services__model-title">Frontend Developer</h3>
                        <p className="services__model-description">Services with more than 2 year of exprinces.</p>
                        <ul className="services__model-task">
                        <li>
                        <IoMdCheckmarkCircleOutline className='text-xl'/>
                                                    <span className="services__model-text">
                                Design and convert templates figma ui to real websites
                               </span>
                            </li>
                            <li>
                            <IoMdCheckmarkCircleOutline className='text-xl'/>
                            <span className="services__model-text">
                            Design and convert templates canva ui to responsive web experiences 
                               </span>
                            </li>
                            <li>               
                            <IoMdCheckmarkCircleOutline className='text-xl'/>
                            <span className="services__model-text">
                            transforming Figma and Canva UI templates into fully functional websites
                                                 </span>
                            </li>
                            <li>                 
                            <IoMdCheckmarkCircleOutline className='text-xl'/>
                            <span className="services__model-text">
                            Experienced in converting Canva UI designs into dynamic websites
                               </span>
                            </li>
                            <li>
                            <IoMdCheckmarkCircleOutline className='text-xl'/>
                            <span className="services__model-text">
                                Create interactive front-end mockups tailored to company branding
                                </span>
                            </li>
                        </ul>
                        </div>
                        </div>
 
                </div>
                {/*===================== services two=================== */}
                <div className="serivces__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Web <br/> Developer </h3>
                    </div>
                    <span className="services__button flex items-center " onClick={()=>{
                        NumberTab(2);
                    }}> View More 
                    <FaLongArrowAltRight className='services__button-icon text-xl gap-3 '/>
                    </span>
                    <div className={closeModel===2? "services__model services__model-show":"services__model"}>
                        <div className="services__model-content">
                        <div className="close__model"> <IoMdClose className="uil uil-times button__close-icon" onClick={()=>{
                            openModel(!closeModel);
                        }}/></div>
                        <h3 className="services__model-title">Web Developer</h3>
                        <p className="services__model-description">Services with more than 1 year of exprinces.</p>
                        <ul className="services__model-task">
                        <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Design websites with high performane and seo optimization
                               </span>
                            </li>
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Create job portal app for announce new jobs for seekers.
                               </span>
                            </li>
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Design and mockups of product for companies
                               </span>
                            </li>
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Convert  ui templates to real websites 

                               </span>
                            </li>
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Design and mockups of product for companies
                               </span>
                            </li>
                        </ul>
                        </div>
                        </div>
                </div>
                
                {/*======================== services three ================================*/}
                <div className="serivces__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX<br/>Designer </h3>
                    </div>
                    <span className="services__button flex items-center " onClick={()=>{
                        NumberTab(3);
                    }}> View More 
                    <FaLongArrowAltRight className='services__button-icon text-xl gap-3 '/>
                    </span>
                    <div className={closeModel===3? "services__model services__model-show":"services__model"}>
                        <div className="services__model-content">
                        <div className="close__model"> <IoMdClose className="uil uil-times button__close-icon" onClick={()=>{
                            openModel(!closeModel);
                        }}/></div>
                        <h3 className="services__model-title">UI/UX Designer</h3>
                        <p className="services__model-description">Services with l year of exprinces.</p>
                        <ul className="services__model-task">
                        <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                               UI Design and Mockup Creation Using Canva                             
                                 </span>
                            </li>
                          
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Proficient in exporting designs in multiple formats                           
                                </span>
                            </li>
                        <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Expertise in customizing templates, including modifying text, colors, images
                               </span>
                            </li>
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Experience in previewing and testing designs to ensure optimal presentation 
                               </span>
                            </li>
                            <li><IoMdCheckmarkCircleOutline className='text-xl'/><span className="services__model-text">
                            Utilizing Figma's comprehensive design features to craft pixel-perfect UI designs
                               </span>
                            </li>





                        </ul>
                        </div>
                        </div>
 
                </div>
                
            </div>

      </section>
    )
}

export default Services
