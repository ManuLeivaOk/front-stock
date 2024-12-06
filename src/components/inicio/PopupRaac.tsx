import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupRaac: Dispatch<SetStateAction<boolean>>;
  visiblePopupRaac: boolean;
}

const PopupRaac = ({ visiblePopupRaac, setVisiblePopupRaac }: Props) => {
  const closeModal = () => {
    setVisiblePopupRaac(false);
  };

  return (
    <div>
      <Dialog
        header="Raac:"
        visible={visiblePopupRaac}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p className="font-bold">
            Red Asistenciales de las adicciones de Córdoba.
          </p>
          <p>Contactanos por redes sociales:</p>
          <Button
            label="www.instagram.com/raac_laguna_larga"
            icon="pi pi-instagram"
            text
            className="text-sm"
            style={{ padding: 0, marginTop: 4 }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/raac_laguna_larga",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
      </Dialog>
    </div>
  );
};

export default PopupRaac;
