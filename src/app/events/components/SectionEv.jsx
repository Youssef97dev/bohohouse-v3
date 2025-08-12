"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const SectionEv = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    const imageElement = document.querySelector("#about-image");

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  return (
    <div
      id="sectionev"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col py-2 px-5 lg:px-28 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="wedding-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1740674401/casalalla-v2/casa_9_wkt43z.jpg"
          height={1000}
          width={1000}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:block hidden`}
        />
        <Image
          id="wedding-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761725/dar_ouzguita/boho_house_28_iedhxy.jpg"
          height={1000}
          width={1000}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          <h1 className="text-[20px] lg:text-[20px] leading-[28px] tracking-[2px] font-minionPro font-light mb-5 text-bgButton text-justify">
            {t("section.title")}
          </h1>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {t("section.content_1")}
          </p>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {t("section.content_2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionEv;
