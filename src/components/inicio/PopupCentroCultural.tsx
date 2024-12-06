import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupCentroCultural: Dispatch<SetStateAction<boolean>>;
  visiblePopupCentroCultural: boolean;
}

const PopupCentroCultural = ({
  visiblePopupCentroCultural,
  setVisiblePopupCentroCultural,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupCentroCultural(false);
  };

  return (
    <div>
      <Dialog
        header="Obras teatrales:"
        visible={visiblePopupCentroCultural}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <h4>Noviembre</h4>
          <ul className="p-pl-3">
            <li>
              Gran Premio del Centro Cordobés 2 y 3 de noviembre. Horario a
              resolver.
            </li>
            <Divider />
            <li>
              Fiesta del Pueblo: viernes 29, sabado 30 y domingo 1 de diciembre.
            </li>
            <Divider />
          </ul>
          <h4>Diciembre</h4>
          <ul className="p-pl-3">
            <li>Cierre de Taller de Telas sábado 7 de diciembre.</li>
            <Divider />
            <li>Cierre de Taller de Baile 8 de diciembre.</li>
            <Divider />
            <li>Cierre de Taller de Comedia Musical 15 de diciembre.</li>
            <Divider />
          </ul>
          <Divider />
          <Button
            label="www.instagram.com/culturalagunalarga"
            icon="pi pi-instagram"
            text
            className="text-sm"
            style={{ padding: 0, marginTop: 4 }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/culturalagunalarga",
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

export default PopupCentroCultural;
