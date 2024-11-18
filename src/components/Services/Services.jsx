import React, { useState } from 'react';
import './services.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Services = () => {
  const [closeModel, openModel] = useState(0);

  const NumberTab = (index) => {
    openModel(index);
  };

  const services = [
    {
      id: 1,
      icon: "uil-web-grid",
      title: "Frontend Developer",
      description: "Services with more than 2 years of experience.",
      tasks: [
        "Design and convert templates figma UI to real websites",
        "Design and convert templates Canva UI to responsive web experiences",
        "Transform Figma and Canva UI templates into fully functional websites",
        "Experienced in converting Canva UI designs into dynamic websites",
        "Create interactive front-end mockups tailored to company branding",
      ]
    },
    {
      id: 2,
      icon: "uil-edit",
      title: "Web Developer",
      description: "Services with more than 1 year of experience.",
      tasks: [
        "Design websites with high performance and SEO optimization",
        "Create job portal app for announcing new jobs for seekers",
        "Design and mockups of products for companies",
        "Convert UI templates to real websites",
        "Design and mockups of products for companies",
      ]
    },
    {
      id: 3,
      icon: "uil-arrow",
      title: "UI/UX Designer",
      description: "Services with 1 year of experience.",
      tasks: [
        "UI Design and Mockup Creation Using Canva",
        "Proficient in exporting designs in multiple formats",
        "Expertise in customizing templates, including modifying text, colors, images",
        "Experience in previewing and testing designs to ensure optimal presentation",
        "Utilizing Figma's comprehensive design features to craft pixel-perfect UI designs",
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
              <i className={`uil ${service.icon} services__icon`}></i>
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
              className={closeModel === service.id ? "services__model services__model-show" : "services__model"}
            >
              <div className="services__model-content">
                <div className="close__model">
                  <IoMdClose
                    className="uil uil-times button__close-icon"
                    onClick={() => openModel(0)} 
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
