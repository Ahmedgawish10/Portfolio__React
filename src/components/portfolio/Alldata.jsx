import React from "react";
import iti from "../../assets/iti-ecommerce.png";
import compny from "../../assets/portfolio-compny.png";
import Portfolio from "../../assets/portfolio-angular.png";
import EcomAngular from "../../assets/ecommerce-angular.png";

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
        <div>Technologies: (HTML - Sass - JS - BootStrap - Swiper.js) </div>
        <h5 className="pt-1">
 
          <a
            href="https://ecommerce-iti.vercel.app/"
            target="_blank"
            rel="noreferrer"
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
        <div>Technologies: (HTML - CSS - JS - BootStrap - Isotope.js) </div>

        <h5 className="pt-1">

          <a
            href="https://ahmedgawish10.github.io/portfolio-company/"
            target="_blank" rel="noreferrer"
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
        Technologies: (HTML - CSS - BootStrap - React - Context api
          -(react-router-dom))
        </div>
        <h5>
          <a
            href="https://ahmedgawish10.github.io/graduateproject/"
            target="_blank" rel="noreferrer"
          >
            Demo  <i className="uil uil-arrow-right services__button-icon"></i>

          </a>
        </h5>
      </div>
      <div className="box">
            <div className="box__img-react">
              <img src={ecompharmacy} alt="" />
            </div>
            <h3 className="title__project">E-commerce Pharmacy</h3>
            <div className="technologies">
            Technologies: (HTML - CSS - BootStrap - React - ReduxToolkit
              -(react-router-dom) - (slick-carousel))
            </div>
            <h5>
              <a
                href="https://ahmedgawish10.github.io/ecommerce-pharmacy4/"
                target="_blank" rel="noreferrer"
              >

                Demo <i className="uil uil-arrow-right services__button-icon"></i>

              </a>
            </h5>
          </div>
      <div className="box">
        <div className="box__img-angular">
          <img src={Portfolio} alt="" />
        </div>
        <h3 className="title__project">Portfolio (Angular )</h3>
        <div className="technologies">
        Technologies: (HTML - CSS - JS -BootStrap - Angular )
            </div>
        <h5>
          <a href="https://lab-angular-two.vercel.app/" target="_blank" rel="noreferrer"> Demo</a>
          <i className="uil uil-arrow-right services__button-icon"></i>
        </h5>
      </div>
      <div className="box">
        <div className="box__img-angular">
          <img src={EcomAngular} alt="" className="" />
        </div>
        <h3 className="title__project">MediCare App (Angular)</h3>
        <div className="technologies">
        Technologies: (HTML - CSS - JS -BootStrap - Angular - REST API )
            </div>
        <h5>

          <a href="https://ecommerce-angular-beta-lime.vercel.app/" target="_blank" rel="noreferrer"> Demo</a>
          <i className="uil uil-arrow-right services__button-icon"></i>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Alldata;
