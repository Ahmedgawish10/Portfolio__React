import React, { useState } from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa6";
import { RiMacbookLine } from "react-icons/ri";

const Qualification = () => {
  const [hide, setHide] = useState(1);
  const handleTab = (index) => setHide(index);

  const tabs = [
    { id: 1, label: "Education", icon: <FaGraduationCap className="qualification__icon" /> },
    { id: 2, label: "Experience", icon: <RiMacbookLine className="qualification__icon" /> },
  ];

  const educationData = [
    {
      title: "I T S.",
      subtitle: "PortSaid - University\nFaculty of Information\nTechnology",
      calendar: "2019 - 2023",
      side: "left",
    },
    {
      title: "Web Development",
      subtitle: "Institute - I T I\nSummer Training",
      calendar: "6/2022 - 7/2022",
      side: "right",
    },
    {
      title: "Fullstack PHP Developer",
      subtitle: "Institute - I T I\nIntensive Course",
      calendar: "1/2024 - 5/2024",
      side: "left",
      last: true,
    },
  ];

  const experienceData = [
     {
      title: "Front-end Developer",
      subtitle: "Aim United Company Ltd",
      calendar: "5/2025 - Present",
      side: "left",
    },
    {
      title: "Front-end Developer",
      subtitle: "Freelancer (Upwork)",
      calendar: "2022 - Present",
      side: "right",
    },
    {
      title: "Web Developer",
      subtitle: "Institute - I T I\nTraining",
      calendar: "1/2024 - 5/2024",
      side: "left",
    },
    {
      title: "Front-end Developer",
      subtitle: "Rukn It",
      calendar: "6/2024 - 12/2024",
      side: "right",
      last: true,
    },
    
  ];

  const renderSection = (data) =>
    data.map((item, index) => (
      <div className="qualification__data" key={index}>
        {item.side === "left" ? (
          <>
            <div>
              <h3 className="qualification__title mb-2">{item.title}</h3>
              <span className="qualification__subtitle">
                {item.subtitle.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {item.calendar}
              </div>
            </div>
            <div>
              <span className="quaification-roundder"></span>
              <span className={`qualification__line ${item.last ? "last" : ""}`}></span>
            </div>
          </>
        ) : (
          <>
            <div></div>
            <div>
              <span className="quaification-roundder"></span>
              <span className={`qualification__line ${item.last ? "last" : ""}`}></span>
            </div>
            <div>
              <h3 className="qualification__title mb-2">{item.title}</h3>
              <span className="qualification__subtitle">
                {item.subtitle.split("\n").map((line, i) => (
                  <div key={i}>
                    {line}
                    <br />
                  </div>
                ))}
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {item.calendar}
              </div>
            </div>
          </>
        )}
      </div>
    ));

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`gap-2 qualification___button button--flex ${
                hide === tab.id ? "qualified-active" : "overlay-color"
              }`}
              onClick={() => handleTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          <div
            className={
              hide === 1
                ? "qualification__content qualification__content-active w-70"
                : "qualification__content"
            }
          >
            {renderSection(educationData)}
          </div>

          <div
            className={
              hide === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderSection(experienceData)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
