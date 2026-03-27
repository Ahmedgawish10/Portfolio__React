import React, { useState } from 'react';
import './services.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { TfiPencilAlt } from "react-icons/tfi";
import { BsCreditCard2Front } from "react-icons/bs";

const Services = () => {
  const [openModalId, openModel] = useState(0);

  const NumberTab = (index) => {
     document.body.style.overflow = "hidden";
    openModel(index);
  };
  const closeModel = () => {
    document.body.style.overflow = "auto";
    openModel(false);
  };
  const services = [
    {
      id: 1,
      icon: <BsCreditCard2Front className='text-2xl mb-[-3px]' />,
      title: "Frontend Developer",
      description: "Services with more than 3 years of experience.",
      tasks: [
        "Convert Figma designs into high-quality, responsive web interfaces using React and Next.js",
        "Build scalable and responsive user interfaces from Figma and Canva designs using Tailwind CSS",
        "Develop interactive and user-friendly web applications with clean, maintainable code",
        "Translate UI/UX designs into pixel-perfect, functional components",
        "Ensure cross-browser compatibility and optimize application performance",
        "Collaborate with designers to deliver consistent and brand-aligned user interfaces"
      ]
    },
    {
      id: 2,
      icon: <TfiPencilAlt className='text-2xl' />,
      title: "Web Developer",
      description: "Services with more than 2 year of experience.",
      tasks: [
        "Develop dynamic and scalable web applications using PHP, Laravel, and MySQL",
        "Design website layouts and product mockups aligned with business needs",
        "Create job portal applications for publishing and managing job listings",
        "Maintain and enhance existing Laravel projects",
        "Optimize application performance and improve response time",
        "Improve database queries and backend logic for faster load times"
      ]
    },
    {
      id: 3,
      icon: <FiFigma className='text-2xl' />,
      title: "UI/UX Designer",
      description: "Services with 3 years of experience.",
      tasks: [
        "Utilizing Figma's comprehensive design features to craft pixel-perfect UI designs",
        "Experience in previewing and testing designs to ensure optimal presentation",
        "Expertise in customizing templates, including modifying text, colors, images",
        "UI Design and Mockup Creation Using Canva and Figma",
        "Proficient in exporting designs in multiple formats",
      ]
    }
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {services.map((service) => (
          <div key={service.id} className="services__content">
            <div>
              {service.icon}
              <h3 className="services__title">{service.title}</h3>
            </div>
            <span
              className="services__button flex items-center"
              onClick={() => NumberTab(service.id)}
            >
              View More
              <FaLongArrowAltRight className="services__button-icon text-xl gap-3" />
            </span>
            <div
              className={openModalId === service.id ? "services__model services__model-show" : "services__model"}
            >
              <div className="services__model-content">
                <div className="close__model">
                  <IoMdClose
                    className="uil uil-times button__close-icon"
                    onClick={closeModel}
                  />
                </div>
                <h3 className="services__model-title">{service.title}</h3>
                <p className="services__model-description">{service.description}</p>
                <ul className="services__model-task">
                  {service.tasks.map((task, index) => (
                    <li key={index}>
                      <IoMdCheckmarkCircleOutline className="text-xl" />
                      <span className="services__model-text">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
