"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Where = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center  py-10 tracking-widest px-8 lg:px-[400px] lg:text-[16px] text-[16px] text-center gap-8">
      <h1 className="font-minionPro font-light text-[22px] leading-[33px]">
        {t("where.title")}
      </h1>
      <p className="font-light">{t("where.content_1")}</p>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.9065606990741!2d-8.13111125952502!3d31.352011133871756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4fcbd919cb%3A0x89922e232011bf59!2sCasa%20Lalla%20Takerkoust%20Vibe%20Agafay%20Desert!5e0!3m2!1sfr!2sma!4v1753181122522!5m2!1sfr!2sma"
          height="500"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Where;
