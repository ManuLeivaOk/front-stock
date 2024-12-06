import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupBiblioteca: Dispatch<SetStateAction<boolean>>;
  visiblePopupBiblioteca: boolean;
}

const PopupBiblioteca = ({
  visiblePopupBiblioteca,
  setVisiblePopupBiblioteca,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupBiblioteca(false);
  };

  return (
    <div>
      <Dialog
        header="Biblioteca:"
        visible={visiblePopupBiblioteca}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p>Contactanos por redes sociales:</p>
          <Button
            label="www.facebook.com/bibliotecalagunalarga/"
            icon="pi pi-facebook"
            text
            className="text-sm"
            style={{ padding: 0 }}
            onClick={() =>
              window.open(
                "https://www.facebook.com/bibliotecalagunalarga/",
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

export default PopupBiblioteca;
