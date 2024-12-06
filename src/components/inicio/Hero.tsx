/* eslint-disable @next/next/no-img-element */
import { Button } from "primereact/button";
import React from "react";

const Hero = () => {
  return (
    <div className="surface-0 w-full flex flex-row justify-content-center">
      <div className="border-y-1 border-primary">
        <img src="/logoMuni.png" alt="" className="w-12 hidden md:block " />
      </div>
      <div className="flex flex-column border-y-1 border-primary block md:hidden">
        <img src="/logoMuniMobile1.png" alt="" className="w-12 " />
        <img
          src="/logoMuniMobile.png"
          alt=""
          className="w-12 margin-top-hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
