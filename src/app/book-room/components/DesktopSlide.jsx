"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const items = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/n2hsl8qslezhsedhvrl8",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/xudf449mxbdrautxekdt",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/qapkxhjh3gd36ymkdc94",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/un8aqw92maucn4omavws",
];

const DesktopSlide = ({ slides, title }) => {
  return (
    <div className="relative w-full h-[60vh]">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={slides}
        speed={1400}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-ex1",
          prevEl: ".swiper-button-prev-ex1",
        }}
        className="swiper w-full h-full"
        id="slider1"
      >
        <div className="swiper-wrapper">
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={`${item}`}
                  width={300}
                  height={300}
                  alt="Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla"
                  priority
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute z-30 bottom-0 left-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(to top, #00000063, transparent)",
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      <div className="absolute w-full flex justify-center items-center bottom-0 z-20 text-center">
        <h1 className="font-sunn text-white text-[45px] lg:text-[75px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default DesktopSlide;
