import React, { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { BsBagCheck  } from "react-icons/bs";
import { HiOutlinePhoto  } from "react-icons/hi2";
import { AiOutlineSend  } from "react-icons/ai";
import {BsSun} from "react-icons/bs"
import {BsMoon} from "react-icons/bs"

const Header = ({theme,toggletheme}) => {
  /*===========change backgrond header==============*/
  window.addEventListener("scroll",()=>{
    const header=document.querySelector(".header");
    if (window.scrollY>=560) {
      header.classList.add("header-background");
    }
    else{
      if(header){

        header.classList.remove("header-background")
      }else{
        return ;
      }

    }

})
  /*==============toggle menu============*/
  const [hidemenu, showmenu] = useState(0);
  const [activnav,setactivnav]=useState("#home");
  const headerLinks = {
home:"home",
  about:"about",
  skills:"skills",
  services:"services",
  portfolip:"portfolio",
  contact:"contact",

};

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Gawish
        </a>
<div className="site__mode " style={{cursor:"pointer"}}onClick={toggletheme}>
  {theme=="light"? <BsMoon style={{fontSize:"18px"}}/>:<BsSun  style={{color:"FFE87C",fontSize:"18px"}}/>}
  </div>
        <div className={hidemenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to={headerLinks.home}
                smooth={true}
                duration={0}
                onClick={()=>{setactivnav("#home")}}
                className={activnav==="#home"?"nav__link active-link":"nav__link "}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
            <Link
                to={headerLinks.about}
                smooth={true}
                duration={0}
                className="nav__link "
              >
               <AiOutlineUser className=" nav__icon" style={{width:"19px",height:"19px",marginBottom:"8px"}}/>About
              </Link>
            </li>
            <li className="nav__item">
            <Link
                to={headerLinks.skills}
                smooth={true}
                duration={0}
                onClick={()=>{setactivnav("#skills")}}
                className={activnav==="#skills"?"nav__link active-link":"nav__link "}
              >
                <GiNotebook className=" nav__icon" style={{width:"19px",height:"19px",marginBottom:"8px"}}/>Skills
              </Link>
            </li>
            <li className="nav__item">
            <Link
                to={headerLinks.services}
                smooth={true}
                duration={0}
                onClick={()=>{setactivnav("#services")}}
                className={activnav==="#services"?"nav__link active-link":"nav__link "}
              >                
                <BsBagCheck className=" nav__icon"  style={{width:"19px",height:"19px",marginBottom:"8px"}}/>Services
              </Link>
            </li>
            <li className="nav__item">
            <Link
                to={headerLinks.portfolip}
                smooth={true}
                duration={0}
                onClick={()=>{setactivnav("#portfolio")}}
                className={activnav==="#portfolio"?"nav__link active-link":"nav__link "}
              >
                < HiOutlinePhoto className=" nav__icon" style={{width:"19px",height:"19px",marginBottom:"8px"}}/>Portfolio
              </Link>
            </li>
            <li className="nav__item">
            <Link
                to={headerLinks.contact}
                smooth={true}
                duration={0}
                onClick={()=>{setactivnav("#contact")}}
                className={activnav==="#contact"?"nav__link active-link":"nav__link "}              >
          <  AiOutlineSend className=" nav__icon" style={{width:"19px",height:"19px",marginBottom:"8px"}}/>Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              showmenu(!hidemenu);
            }}
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            showmenu(!hidemenu);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
