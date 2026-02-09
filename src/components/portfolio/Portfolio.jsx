import React, { useState } from "react";
import AllProjects from "./AllProjects";
import "./portfolio.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoInformationCircleOutline, IoClose } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { webProjects, reactProjects, myCertificates } from "./data";
const Portfolio = () => {
  const [portTabs, setPortTabs] = useState(1);
  const [imgCert, setImgCert] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  const handleToggleCert = (index) => {
    setImgCert((prev) => (prev == index ? null : index));
  };

  const openInfo = (e, project) => {
    setModalProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = "auto";
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
                <div className="box__img-web relative">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img src={project.img} alt={project.title}  className="rounded-t-xl absolute" />
                  </a>
                  <div className="absolute top-2 right-2 z-10 group">
                    <button
                      type="button"
                      onClick={(e) => openInfo(e, project)}
                      className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                      aria-label="Project info"
                    >
                      <IoInformationCircleOutline className="w-5 h-5" />
                    </button>
                    <span className="absolute right-0 top-full mb-1.5 px-2 py-1 text-xs font-medium text-white bg-gray-800 dark:bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
                      in details
                    </span>
                  </div>
                </div>
                <div className="title__project">
                  <h3 className="pb-2">{project.title} {project.contributor&&(<span className="text-[12px] lg:text-[14px] ">(Contributor)</span>)}   </h3>
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
                <div className="box__img-react relative">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title}  className="rounded-t-xl absolute" />
                  </a>
                  <div className="absolute top-2 right-2 z-10 group">
                    <button
                      type="button"
                      onClick={(e) => openInfo(e, project)}
                      className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                      aria-label="Project info"
                    >
                      <IoInformationCircleOutline className="w-5 h-5" />
                    </button>
                    <span className="absolute right-0 top-full mb-1.5 px-2 py-1 text-xs font-medium text-white bg-gray-800 dark:bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
                      in details
                    </span>
                  </div>
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

        {/* Project detail modal (Web & React) */}
      {modalProject && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">
              <div className="flex justify-between items-start gap-4">
                <h2 id="portfolio-modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  {modalProject.title} {modalProject.country && <span className="text-sm text-gray-500 dark:text-gray-400"> - {modalProject.country}</span>}
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="shrink-0 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300"
                  aria-label="Close"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>

              {modalProject.idea && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Project idea</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {modalProject.idea}
                  </p>
                </div>
              )}

              {!modalProject.idea && modalProject.description && (
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {modalProject.description}
                  </p>
                </div>
              )}

              {modalProject.role && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">My role</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {modalProject.role}
                  </p>
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{modalProject.technologies}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href={modalProject.private ? "#" : modalProject.url} target={modalProject.private ? "" : "_blank"} rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-black/30 hover:bg-black/60 rounded-md px-3 py-1.5 transition-colors duration-150 hover:underline">
                  <HiOutlineExternalLink /> {modalProject.linkText}
                </a>
                {modalProject.dashboardUrl && (
                  <a href={modalProject.dashboardUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-black/30 hover:bg-black/60 rounded-md px-3 py-1.5 transition-colors duration-150 hover:underline">
                    <HiOutlineExternalLink /> Dashboard
                  </a>
                )}
              </div>
            </div>
          </div>
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
                    onClick={() => handleToggleCert(index)}
                  />
                </div>
                <h4 className="title__certificate">{certificate.title}</h4>
                <h5 className="content__certificate">{certificate.description}</h5>
                <h5 className="view__container">
                  <span
                    onClick={() => handleToggleCert(index)}
                    className="view_certificate"
                  >
                    View
                  </span>
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </h5>
                <div className={imgCert == index ? "showgrad" : "hidegrad"}>
                  <div onClick={() => handleToggleCert(index)}
                    className="close__img-grad cursor-pointer"
                  >
                     <IoClose className="w-6 h-6" />
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
