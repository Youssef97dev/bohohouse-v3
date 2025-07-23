"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Experts = () => {
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
      id="experts"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col py-2 px-5 lg:px-28 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="expert-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1752769033/dar_ouzguita/boho_house_10_lik271.jpg"
          height={1000}
          width={1000}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:block hidden`}
        />
        <Image
          id="expert-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761727/dar_ouzguita/boho_house_29_lam1yu.jpg"
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
            {`THE EVENT EXPERTS`}
          </h1>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`At every step of your event preparations, a passionate and highly experienced team is at your disposal, dedicated to making your every wish come true.`}
          </p>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`We’ve assembled an incredibly talented team and a stellar roster of professionals we partner with. The goal is to make your event appear effortless, flow smoothly, and become a cherished memory for everyone who attends.`}
          </p>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`Each event is designed from the ground up to fit your requirements and weddings for couples from around the world, a sophisticated company retreat, a delightful bat mitzvah, or a sleek business conference. This also includes specialized catering, romantic fresh flower arrangements, brilliant DJs, elegant decorations, and comprehensive technical equipment to cover.`}
          </p>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`Personalized service is at the heart of our orgonisation down to the transportation.`}
          </p>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`Whether it’s transporting your guests in style or making your arrival unforgettable, we have a fleet of S-Class limousines, Range Rovers, and Mercedes minibuses and coaches at your disposal. Meeting and exceeding your guest's expectations is our priority, they explain, which seems to be the key to their success.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
