import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="flex flex-col lg:flex-row justify-center gap-9 py-2 px-3 lg:px-10 lg:py-16  xl:px-28"
    >
      <div className="w-full flex flex-col gap-2 p-3">
        <div className="lg:text-base text-sm  text-primary font-minionPro">
          {t("events.title_1")}
        </div>
        <div className="lg:text-4xl text-3xl text-secondary font-minionPro pb-2">
          {t("events.title_2")}
        </div>
        <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
          {t("events.content_1")}
        </p>
        <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
          {t("events.content_2")}
        </p>
        <Link
          href="/events"
          className="w-[50%] lg:w-[25%] text-left mt-4 py-2 px-8 uppercase tracking-widest border-b border-bgButton text-bgButton text-[12px] leading-[34px] hover:bg-bgButton hover:text-white duration-200 transition-all ease-out"
        >
          {t("events.button")}
        </Link>
      </div>

      <div className="w-full flex gap-5 items-center">
        <div className="w-full h-[90%]  self-end ">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761725/dar_ouzguita/boho_house_28_iedhxy.jpg"
            alt="boho house"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[90%] self-start ">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761710/dar_ouzguita/boho_house_18_wrism4.jpg"
            alt="Boho house"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
