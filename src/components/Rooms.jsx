import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Rooms = () => {
  const { t } = useTranslation();
  return (
    <div
      id="rooms"
      className="flex flex-col lg:flex-row-reverse justify-center gap-9 mt-8 lg:mt-0 py-2 px-3 lg:px-10 lg:py-16  xl:px-28"
    >
      <div className="w-full flex flex-col gap-2 p-3">
        {/*<div className="lg:text-lg text-base italic text-primary ">
          {`Rooftop & Sky Bar`}
        </div>*/}
        <div className="lg:text-4xl text-3xl text-secondary font-minionPro pb-2">
          {t("rooms.title")}
        </div>
        <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
          {t("rooms.content_1")}
        </p>
        <Link
          href="/book-room"
          className="w-[50%] lg:w-[25%] text-left mt-4 py-2 px-8 uppercase tracking-widest border-b border-bgButton text-bgButton text-[12px] leading-[34px] hover:bg-bgButton hover:text-white duration-200 transition-all ease-out"
        >
          {t("rooms.button")}
        </Link>
      </div>

      <div className="w-full flex gap-5 items-center">
        <div className="w-full h-[90%]  self-start ">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761718/dar_ouzguita/boho_house_24_ysnwlh.jpg"
            alt="Boho house"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[90%] self-end ">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1741688330/dar_ouzguita/andtxygyvufimtuje3bo.jpg"
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

export default Rooms;
