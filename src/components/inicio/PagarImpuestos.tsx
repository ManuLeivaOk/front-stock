"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PagarImpuestos = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const push = () => {
    router.push("https://www.municipalidad.com/lagu");
  };

  return (
    <div className="my-8">
      <div className="surface-0 text-700 text-center">
        <div className="text-900 font-bold text-5xl mb-3">
          ¡Proximamete podrás pagar tus impuestos online!
        </div>
        <div className="text-700 text-2xl mb-5">
          Podés hacerlo en simples pasos a través del siguiente botón:
        </div>
        <Button label="Pagar impuestos" icon="pi pi-pay" onClick={push} />
      </div>
    </div>
  );
};

export default PagarImpuestos;
