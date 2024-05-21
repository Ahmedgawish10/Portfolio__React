import React , {useState} from 'react'
import './services.css';

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
                    <h3 className="services__title">Web <br/>Designer </h3>
                    </div>
                    <span className="services__button" onClick={()=>{
                        NumberTab(1);
                    }}> View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={closeModel===1? "services__model services__model-show":"services__model"}>
                        <div className="services__model-content">
                       <div className="close__model"> <i className="uil uil-times button__close-icon" onClick={()=>{
                            openModel(!closeModel);
                        }}></i></div>
                        <h3 className="services__model-title">Web Designer</h3>
                        <p className="services__model-description">Services with more than 1 year of exprinces.</p>
                        <ul className="services__model-task">
                        <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and convert templates figma ui to real websites
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                            Design and convert templates canva ui to real websites
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
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
                    <span className="services__button" onClick={()=>{
                        NumberTab(2);
                    }}> View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={closeModel===2? "services__model services__model-show":"services__model"}>
                        <div className="services__model-content">
                        <div className="close__model"> <i className="uil uil-times button__close-icon" onClick={()=>{
                            openModel(!closeModel);
                        }}></i></div>
                        <h3 className="services__model-title">Web Developer</h3>
                        <p className="services__model-description">Services with more than 1 year of exprinces.</p>
                        <ul className="services__model-task">
                        <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                            Design websites with high performane and seo optimization
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                               Create job portal app for announce new jobs for seekers.
                               </span>
                            </li>
                        <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                            Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Convert  ui templates to real websites 

                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
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
                    <span className="services__button" onClick={()=>{
                        NumberTab(3);
                    }}> View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={closeModel===3? "services__model services__model-show":"services__model"}>
                        <div className="services__model-content">
                        <div className="close__model"> <i className="uil uil-times button__close-icon" onClick={()=>{
                            openModel(!closeModel);
                        }}></i></div>
                        <h3 className="services__model-title">UI/UX Designer</h3>
                        <p className="services__model-description">Services with l year of exprinces.</p>
                        <ul className="services__model-task">
                        <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
                               </span>
                            </li>
                            <li><i className='bx bx-badge-check'></i><span className="services__model-text">
                                Design and mockups of product for companies
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
