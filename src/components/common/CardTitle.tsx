"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  const router = useRouter();

  const handleClick = () => {
    const path = "/" + title.toLowerCase().replace(/\s+/g, "-");
    window.open(path, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="h-30 flex items-center justify-center text-3xl text-shadow-lg rounded-2xl border border-gray-100 bg-white p-6 md:p-8 
                 shadow-lg transition-transform duration-700 ease-in-out transform 
                 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] 
                 hover:border-gray-300 cursor-pointer"
    >
      {title}
    </div>
  );
};

export default CardTitle;
