import React from 'react'
import"./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Ahmed from "../../assets/ahmd-img.jpeg"
const Home = () => {

    return (
     <section className="home section" id="home">
         <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
                <div className="home__img"></div>
                {/* <div className="home__box-img md:order-4" >
                <img src={Ahmed} className="home__img "  priority />
                </div> */}
                <Data/>
            </div>
            <ScrollDown/>
         </div>
     </section>
    )
}

export default Home
