import React, { useState } from "react";
import Alldata from "./Alldata";
import "./portfolio.css";
import Image3 from "../../assets/iti-ecommerce.png";
import Image4 from "../../assets/work4.jpg";
import Image5 from "../../assets/work5.jpg";
import Image6 from "../../assets/iti-traning.jpg";
import jopPortal from "../../assets/jop-portal.png";

import finalproject from "../../assets/final-project.png";
import ecompharmacy from "../../assets/ecommerce-pharmacy-min.png";

const Portfolio = () => {
  window.addEventListener("scroll", () => {
    const boxImg = document.querySelectorAll(".box__img img");
// animation fro section portfolio all
    boxImg.forEach(element => {
      if (window.scrollY >= 1800) {
      element.classList.add("animate__img");

      }else {
        if (boxImg) {
         element.classList.remove("animate__img");
        } else {
          return;
        }
      }
     });
// animation fro section portfolio react
const boxImgReact = document.querySelectorAll(".box__img-react img");
boxImgReact.forEach(element => {
  if (window.scrollY >= 1800) {
  element.classList.add("animate__img2");
  }else {
    if (boxImg) {
     element.classList.remove("animate__img2");
    } else {
      return;
    }
  }
 });
// animation fro section portfolio web
const boxImgWeb = document.querySelectorAll(".box__img-web img");
boxImgWeb.forEach(element => {
  if (window.scrollY >= 1800) {
  element.classList.add("animate__img2");
  }else {
    if (boxImg) {
     element.classList.remove("animate__img2");
    } else {
      return;
    }
  }
 });

    
  });

  const [port, setport] = useState(1);
  const [imgGrad, setimgGrad] = useState(false);
  return (
    <div className="portfolio section" id="portfolio o">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most projects</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__tabs">
          <button
            className={port === 1 ? "button-active" : "portolio__tabs-button"}
            onClick={() => {
              setport(1);
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              setport(2);
            }}
            className={port === 2 ? "button-active" : "portolio__tabs-button"}
          >
            Web
          </button>
          <button
            onClick={() => {
              setport(3);
            }}
            className={port === 3 ? "button-active" : "portolio__tabs-button"}
          >
            React
          </button>
          <button
            onClick={() => {
              setport(4);
            }}
            className={port === 4 ? "button-active" : "portolio__tabs-button"}
          >
            Certificates
          </button>
        </div>
        <div
          className={port === 1 ? "portfolio__all-show" : "portfolio__all-hide"}
        >
          <Alldata />
        </div>
        {/* web */}
        <div className={port === 2 ? "portfolio__web-show" : "portfolio__web-hide"}>
          <div className="box">
            <div className="box__img-web ">
              <img src={jopPortal} alt="" />
            </div>
            <div className="title__project">
             <h3>Job Portal</h3> 
          Graduation Project at - I T I
        </div>
        <div>Languages: (HTML - Sass- JS - BootStrap - PHP - MY SQL) </div>
        <h5 className="pt-1">
 
          <a
            href="https://github.com/Ahmedgawish10/JobPortal-app"
            target="_blank"
          >
            Code
          </a>
          <i className="uil uil-arrow-right services__button-icon"></i>
        </h5>


          </div>
          <div className="box">
            <div className="box__img-web">
              <img src={jopPortal} alt="" />
            </div>
            <h4 className="title__project">Weather app</h4>
            <h5>
              
              <a href=""> Demo</a>
            </h5>
          </div>
        </div>
        {/* React */}
        <div className={port === 3 ? "portfolio__web-show" : "portfolio__web-hide"} >
          <div className="box">
            <div className="box__img-react">
              <img src={finalproject} alt="" />
            </div>
            <h4 className="title__project">Graduation Project</h4>
            <div>
              Languages: (HTML - CSS - BootStrap - React - Context api
              -(react-router-dom)){" "}
            </div>
            <h5>
              {" "}
              <a
                href="https://ahmedgawish10.github.io/graduateproject/"
                target="_blank"
              >
                {" "}
                Demo
              </a>{" "}
            </h5>
          </div>
          <div className="box">
            <div className="box__img-react">
              <img src={ecompharmacy} alt="" />
            </div>
            <h4 className="title__project">E-commerce Pharmacy</h4>
            <div>
              Languages: (HTML - CSS - BootStrap - React - ReaduxToolkit
              -(react-router-dom) - (slick-carousel)){" "}
            </div>
            <h5>
              {" "}
              <a
                href="https://ahmedgawish10.github.io/ecommerce-pharmacy4/"
                target="_blank"
              >
                {" "}
                Demo
              </a>{" "}
            </h5>
          </div>
        </div>
        {/* Certificates  */}
        <div
          className={
            port === 4
              ? "portfolio__web-show certificate"
              : "portfolio__web-hide"
          }
        >
          <div className="box">
            <div className="box__img-cert">
              <img src={Image6} alt="" onClick={()=>setimgGrad(!imgGrad)}/>
            </div>
            <h4 className="title__certificate">
              Summer Training Certificate at I T I
            </h4>
            <h5 className="content__certificate">
              Fundamentals Web Development{" "}
            </h5>
            <h5 className="view__container"> <span className="view_certificate" onClick={()=>setimgGrad(!imgGrad)}>View</span><i className="uil uil-arrow-right  services__button-icon"></i> </h5>  
               <div className={imgGrad==1?"showgrad":"hidegrad"} >
                <div className="close__img-grad" >
                <div onClick={()=>setimgGrad(!imgGrad)}>x</div>
                </div>
                <div className="box__img-grad">
                <img src={Image6} alt=""/>
                </div>
                </div> 
          </div>
          <div className="box">
            <div className="box__img-cert">
              <img src={Image6} alt=""  onClick={()=>setimgGrad(!imgGrad)} />
            </div>
            <h4 className="title__certificate">
            Web Developer Certificate at I T I
            </h4>
            <h5 className="content__certificate">
              Fullstack PHP Web Developer
            </h5>
            <h5 className="view__container"> <span className="view_certificate" onClick={()=>setimgGrad(!imgGrad)}>View</span><i className="uil uil-arrow-right  services__button-icon"></i> </h5>  
               <div className={imgGrad==1?"showgrad":"hidegrad"} >
                <div className="close__img-grad" >
                <div onClick={()=>setimgGrad(!imgGrad)}>x</div>
                </div>
                <div className="box__img-grad">
                <img src={Image6} alt=""/>
                </div>
                </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
