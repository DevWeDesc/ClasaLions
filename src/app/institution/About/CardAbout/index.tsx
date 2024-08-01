"use client";
import Image from "next/image";
import React from "react";
import PartnerIcon from "@/../public/assets/handshake.png";

export interface ICardAbout {
  title: string;
  content: string;
}

export const CardAbout = ({ title, content }: ICardAbout) => {
  const valuesFormat = content.includes(";") && content.split(";");
  return (
    <div
      className={`relative flex flex-col gap-4 py-4 px-1 lg:p-8 lg:rounded-3xl text-center ${
        title === "Visão" ? "text-blueFontHeader" : "text-white bg-blueDefault"
      }`}
    >
      {title === "Visão" && (
        <Image
          className="absolute -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 size-20 lg:size-48 brightness-110"
          src={PartnerIcon}
          alt=""
        />
      )}
      <h4 className="font-bold text-3xl">{title}</h4>
      {!valuesFormat ? (
        <p className="text-sm lg:text-base font-medium">{content}</p>
      ) : (
        <div className="flex flex-col gap-0">
          {valuesFormat.map((text, index) => (
            <p key={index} className="text-sm lg:text-base m-0 p-0 font-medium">
              {text};
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
