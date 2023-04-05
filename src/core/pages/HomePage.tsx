import React from "react";
import Image from "next/image";
import { HipoLogoIcon } from "../icons/HipoLogoIcon";
import ErrorAlert from "../components/ErrorAlert";
export const HomePage = () => {
  const hasError = true;
  return (
    <div className="outer-container">
      <div className="inner-container">
        <HipoLogoIcon />
        <h1>Github Profile Explorer</h1>
        <input type="text" placeholder="Type username" />
      </div>
      <div className="error-box mobile">
        {hasError && (
          <ErrorAlert message="Couldn't load the user profile. Please try again." />
        )}
      </div>
    </div>
  );
};
