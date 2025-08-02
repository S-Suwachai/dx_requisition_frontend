"use client";
import React from "react";

interface CardTitleProps {
  title: string;
  path: string,
}

const CardTitle: React.FC<CardTitleProps> = ({ title, path }) => {
  const handleClick = () => {
    window.open(path);
  };

  return (
    <div
      onClick={handleClick}
      className="h-30 flex items-center justify-center text-2xl font-semibold text-slate-700 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 
                 shadow-md transition-transform duration-500 ease-in-out transform 
                 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
                 hover:border-gray-300 cursor-pointer"
    >
      {title}
    </div>
  );
};

export default CardTitle;
