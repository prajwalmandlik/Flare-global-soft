import React from "react";
import "./testimonials.css";
import { Avatar } from "@mui/material";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <section className="container testimonials">
      <div className="section-text">
        <h2 className="section_title">Testimonials</h2>
        <span className="section_subtitle">
          This is what our esteemed clients have to say for us
        </span>
      </div>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="carosel"
      >
        {Data.map((i) => {
          return (
            <SwiperSlide className="client-card">
              <div className="client-message">{i.Message}</div>
              <div className="client-info">
                <Avatar src={i.img}></Avatar>
                <div className="client">
                  <h4 className="client-name">{i.name}</h4>
                  <span className="client-post">{i.post}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
