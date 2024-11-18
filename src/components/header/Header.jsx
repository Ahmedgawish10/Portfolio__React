import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./header.css";
import { AiOutlineUser, AiOutlineSend } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { BsBagCheck, BsSun, BsMoon } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";

const Header = ({ theme, toggletheme }) => {
  const [hidemenu, showmenu] = useState(false);
  const [activnav, setactivnav] = useState("#home");

  const headerLinks = {
    home: "home",
    about: "about",
    skills: "skills",
    services: "services",
    portfolio: "portfolio",
    contact: "contact",
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add("header-background");
        } else {
          header.classList.remove("header-background");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Gawish
        </a>
        <div
          className="site__mode"
          style={{ cursor: "pointer" }}
          onClick={toggletheme}
        >
          {theme === "light" ? (
            <BsMoon style={{ fontSize: "18px" }} />
          ) : (
            <BsSun style={{ color: "FFE87C", fontSize: "18px" }} />
          )}
        </div>
        <div className={hidemenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {Object.keys(headerLinks).map((key) => (
              <li className="nav__item" key={key}>
                <Link
                  to={headerLinks[key]}
                  smooth={true}
                  duration={0}
                  onClick={() => setactivnav(`#${key}`)}
                  className={activnav === `#${key}` ? "nav__link active-link" : "nav__link"}
                >
                  {key === "home" && (
                    <i className="uil uil-estate nav__icon"></i>
                  )}
                  {key === "about" && (
                    <AiOutlineUser className="nav__icon" />
                  )}
                  {key === "skills" && (
                    <GiNotebook className="nav__icon" />
                  )}
                  {key === "services" && (
                    <BsBagCheck className="nav__icon" />
                  )}
                  {key === "portfolio" && (
                    <HiOutlinePhoto className="nav__icon" />
                  )}
                  {key === "contact" && (
                    <AiOutlineSend className="nav__icon" />
                  )}
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showmenu(!hidemenu)}
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => showmenu(!hidemenu)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
