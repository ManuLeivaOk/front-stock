import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupServiciosPublicos: Dispatch<SetStateAction<boolean>>;
  visiblePopupServiciosPublicos: boolean;
}

const PopupServiciosPublicos = ({
  visiblePopupServiciosPublicos,
  setVisiblePopupServiciosPublicos,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupServiciosPublicos(false);
  };

  return (
    <div>
      <Dialog
        header="Recomendaciones:"
        visible={visiblePopupServiciosPublicos}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <ul className="p-pl-3">
            <li>
              Los residuos sólidos urbanos se recojen de Lunes a Viernes de
              06.00 a 11.00 hs.
            </li>
            <Divider />
            <li>
              Los residuos de poda y escombros (hasta 1 m³) se recojen de lunes
              a viernes de 06.00 a 13.00 hs. Pasado ese volúmen, es necesario
              solicitar permiso y abonar el canon de recolección en el
              Municipio.
            </li>
            <Divider />
            <li>
              No tirar poda, escombros ni metales en los contenedores. Debemos
              cuidar a los recolectores de residuos en el ejercicio de sus
              funciones y no dañar los contenedores.
            </li>
            <Divider />
            <li>
              En época de fuertes vientos, sugerimos colocar los residuos de la
              poda en bolsas.
            </li>
            <Divider />
            <li>
              Queda prohibido sacar los residuos de poda los Viernes a la tarde,
              sábado y domingo.
            </li>
            <Divider />
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default PopupServiciosPublicos;
