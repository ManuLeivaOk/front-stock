import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  visibleAdministracion: boolean;
  setVisibleAdministracion: Dispatch<SetStateAction<boolean>>;
}

const PopupAdministracion = ({
  visibleAdministracion,
  setVisibleAdministracion,
}: Props) => {
  const closeModal = () => {
    setVisibleAdministracion(false);
  };
  return (
    <div>
      <Dialog
        header="Trámites y servicios"
        visible={visibleAdministracion}
        style={{ width: "400px" }}
        onHide={closeModal}
        className="p-fluid"
      >
        {/* Contenedor con scroll vertical y altura máxima */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p className="mb-4">Licencia de conducir</p>
          <ol className="p-pl-3">
            <li>
              Solicitar turno médico en el Hospital Municipal al 480111. Los
              turnos se otorgan los días martes y jueves.
            </li>
            <Divider />
            <li>
              Retirar certificado libre de multas en el Juzgado de Faltas. Días
              y horario de atención: de lunes a viernes de 8 a 13 hs. Sin turno
              previo.
            </li>
            <Divider />
            <li>
              Realizar el carnet de conducir en el Municipio. Días y horario de
              atención: de lunes a viernes de 7 a 13 hs. Sin turno previo.
            </li>
            <Divider />
          </ol>

          <p>Catastro</p>
          <p>Obras Privadas</p>
          <p>Habilitación de negocios</p>
        </div>
      </Dialog>
    </div>
  );
};

export default PopupAdministracion;
