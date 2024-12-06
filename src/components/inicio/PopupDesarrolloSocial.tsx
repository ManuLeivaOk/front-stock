import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

interface Props {
  setVisiblePopupDesarrolloSocial: Dispatch<SetStateAction<boolean>>;
  visiblePopupDesarrolloSocial: boolean;
}

const PopupDesarrolloSocial = ({
  setVisiblePopupDesarrolloSocial,
  visiblePopupDesarrolloSocial,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupDesarrolloSocial(false);
  };

  return (
    <div>
      <Dialog
        header="Trámites en el Registro Civil"
        visible={visiblePopupDesarrolloSocial}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        <p className="text-center">
          Enlaces a programas de interés:{" "}
          <Button
            label="Más Leche, más Proteínas."
            className="mt-5"
            text
            style={{ padding: 0 }}
            onClick={() =>
              window.open(
                "https://www.cba.gov.ar/programa/mas-leche-mas-proteinas/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <Button
            label="Tarjeta Social."
            text
            style={{ padding: 0 }}
            onClick={() =>
              window.open(
                "https://www.cba.gov.ar/programa/tarjeta-social/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <Button
            label="Tu Casa, Tu escritura."
            text
            style={{ padding: 0 }}
            onClick={() =>
              window.open(
                "https://www.cba.gov.ar/tu-casa-tu-escritura/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <Button
            label="Atención al Celíaco."
            text
            style={{ padding: 0 }}
            onClick={() =>
              window.open(
                "https://www.cba.gov.ar/atencion-al-celiaco/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <Button
            label="Federal Incluir Salud."
            text
            style={{ padding: 0 }}
            onClick={() =>
              window.open(
                "https://www.argentina.gob.ar/servicio/afiliaciones",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </p>
      </Dialog>
    </div>
  );
};

export default PopupDesarrolloSocial;
