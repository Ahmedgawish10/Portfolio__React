import React from "react";
import iti from "../../assets/iti-ecommerce.png";
import EcomAngular from "../../assets/ecommerce-angular.png";
import Eljewar from "../../assets/eljwewar-travels.png";
import Courses from "../../assets/courses-app.png";

import finalproject from "../../assets/final-project.png";
import ecompharmacy from "../../assets/ecommerce-pharmacy-min.png";
const Alldata = () => {
  return (
    <div className="portfolio__all-data">
      {/* project one */}
      <div className="box">
        <div className="box__img">
          <a href="https://ecommerce-iti.vercel.app/" target="_blank" alt="">
            <img src={iti} alt="E-commerce Pizza" />
          </a>
        </div>
        <div className="title__project">
          <h3 className="pb-2">    E-commerce Pizza</h3>
          <span>          Graduation Project at - I T I          </span>
        </div>
        <div><span className="font-bold">Technologies </span>: (HTML - Sass - JS - BootStrap - Swiper.js) </div>
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
      {/* project two */}
      <div className="box">
        <div className="box__img-web">
          <a href="https://aljewartours.vercel.app/" target="_blank" alt="">
            <img src={Eljewar} alt="E-commerce Pizza" />
          </a>
        </div>
        <div className="title__project">
          <h3 className="pb-2">Eljewar travels App</h3>
          <span>Freelance Project</span>
          <div>Technologies: (HTML - CSS- JS - Tailwind -Nextjs - i18next ) </div>

        </div>
        <h5 className="pt-1 d-flex ">
          <a
            href="https://aljewartours.vercel.app/"
            target="_blank" rel="noreferrer"
          >
            Demo
          </a>
          <i className="uil uil-arrow-right services__button-icon me-3"></i>


        </h5>

      </div>
     {/* project three */}
      <div className="box">
        <div className="box__img-web">
          <a href="https://fullstack-courses-app-3vdz.vercel.app/" target="_blank" alt="">
            <img src={Courses} alt="E-commerce Pizza" />
          </a>
        </div>
        <div className="title__project">
          <h3 className="pb-2">Courses Tehc App</h3>
          <span>Training Project</span>
          <div>Technologies: (HTML - CSS- JS - Tailwind -Nextjs - Strapi(CMS) - Stripe - ClerkAuth - Cloudinary ) </div>

        </div>
        <h5 className="pt-1 d-flex ">
          <a
            href="https://aljewartours.vercel.app/"
            target="_blank" rel="noreferrer"
          >
            Demo
          </a>
          <i className="uil uil-arrow-right services__button-icon me-3"></i>


        </h5>

      </div>
     {/* project four */}
      <div className="box">
        <div className="box__img-react">
          <a href="https://ecommerce-pharmacy4.vercel.app/" target="_blank" alt="">
            <img src={ecompharmacy} alt="E-commerce Pizza" />
          </a>
        </div>
        <h3 className="title__project">E-commerce Pharmacy</h3>
        <div className="technologies">
          Technologies: (HTML - CSS - BootStrap - React - ReduxToolkit
          -(react-router-dom) - (slick-carousel))
        </div>
        <h5 className="pt-1">
          <a
            href="https://ecommerce-pharmacy4.vercel.app/"
            target="_blank" rel="noreferrer"
          >
            Demo <i className="uil uil-arrow-right services__button-icon"></i>

          </a>
        </h5>
      </div>
    {/* project five */}
      <div className="box">
        <div className="box__img-react">
          <a href="https://ahmedgawish10.github.io/graduateproject/" target="_blank" alt="">
            <img src={finalproject} alt="E-commerce Pizza" />
          </a>
        </div>
        <h3 className="title__project">Graduation Project</h3>
        <div>
          Technologies: (HTML - CSS - BootStrap - React - Context api
          -(react-router-dom))
        </div>
        <h5 className="pt-1">
          <a
            href="https://ahmedgawish10.github.io/graduateproject/"
            target="_blank" rel="noreferrer"
          >
            Demo  <i className="uil uil-arrow-right services__button-icon"></i>

          </a>
        </h5>
      </div>
    {/* project six */}
      <div className="box">
        <div className="box__img-angular">
          <a href="https://ecommerce-angular-beta-lime.vercel.app/" target="_blank" alt="">
            <img src={EcomAngular} alt="E-commerce Pizza" />
          </a>
        </div>
        <h3 className="title__project">MediCare App (Angular)</h3>
        <div className="technologies">
          Technologies: (HTML - CSS - JS -BootStrap - Angular - REST API )
        </div>
        <h5 className="pt-1">

          <a href="https://ecommerce-angular-beta-lime.vercel.app/" target="_blank" rel="noreferrer"> Demo</a>
          <i className="uil uil-arrow-right services__button-icon"></i>
        </h5>
      </div>
    </div>
  );
};

export default Alldata;
