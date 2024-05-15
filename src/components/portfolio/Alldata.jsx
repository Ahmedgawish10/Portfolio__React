import React from "react";
import iti from "../../assets/iti-ecommerce.png";
import compny from "../../assets/portfolio-compny.png";
import Image3 from "../../assets/work3.jpg";
import Image4 from "../../assets/work4.jpg";

import finalproject from "../../assets/final-project.png";
import ecompharmacy from "../../assets/ecommerce-pharmacy-min.png";
const Alldata = () => {
  return (
    <div className="portfolio__all-data">
      <div className="box">
        <div className="box__img">
          <img src={iti} alt="E-commerce Pizza" />
        </div>
        <div className="title__project">
          <h3>    E-commerce Pizza</h3>
          Graduation Project at - I T I
        </div>
        <div>Languages: (HTML - Sass - JS - BootStrap - Swiper.js) </div>
        <h5 className="pt-1">
 
          <a
            href="https://ahmedgawish10.github.io/iti-ecommerce/"
            target="_blank"
          >
            Demo
          </a>
          <i className="uil uil-arrow-right services__button-icon"></i>
        </h5>
      </div>
      <div className="box">
        <div className="box__img">
          <img src={compny} alt="portfolio company" />
        </div>
        <div className="title__project">
         <h3>Gawish Company</h3> 
           company for Designs
        </div>
        <div>Languages: (HTML - CSS - JS - BootStrap - Isotope.js) </div>

        <h5 className="pt-1">

          <a
            href="https://ahmedgawish10.github.io/portfolio-company/"
            target="_blank"
          >

            Demo
          </a>
          <i className="uil uil-arrow-right services__button-icon"></i>{" "}
        </h5>
      </div>
      <div className="box">
        <div className="box__img-react">
          <img src={finalproject} alt="" />
        </div>
        <h3 className="title__project">Graduation Project</h3>
        <div>
          Languages: (HTML - CSS - BootStrap - React - Context api
          -(react-router-dom))
        </div>
        <h5>
          <a
            href="https://ahmedgawish10.github.io/graduateproject/"
            target="_blank"
          >
            Demo
          </a>
        </h5>
      </div>
      <div className="box">
            <div className="box__img-react">
              <img src={ecompharmacy} alt="" />
            </div>
            <h3 className="title__project">E-commerce Pharmacy</h3>
            <div>
              Languages: (HTML - CSS - BootStrap - React - ReaduxToolkit
              -(react-router-dom) - (slick-carousel))
            </div>
            <h5>
        
              <a
                href="https://ahmedgawish10.github.io/ecommerce-pharmacy4/"
                target="_blank"
              >
        
                Demo
              </a>
            </h5>
          </div>
      <div className="box">
        <div>
          <img src={Image4} alt="" />
        </div>
        <h4 className="title__project">Portfolio (Angular )</h4>
        <h5>
          {" "}
          <a href=""> Demo</a>
          <i className="uil uil-arrow-right services__button-icon"></i>{" "}
        </h5>
      </div>
      <div className="box">
        <div>
          <img src={Image4} alt="" />
        </div>
        <h4 className="title__project">Portfolio (JS Vanilia)</h4>
        <h5>
          {" "}
          <a href=""> Demo</a>
          <i className="uil uil-arrow-right services__button-icon"></i>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Alldata;
