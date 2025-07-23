"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import { FaMailBulk } from "react-icons/fa";
import { PiInstagramLogo, PiWhatsappLogo } from "react-icons/pi";

const Toolbar = ({ gallery = false }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  return (
    <>
      <div
        className={`fixed z-30 top-0 w-full flex flex-col justify-center items-center transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-100"
        }`}
      >
        <div
          className={`w-full flex justify-between items-center px-3 lg:px-8 pt-2 py-0 lg:py-2 bg-secondary text-primary text-[12px] leading-[18px] `}
        >
          <button
            className="text-primary py-2 px-4 tracking-widest"
            onClick={() => changeLanguage(t("navbar.lang_code"))}
          >
            {t("navbar.lang_text")}
          </button>
          <div className="flex justify-center items-center gap-3 text-primary">
            <Link href="#" target="_blank">
              <PiWhatsappLogo size={20} />
            </Link>
            <Link href="#" target="_blank">
              <PiInstagramLogo size={20} />
            </Link>
            <Link
              href="/book-room"
              target="_blank"
              className="px-4 py-2 bg-white rounded-t-md text-secondary block lg:hidden tracking-widest uppercase"
            >
              <span>{t("navbar.reservation")}</span>
            </Link>
          </div>
        </div>
        <nav
          className={`w-full hidden lg:block transition-all duration-200 ease-linear font-light px-10 ${
            isVisible ? "bg-transparent" : "bg-white shadow-md"
          }`}
        >
          <div className="max-w-full mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/">
              <Image
                src={isVisible ? "/logo-4.png" : "/logo-2.png"}
                alt="Boho house"
                width={120}
                height={120}
                className="cursor-pointer"
              />
            </Link>
            <ul
              className={`w-full flex justify-center items-center gap-8 text-[18px] leading-[54px] capitalize ${
                isVisible ? "text-white" : "text-secondary"
              }`}
            >
              <li>
                <Link href="/" className="cursor-pointer p-2">
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="cursor-pointer p-2">
                  {t("navbar.about")}
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="cursor-pointer p-2">
                  {t("navbar.gallery")}
                </Link>
              </li>
              <li>
                <Link href="#shows" className="cursor-pointer p-2">
                  {t("navbar.shows")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="cursor-pointer p-2">
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
            <Link
              href="/book-room"
              target="_blank"
              className={`w-1/6 text-center tracking-widest uppercase px-6 py-3 text-[15px]  duration-200 transition-all rounded-tl-md rounded-br-md bg-secondary text-primary hover:bg-primary hover:text-secondary`}
            >
              {t("navbar.reservation")}
            </Link>
          </div>
        </nav>
        <div
          className={`w-full flex justify-between items-end lg:hidden transition-all duration-300 px-3 py-2 ${
            isVisible && !gallery ? "bg-transparent" : "bg-white shadow-md"
          }`}
        >
          <Link href="/">
            <Image
              src={isVisible && !isOpen ? "/logo-4.png" : "/logo-2.png"}
              alt="Boho house"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <div
            className={`${
              isVisible && !isOpen ? "text-white" : "text-secondary"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <RiArrowDropDownFill size={45} />
            ) : (
              <RiArrowDropUpFill size={45} />
            )}
          </div>
        </div>
      </div>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full"
        enterTo="transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0"
        leaveTo="transform -translate-y-full"
      >
        <div className="fixed top-6 right-0 z-20 w-full h-screen bg-white flex flex-col items-center justify-center gap-10">
          <ul
            className={`w-1/2 flex flex-col justify-center text-secondary items-center text-center text-[18px] leading-[24px] capitalize px-6 font-minionPro`}
          >
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/">{t("navbar.home")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="#about">{`Boho House`}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/events">{t("navbar.events")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/gallery">{t("navbar.gallery")}</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 hover:bg-primary hover:text-primary_1 transition-colors duration-150 ease-in-out"
            >
              <Link href="/faqs">{`FAQs`}</Link>
            </li>
          </ul>
          <div className="w-1/2 flex flex-col justify-center items-center gap-3 font-minionPro">
            <Link
              href="/book-room"
              target="_blank"
              className={`w-3/4 text-white text-center py-3 rounded-tl-md rounded-br-md bg-secondary`}
            >
              {t("navbar.reservation")}
            </Link>
            <div
              className={`w-3/4 py-3 flex justify-evenly items-center text-secondary`}
            >
              <Link href="#" target="_blank">
                <PiWhatsappLogo size={25} />
              </Link>
              <Link href="#" target="_blank">
                <PiInstagramLogo size={25} />
              </Link>
              <Link href="#" target="_blank">
                <FaMailBulk size={25} />
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Toolbar;
