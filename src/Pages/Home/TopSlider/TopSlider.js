import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./topSlider.css";
import { Navigation } from "swiper";

const TopSlider = () => {
    return (
        <div className='bg-white shadow-sm rounded-md p-4 mt-3'>
             <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-36" src="https://placeimg.com/200/280/arch" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default TopSlider;