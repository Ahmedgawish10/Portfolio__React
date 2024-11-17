import React,{useState} from "react";
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
    window.scrollTo(2500, 2500);
  };

  return (
<div className="di">
<div className="portfolio__all-data">
      {currentProjects.map((project) => (
        <div className="box" key={project.id}>
          <div className="box__img">
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
          </div>
          <div className="title__project">
            <h3 className="pb-2">{project.title}</h3>
            <span>{project.description}</span>
          </div>
          <div>
            <span className="font-bold">Technologies</span>: {project.technologies}
          </div>
          <h5 className="pt-1">
            <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex gap-2 items-center">
            {project.linkText}
              <FaArrowRightLong  className="services__button-icon"/>
            </a>
          </h5>
        </div>
      ))}
    </div>
    
<ReactPaginate
        breakLabel="..."
        nextLabel="next "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" previous"
        containerClassName="pagination  px-8 flex gap-6 justify-center mt-5"
        activeClassName="active"
      />
</div>
  
  );
};

export default Alldata;







