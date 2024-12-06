import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupGuardia: Dispatch<SetStateAction<boolean>>;
  visiblePopupGuardia: boolean;
}

const PopupGuardia = ({
  visiblePopupGuardia,
  setVisiblePopupGuardia,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupGuardia(false);
  };

  return (
    <div>
      <Dialog
        header="Raac:"
        visible={visiblePopupGuardia}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          Trabajamos para priorizar la seguridad, los derechos y garantías de
          todos los vecinos y vecinas de la comunidad
        </div>
      </Dialog>
    </div>
  );
};

export default PopupGuardia;
