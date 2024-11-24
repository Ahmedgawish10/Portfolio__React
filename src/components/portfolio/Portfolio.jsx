import React, { useState } from "react";
import AllProjects from "./AllProjects";
import "./portfolio.css";
import { FaArrowRightLong } from "react-icons/fa6";


import { webProjects, reactProjects, myCertificates } from "./data";
const Portfolio = () => {
  const [portTabs, setPortTabs] = useState(1);
  const [imgCert, setImgCert] = useState(null);

  const handleToggleCert = (index) => {
    setImgCert((prev) => (prev == index ? null : index));
  };

  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most projects</span>

      <div className="portfolio__container container grid">
        {/* Portfolio Tabs */}
        <div className="portfolio__tabs">
          {["All", "Web", "React", "Certificates"].map((tab, index) => (
            <button
              key={index}
              className={portTabs === index + 1 ? "button-active" : "portolio__tabs-button"}
              onClick={() => setPortTabs(index + 1)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* All Projects */}
        {portTabs === 1 && (
          <div className="portfolio__all-show">
            <AllProjects />
          </div>
        )}
        {/* Web Projects */}
        {portTabs === 2 && (
          <div className="portfolio__web-show">
            {webProjects.map((project, index) => (
              <div className="box" key={index}>
                <div className="box__img-web">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img src={project.img} alt={project.title}  className="rounded-t-xl absolute" />
                  </a>
                </div>
                <div className="title__project">
                  <h3 className="pb-2">{project.title}</h3>
                  <span>{project.description}</span>
                  <div>Technologies: ({project.technologies})</div>
                  <h5 className="pt-1">
                    <a href={project.url} target="_blank" rel="noreferrer" className="flex gap-2 items-center">
                      {project.linkText}
                      <FaArrowRightLong className="services__button-icon" />
                    </a>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* React Projects */}
        {portTabs === 3 && (
          <div className="portfolio__web-show">
            {reactProjects.map((project, index) => (
              <div className="box" key={index}>
                <div className="box__img-react">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title}  className="rounded-t-xl absolute" />
                  </a>
                </div>
                <h4 className="title__project">{project.title}</h4>
                <h5 className="content__certificate">{project.description}</h5>
                <div>Technologies: ({project.technologies})</div>
                <h5 className="pt-1">
                  <a href={project.url} target="_blank" rel="noreferrer" className="flex gap-2 items-center">
                    {project.linkText}
                    <FaArrowRightLong className="services__button-icon" />
                  </a>
                </h5>
              </div>
            ))}
          </div>
        )}

        {/* Certificates */}
        {portTabs === 4 && (
          <div className="portfolio__web-show certificate">
            {myCertificates.map((certificate, index) => (
              <div className="box" key={index}>
                <div className="box__img-cert ">
                  <img
                    src={certificate.img}
                    alt={certificate.title}
                    className={`cursor-pointer rounded-t-xl absolute ${index == 1 ? "h-full w-full" : ""} `}
                    onClick={() => handleToggleCert(index)}//0-1
                  />
                </div>
                <h4 className="title__certificate">{certificate.title}</h4>
                <h5 className="content__certificate">{certificate.description}</h5>
                <h5 className="view__container">
                  <span
                    onClick={() => handleToggleCert(index)}//0-1
                    className="view_certificate"
                  >
                    View
                  </span>
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </h5>
                <div className={imgCert == index ? "showgrad" : "hidegrad"}>
                  <div onClick={() => handleToggleCert(index)}//0-1
                    className="close__img-grad cursor-pointer"
                  >
                    <i className="uil uil-times"></i>
                  </div>
                  <div className="box__img-grad flex justify-center z-[-10px] items-center">
                    <img src={certificate.img} className={`  md:h-[90%] w-[60%] `} alt={certificate.title}  />

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
