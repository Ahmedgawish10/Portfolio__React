import React from 'react'
import { TestData } from "./Testdata";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";


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
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
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
        modules={[Autoplay, Pagination]}
      >
        {TestData.map(({ id, image, title, country, countryImg, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <div className='flex items-center gap-2'>
                <img src={image} style={{ height: "60px" }} alt="" className="testimonial__image" loading="lazy" />
                <span className=' relative text-xs flex items-center  gap-1 self-start'>

                  <div class="ping absolute left-[-10px] top-[-10px] z-10 text-red text-[#0ABB0A]"></div>
                  {country}
                </span>
              </div>
              <h3 className="testimonial__title-name flex  gap-2 relative">{title}
              </h3>
   
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
