import React from 'react'
import { TestData } from "./Testdata";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaGlobeAsia } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="testmonials container section">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonials</span>
      <Swiper className="testmonials__container"
         loop={true}
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
        {TestData.map(({ id, image, title,country,countryImg, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} style={{ height: "60px" }} alt="" className="testimonial__image"  loading="lazy"/>
              <h3 className="testimonial__title-name">{title}</h3>
              <h5 className="testimonial__title-name flex gap-2 items-center">
                <span>   <img src={countryImg} alt="Morocco Flag" width="30" height={20} style={{height:"20px"}}/></span>
              <span className='text-sm'>  {country}</span> 
                </h5>
                
    

              <p className="testimonial__description line-clamp-3">{description}</p>
            </SwiperSlide>

          )
        }
        )}

      </Swiper>
    </section>

  )
}

export default Testimonials
