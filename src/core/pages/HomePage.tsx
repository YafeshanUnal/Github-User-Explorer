import React from "react";
import Image from "next/image";
import { HipoLogoIcon } from "../icons/HipoLogoIcon";
import ErrorAlert from "../components/ErrorAlert";
export const HomePage = () => {
  const hasError = true;
  return (
    <div className="bg-black h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-between h-[205px] w-[320px] ">
          <HipoLogoIcon />
          <h1 className="text-2xl font-normal text-white">Github Profile Explorer</h1>
          <input
            type="text"
            className="w-[320px] h-11 px-4 py-2 mt-4 text-gray-400 border border-gray-800 bg-transparent
            borderrounded-md focus:outline-none focus:border-gray-500"
            placeholder="Type username"
          />
        </div>
      </div>
      {hasError && <ErrorAlert message="Couldn't load the profile" />}
    </div>
  );
};
