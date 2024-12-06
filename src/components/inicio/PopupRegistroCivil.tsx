import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

interface Props {
  setVisiblePopupRegistroCivil: Dispatch<SetStateAction<boolean>>;
  visiblePopupRegistroCivil: boolean;
}

const PopupRegistroCivil = ({
  setVisiblePopupRegistroCivil,
  visiblePopupRegistroCivil,
}: Props) => {
  const closeModal = () => {
    setVisiblePopupRegistroCivil(false);
  };

  return (
    <div>
      <Dialog
        header="Trámites en el Registro Civil"
        visible={visiblePopupRegistroCivil}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p className="mb-4">
            Estamos cada vez más cerca de nuestros vecinos, por ello ponemos en
            conocimiento las funciones y actividades que se desarrollan en
            nuestro registro civil
          </p>
          <ul className="p-pl-3">
            <li>Actas</li>
            <Divider />
            <li>Certificados</li>
            <Divider />
            <li>Extractos</li>
            <Divider />
            <li>Certificados negativos de Inscripción</li>
            <Divider />
            <li>Constancias de Estado Civil o Supervivencia</li>
            <Divider />
            <li>DNI</li>
            <Divider />
            <li>Pasaportes</li>
            <Divider />
            <li>Rectificaciones y Asesoramiento de ciudadanías</li>
            <Divider />
            <li>Adopción Simple y plena</li>
            <Divider />
            <li>Divorcios</li>
            <Divider />
            <li>Impugnaciones y supresiones</li>
            <Divider />
            <li>
              Adición de apellido materno en menores y mayores de 18 años.
            </li>
            <Divider />
            <li>Registro de Nacimiento - Reconocimiento</li>
            <Divider />
            <li>Registro de Defunción – traslado – Exhumaciones</li>
            <Divider />
            <li>Celebración de Matrimonio – régimen patrimonial</li>
            <Divider />
            <li>Unión Convivencial</li>
            <Divider />
            <li>Legalizaciones</li>
            <Divider />
            <li>Dirección de mediación</li>
            <Divider />
            <li>Libretas de Familia</li>
            <Divider />
            <li>Legalizaciones de domicilios reales</li>
            <Divider />
            <li>Celebración de matrimonios</li>
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default PopupRegistroCivil;
