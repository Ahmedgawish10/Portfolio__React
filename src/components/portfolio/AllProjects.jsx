import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { allProjects } from "./data";
import ReactPaginate from 'react-paginate';
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Alldata = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const offset = currentPage * itemsPerPage;
  const currentProjects = allProjects.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(allProjects.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    const container = document.querySelector('.portfolio');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openInfo = (e, project) => {
    setModalProject(project);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="All-projects">
      <div className="portfolio__all-data">
        {currentProjects.map((project,index) => (
          <div className="box" key={index}>
            <div className="box__img relative">
              <a href={project.private ? "#" : project.url} target={project.private ? "" : "_blank"} rel="noreferrer">
                <img src={project.image} alt={project.title}  className={`rounded-t-xl absolute ${project.style || ""}`}/>
              </a>
              <div className="absolute top-2 right-2 z-10 group">
                <button
                  type="button"
                  onClick={(e) => openInfo(e, project)}
                  className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                  aria-label="Project info"
                  // title="Info"
                >
                  <IoInformationCircleOutline className="w-5 h-5" />
                </button>
                <span className="absolute right-0 top-full mb-1.5 px-2 py-1 text-xs font-medium text-white bg-gray-800 dark:bg-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap">
                  in details
                </span>
              </div>
            </div>
            <div className="title__project">
              <h3 className="pb-2">{project.title}
                {project.private&&(<span> (Private)</span>)}
                {project.contributor&&(<span className="text-[12px] lg:text-[14px] ">(Contributor)</span>)}  
              </h3>
              <span>{project.description}</span>
            </div>
            <div className="">
              <span className="font-bold  ">Technologies</span>: {project.technologies}
            </div>
            <h5 className="pt-1 flex gap-2 items-center">
              <a href={project.private? "#":project.url} target={project.private?"":"_blank"} rel="noreferrer" className="flex gap-2 items-center">
             {project.private? "":  <HiOutlineExternalLink/>}
                {project.linkText}
                {project.private}
                {project.private?"": <FaArrowRightLong className="services__button-icon" />}
               
              </a>
            </h5>
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        pageClassName="page-number hidden"
        nextLabel="Next >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<< Prev"
        containerClassName="pagination sm:container  px-8 flex gap-0 md:gap-6 justify-center mt-5"
        activeClassName="active"
      />

      {modalProject && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">
              <div className="flex justify-between items-start gap-4">
                <h2 id="project-modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
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
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Project idea </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {modalProject.idea}
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
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Alldata;







