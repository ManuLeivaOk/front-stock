"use client";
import React from "react";
import LagunaLarga from "../../components/historia-laguna-larga/LagunaLarga";
import Instituciones from "../../components/historia-laguna-larga/Instituciones";

const Page = () => {
  return (
    <>
      <div className="py-8 px-3 md:px-8 ">
        <LagunaLarga />
      </div>
      {/* <div className="py-8 px-3 md:px-8 surface-50">
        <Instituciones />
      </div> */}
    </>
  );
};

export default Page;
