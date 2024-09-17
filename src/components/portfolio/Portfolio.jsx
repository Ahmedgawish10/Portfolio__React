import React, { useState } from "react";
import Alldata from "./Alldata";
import "./portfolio.css";
import Image6 from "../../assets/iti-traning.jpg";
import jopPortal from "../../assets/jop-portal.png";
import Eljewar from "../../assets/eljwewar-travels.png";
import Courses from "../../assets/courses-app.png";
import finalproject from "../../assets/final-project.png";
import ecompharmacy from "../../assets/ecommerce-pharmacy-min.png";

const Portfolio = () => {
  const [port, setPort] = useState(1);
  const [imgGrad, setImgGrad] = useState(false);

  window.addEventListener("scroll", () => {
    const boxImg = document.querySelectorAll(".box__img img");
    const boxImgReact = document.querySelectorAll(".box__img-react img");
    const boxImgWeb = document.querySelectorAll(".box__img-web img");

    // Animation for all sections
    const animateImages = (elements, className) => {
      elements.forEach((element) => {
        if (window.scrollY >= 1800) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    };

    animateImages(boxImg, "animate__img");
    animateImages(boxImgReact, "animate__img2");
    animateImages(boxImgWeb, "animate__img-web");
  });

  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most projects</span>

      <div className="portfolio__container container grid">
        {/* Portfolio Tabs */}
        <div className="portfolio__tabs">
          <button
            className={port === 1 ? "button-active" : "portolio__tabs-button"}
            onClick={() => setPort(1)}
          >
            All
          </button>
          <button
            className={port === 2 ? "button-active" : "portolio__tabs-button"}
            onClick={() => setPort(2)}
          >
            Web
          </button>
          <button
            className={port === 3 ? "button-active" : "portolio__tabs-button"}
            onClick={() => setPort(3)}
          >
            React
          </button>
          <button
            className={port === 4 ? "button-active" : "portolio__tabs-button"}
            onClick={() => setPort(4)}
          >
            Certificates
          </button>
        </div>

        {/* All Projects */}
        <div className={port === 1 ? "portfolio__all-show" : "portfolio__all-hide"}>
          <Alldata />
        </div>

        {/* Web Projects */}
        <div className={port === 2 ? "portfolio__web-show" : "portfolio__web-hide"}>
          <div className="box">
            <div className="box__img-web">
              <img src={jopPortal} alt="Job Portal App" />
            </div>
            <div className="title__project">
              <h3 className="pb-2">Job Portal App</h3>
              <span>Graduation Project at - I T I</span>
              <div>Technologies: (HTML - Sass - JS - BootStrap - PHP - MySQL)</div>
              <h5 className="pt-1">
                <a
                  href="https://github.com/Ahmedgawish10/JobPortal-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <i className="uil uil-arrow-right services__button-icon"></i>
              </h5>
            </div>
          </div>

          <div className="box">
            <div className="box__img-web">
              <img src={Eljewar} alt="Eljewar Travels App" />
            </div>
            <div className="title__project">
              <h3 className="pb-2">Eljewar Travels App</h3>
              <span>Freelance Project</span>
              <div>Technologies: (HTML - CSS - JS - Tailwind - Next.js - i18next)</div>
              <h5 className="pt-1 d-flex">
                <a href="https://aljewartours.vercel.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
                <i className="uil uil-arrow-right services__button-icon me-3"></i>
              </h5>
            </div>
          </div>

          <div className="box">
            <div className="box__img-web">
              <a href="https://fullstack-courses-app-3vdz.vercel.app/" target="_blank">
                <img src={Courses} alt="Courses Tech App" className="animate__img-web3" />
              </a>
            </div>
            <div className="title__project">
              <h3 className="pb-2">Courses Tech App</h3>
              <span>Training Project</span>
              <div>
                Technologies: (HTML - CSS - JS - Tailwind - Next.js - Strapi - Stripe - ClerkAuth - Cloudinary)
              </div>
              <h5 className="pt-1 d-flex">
                <a href="https://aljewartours.vercel.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
                <i className="uil uil-arrow-right services__button-icon me-3"></i>
              </h5>
            </div>
          </div>
        </div>

        {/* React Projects */}
        <div className={port === 3 ? "portfolio__web-show" : "portfolio__web-hide"}>
          <div className="box">
            <div className="box__img-react">
              <img src={finalproject} alt="Graduation Project" />
            </div>
            <h4 className="title__project">Graduation Project</h4>
            <div>Technologies: (HTML - CSS - BootStrap - React - Context API - React Router)</div>
            <h5>
              <a href="https://ahmedgawish10.github.io/graduateproject/" target="_blank" rel="noreferrer">
                Demo
              </a>
            </h5>
          </div>

          <div className="box">
            <div className="box__img-react">
              <img src={ecompharmacy} alt="E-commerce Pharmacy" />
            </div>
            <h4 className="title__project">E-commerce Pharmacy</h4>
            <div>
              Technologies: (HTML - CSS - BootStrap - React - Redux Toolkit - React Router - Slick Carousel)
            </div>
            <h5>
              <a href="https://ecommerce-pharmacy4.vercel.app/" target="_blank" rel="noreferrer">
                Demo
              </a>
            </h5>
          </div>
        </div>

        {/* Certificates */}
        <div className={port === 4 ? "portfolio__web-show certificate" : "portfolio__web-hide"}>
          <div className="box">
            <div className="box__img-cert">
              <img src={Image6} alt="ITI Summer Training Certificate" onClick={() => setImgGrad(!imgGrad)} />
            </div>
            <h4 className="title__certificate">Summer Training Certificate at I T I</h4>
            <h5 className="content__certificate">Fundamentals Web Development</h5>
            <h5 className="view__container">
              <span className="view_certificate" onClick={() => setImgGrad(!imgGrad)}>
                View
              </span>
              <i className="uil uil-arrow-right services__button-icon"></i>
            </h5>
            <div className={imgGrad ? "showgrad" : "hidegrad"}>
              <div className="close__img-grad" onClick={() => setImgGrad(!imgGrad)}>
                x
              </div>
              <div className="box__img-grad">
                <img src={Image6} alt="ITI Summer Training Certificate" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box__img-cert">
              <img src={Image6} alt="ITI Web Developer Certificate" onClick={() => setImgGrad(!imgGrad)} />
            </div>
            <h4 className="title__certificate">Web Developer Certificate at I T I</h4>
            <h5 className="content__certificate">Fullstack PHP Web Developer</h5>
            <h5 className="view__container">
              <span className="view_certificate" onClick={() => setImgGrad(!imgGrad)}>
                View
              </span>
              <i className="uil uil-arrow-right services__button-icon"></i>
            </h5>
            <div className={imgGrad ? "showgrad" : "hidegrad"}>
              <div className="close__img-grad" onClick={() => setImgGrad(!imgGrad)}>
                x
              </div>
              <div className="box__img-grad">
                <img src={Image6} alt="ITI Web Developer Certificate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
