import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
const Footer = () => {
  const about = "about";
  const portfolio = "portfolio";
  const services = "services";

  return (
    <footer className="footer " id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <a href="#"> Gawish</a>
        </h1>
        <ul className="footer__list">
          <li>
            <Link
              to={about}
              smooth={true}
              duration={1500}
              className="footer__link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={portfolio}
              smooth={true}
              duration={1500}
              className="footer__link"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={services}
              smooth={true}
              duration={1500}
              className="footer__link"
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <div className="footer__copy">
          &#169; Crypticalcoder. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
