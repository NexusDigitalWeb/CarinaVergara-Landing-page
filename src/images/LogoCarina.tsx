import React from "react";

const LogoCarina = (): React.ReactElement => {
  return (
    <div className="ml-8 lg:ml-0 flex items-center w-full ">
      <a href="#" className="flex flex-col items-center h-full transition-all ease-in duration-200 lg:hover:opacity-70">
        <div className=" flex items-center">
          <h2 className="font-bold md:text-[20px] text-texts-color text-nowrap">
            Carina Vergara.
          </h2>
          <img
            src="/LogoCarina.svg"
            alt="logo"
            className="hidden md:flex w-[35px] h-[35px]"
          />
        </div>
        <span className="text-[8px] text-nowrap md:text-[10px] uppercase tracking-widest text-texts-color lg:mr-3">
          coach deportiva
        </span>
      </a>
    </div>
  );
};

export default LogoCarina;
