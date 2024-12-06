import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupPuntoMujer: Dispatch<SetStateAction<boolean>>;
  visiblePopupPuntoMujer: boolean;
}

const PopupPuntoMujer = ({
  visiblePopupPuntoMujer,
  setVisiblePopupPuntoMujer,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupPuntoMujer(false);
  };

  return (
    <div>
      <Dialog
        header="Equipo de Profesionales:"
        visible={visiblePopupPuntoMujer}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <ul className="p-pl-3">
            <li>Lic. Ferrero María Celeste</li>
            <Divider />
            <li>Lic. Rico Carolina</li>
            <Divider />
            <li>Lic. Rodríguez Analia</li>
            <Divider />
            <li>Lic. Rodríguez María José</li>
            <Divider />
            <li>Abog. Crettino Rocío</li>
            <Divider />
          </ul>
          <Divider />
          <p>Contactanos por redes sociales:</p>
          <Button
            label="www.instagram.com/puntomujerlagunalarga"
            icon="pi pi-instagram"
            text
            className="text-sm"
            style={{ padding: 0, marginTop: 4 }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/puntomujerlagunalarga",
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

export default PopupPuntoMujer;
