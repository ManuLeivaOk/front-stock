import ContactForm from "@/components/inicio/ContactForm";
import Hero from "@/components/inicio/Hero";
import News from "@/components/inicio/News";
import UsefulTelephoneNumbers from "@/components/inicio/UsefulTelephoneNumbers";
import React from "react";
import InformacionUtil from "../../components/inicio/InformacionUtil";
import PagarImpuestos from "../../components/inicio/PagarImpuestos";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="surface-50 py-8 flex flex-row justify-content-center">
        <News />
      </div>
      <div className="px-4 md:px-8 py-8 flex flex-row justify-content-center w-full">
        <PagarImpuestos />
      </div>
      <div className="surface-50 px-4 md:px-8 py-8 flex flex-row justify-content-center w-full">
        <InformacionUtil />
      </div>
      <div className="py-8 flex flex-row justify-content-center md:px-8 px-4">
        <UsefulTelephoneNumbers />
      </div>
      {/*       <div className="surface-50 py-8 flex flex-row justify-content-center w-full">
        <ContactForm />
      </div> */}
    </div>
  );
};

export default Page;
