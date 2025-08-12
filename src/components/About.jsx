import Image from "next/image";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center gap-9 py-2 px-3 lg:px-10 lg:py-16  xl:px-28"
    >
      <div className="w-full flex flex-col gap-2 p-3">
        <div className="lg:text-base text-sm  text-primary font-minionPro">
          {t("about.title")}
        </div>
        <div className="lg:text-4xl text-3xl text-secondary font-minionPro pb-2">
          {t("about.title_2")}
        </div>
        <p className="text-[16px] lg:text-[16px] lg:font-light  tracking-wider leading-[25px] lg:leading-[35px]  text-justify py-1 text-[#564138]">
          {t("about.content_1")}
        </p>
      </div>

      <div className="w-full flex gap-5 items-center">
        <div className="w-full h-[90%]  self-end ">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761719/dar_ouzguita/boho_house_25_ub1qei.jpg"
            alt="boho house"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-[90%] self-start ">
          <Image
            src="https://res.cloudinary.com/dz7wroord/image/upload/v1752761727/dar_ouzguita/boho_house_29_lam1yu.jpg"
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

export default About;
