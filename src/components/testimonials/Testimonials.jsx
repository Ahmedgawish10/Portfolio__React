import React from 'react'
import {TestData} from "./Testdata";
import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
 import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section className="testmonials container section">
               <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonials</span>

            <Swiper className="testmonials__container"
            // loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
           >
                {TestData.map(({id,image,title,description})=>{
                    return(
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} style={{height:"60px"}} alt="" className="testimonial__image"/>
                            <h3 className="testimonial__title-name">{title}</h3>
                            <p className="testimonial__description">{description}</p>


                        </SwiperSlide>

                    )
                    }
                )}

            </Swiper>
        
        </section>

    )
}

export default Testimonials
