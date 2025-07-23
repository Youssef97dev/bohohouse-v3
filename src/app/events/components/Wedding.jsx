"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Wedding = () => {
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
      id="wedding"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col py-2 px-5 lg:px-28 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="wedding-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1736934807/casalalla-v2/s1vrdwmbtl5wjuglo5fl.jpg"
          height={1000}
          width={1000}
          alt="Boho house"
          priority
          className={`object-cover w-full h-full  md:block hidden`}
        />
        <Image
          id="wedding-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1736934807/casalalla-v2/s1vrdwmbtl5wjuglo5fl.jpg"
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
            {`SPECTACULAR WEDDINGS`}
          </h1>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`Set against the natural backdrop we have orchestrated some of the most spectacular and memorable luxury weddings in marrakech if not the entire Mediterranean. Our specialist wedding services are all you need to transform your dream day into a truly special occasion you will treasure forever. Regardless of the size of your event, from the moment you contact us, we work tirelessly to bring your ideas to life, taking care of everything from preparation to last-minute details, allowing you to relax and focus on what truly matters.`}
          </p>
          <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
            {`Opt to stay in a private villa and host your ceremony and celebrations here — even your bachelor party or a day-after spa ritual to recover in style! As with any great event, food is vitally important, and our executive chefs relish the challenge of tailoring a gastronomic experience to your tastes. Whether you choose to work with your own wedding planners and require our assistance or prefer a total event solution, we cover every detail — from food, travel, and drinks to arrangements, music, fireworks, decoration, and even honeymoon planning and execution.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
