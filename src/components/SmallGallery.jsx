"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761720/dar_ouzguita/boho_house_27_jbjoek.jpg",
    text: "AS ABOVE SO BELOW",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761694/dar_ouzguita/boho_house_13_osuqms.jpg",
    text: "HAVEN OF TRANQUILITY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1744887329/dar_ouzguita/tvlvixptyfyphszl1j8n.jpg",
    text: "WILDERNESS VALLEY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1740674401/casalalla-v2/casa_9_wkt43z.jpg",
    text: "Offering an authentic taste",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1740674397/casalalla-v2/casa_7_walijv.jpg",
    text: "HAVEN OF TRANQUILITY",
  },
];

const imagesMobile = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761719/dar_ouzguita/boho_house_25_ub1qei.jpg",
    text: "AS ABOVE SO BELOW",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761706/dar_ouzguita/boho_house_21_uubt7h.jpg",
    text: "HAVEN OF TRANQUILITY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761701/dar_ouzguita/boho_house_17_wi96y2.jpg",
    text: "WILDERNESS VALLEY",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1752761686/dar_ouzguita/boho_house_5_w595cx.jpg",
    text: "Offering an authentic taste",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/v1741688752/dar_ouzguita/in4qfsdtdeuoq306ufp1.jpg",
    text: "HAVEN OF TRANQUILITY",
  },
];

const SmallGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full px-3 lg:px-28 pt-3">
      <div className="relative w-full h-screen hidden lg:block">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 w-full h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`boho house`}
              height={2000}
              width={2000}
              priority
              className="object-cover w-full h-full shadow-md "
            />
            <div className="absolute top-1/2 w-full text-center text-white text-[75px] font-sunn">
              {image.text}
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full h-screen lg:hidden block">
        {imagesMobile.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 w-full h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`boho house`}
              height={2000}
              width={2000}
              priority
              className="object-cover w-full h-full shadow-md "
            />
            <div className="absolute top-1/2 w-full text-center text-white text-[45px] font-sunn">
              {image.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallGallery;
