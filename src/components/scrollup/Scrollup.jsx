import React from "react";
import { IoArrowUpSharp } from "react-icons/io5";

import "./scrollup.css";
import { Link } from "react-scroll";
const Scrollup = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 400) {
      scrollUp.classList.add("show");
    } else {
      if (scrollUp) {
        scrollUp.classList.remove("show");
      } else {
        return;
      }
    }
  });
  const home = "home";
  return (
    <div className="scrollup ">
      <Link to={home} smooth={true} duration={0} className="flex px-[10px] py-[10px]">
        <IoArrowUpSharp className="text-white text-2xl"/>

      </Link>
    </div>
  );
};
export default Scrollup;
