import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { allProjects } from "./data";
import ReactPaginate from 'react-paginate';

const Alldata = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <div className="All-projects">
      <div className="portfolio__all-data">
        {currentProjects.map((project,index) => (
          <div className="box" key={index}>
            <div className="box__img">
              <a href={project.url} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title}  className={`rounded-t-xl absolute ${project.id==5 ||project.id==8 ?"h-[100%]":""}`}/>
              </a>
            </div>
            <div className="title__project">
              <h3 className="pb-2">{project.title}{project.private&&(<span> (Private)</span>)}</h3>
              <span>{project.description}</span>
            </div>
            <div className="">
              <span className="font-bold  ">Technologies</span>: {project.technologies}
            </div>
            <h5 className="pt-1">
              <a href={project.private? "#":project.url} target={project.private?"":"_blank"} rel="noreferrer" className="flex gap-2 items-center">
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
    </div>

  );
};

export default Alldata;







