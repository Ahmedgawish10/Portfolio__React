import React, { useState } from 'react';
import './services.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { TfiPencilAlt } from "react-icons/tfi";
import { BiCreditCardFront } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";

const Services = () => {
  const [closeModel, openModel] = useState(0);

  const NumberTab = (index) => {
    openModel(index);
  };

  const services = [
    {
      id: 1,
      icon: <BsCreditCard2Front className='text-2xl mb-[-3px]' />,
      title: "Frontend Developer",
      description: "Services with more than 2 years of experience.",
      tasks: [
        "Convert Figma UI templates to websites using React and Next.js",
        "Transform Canva UI designs into responsive websites with React and Tailwind",
        "Build functional websites from Figma and Canva templates with React and Next.js",
        "Convert Canva UI designs into dynamic websites with React and Tailwind",
        "Create interactive mockups with React and Tailwind, tailored to branding"
      ]
    },
    {
      id: 2,
      icon: <TfiPencilAlt className='text-2xl' />,
      title: "Web Developer",
      description: "Services with more than 1 year of experience.",
      tasks: [
        "Develop dynamic and scalable websites using PHP and MySQL",
        "Design websites with high performance and SEO optimization",
        "Create job portal app for announcing new jobs for seekers",
        "Design and mockups of products for companies",
        "Edit and maintain Laravel projects"
      ]
    },
    {
      id: 3,
      icon: <FiFigma className='text-2xl' />,
      title: "UI/UX Designer",
      description: "Services with 1 year of experience.",
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
