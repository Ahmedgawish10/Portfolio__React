import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { TbBrandUpwork } from "react-icons/tb";
import Upwrok from "../../assets/upwork.png"
const Social = () => {
    return (
      <div className="home__social ">
          <a href="https://www.linkedin.com/in/ahmed-gawish-718b27213" className="home__social-icon" target="_blank">
          <AiFillLinkedin style={{width:"25px",height:"25px"}}/>

          </a>

          <a href="https://github.com/Ahmedgawish10" className="home__social-icon" target="_blank">
          <BsGithub style={{width:"25px",height:"25px"}}/>  
                    </a> 
                    <a href="https://www.upwork.com/freelancers/~01d2fb08754ad6fb6d" className="home__social-icon rounded-full bg-white" target="_blank">
          <img src={Upwrok} alt=""  style={{width:"25px",height:"25px"}} />
                    </a>
          <a href="https://m.facebook.com/profile.php/?id=100022787090778" className="home__social-icon" target="_blank">
          <AiFillFacebook style={{width:"25px",height:"25px"}}/>
                    </a>
      </div>
    )
}

export default Social
