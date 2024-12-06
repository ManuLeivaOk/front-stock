"use client";
import { Button } from "primereact/button";
import React, { useState } from "react";
import PopupRegistroCivil from "./PopupRegistroCivil";
import PopupPuntoMujer from "./PopupPuntoMujer";
import PopupCentroCultural from "./PopupCentroCultural";
import PopupAdministracion from "./PopupAdministracion";
import PopupServiciosPublicos from "./PopupServiciosPublicos";
import PopupDesarrolloSocial from "./PopupDesarrolloSocial";
import PopupBiblioteca from "./PopupBiblioteca";
import PopupRaac from "./PopupRaac";

const UsefulTelephoneNumbers = () => {
  const [visiblePopupRegistroCivil, setVisiblePopupRegistroCivil] =
    useState(false);
  const [visiblePopupPuntoMujer, setVisiblePopupPuntoMujer] = useState(false);
  const [visiblePopupServiciosPublicos, setVisiblePopupServiciosPublicos] =
    useState(false);
  const [visiblePopupCentroCultural, setVisiblePopupCentroCultural] =
    useState(false);
  const [visibleAdministracion, setVisibleAdministracion] = useState(false);
  const [visiblePopupDesarrolloSocial, setVisiblePopupDesarrolloSocial] =
    useState(false);
  const [visiblePopupBiblioteca, setVisiblePopupBiblioteca] = useState(false);
  const [visibleRaac, setVisibleRaac] = useState(false);
  const [visiblePopupGuardia, setVisiblePopupGuardia] = useState(false);

  return (
    <div className="surface-0 text-center">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-blue-600">Servicios</span>
      </div>
      <div className="grid mt-6 md:mt-8">
        <div className="col-12 md:col-4 mb-5 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <a href="https://cidi.cba.gov.ar/" target="_blank" className="">
              <i className="pi pi-id-card text-4xl text-blue-500 transition-colors transition-duration-300	hover:text-blue-200"></i>
            </a>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Registro civil.
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Manuel Belgrano 118
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Teléfonos:{" "}
            </span>
            03572480472 o 3572530957
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horario de atención:{" "}
            </span>
            Lunes a viernes por la mañana.
          </p>
          <Button
            onClick={() => setVisiblePopupRegistroCivil(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-user text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Administración Municipal.
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horarios de Atención:{" "}
            </span>
            Lunes a viernes de 07.00 a 13.00 hs.
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Teléfono: </span>
            03572480101
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Whatsapp: </span>
            3572672981
          </p>
          <Button
            onClick={() => setVisibleAdministracion(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-users text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Desarrollo Social.
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horarios de Atención:{" "}
            </span>
            Lunes a viernes de 08.00 a 12.00 hs.
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Juan D. Perón esq. Entre Ríos
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Teléfono: </span>
            3572532610
          </p>
          <Button
            onClick={() => setVisiblePopupDesarrolloSocial(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-truck text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Servicios Públicos.
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Secretario:{" "}
            </span>
            Federico Cottura
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Teléfono: </span>
            3572446633
          </p>
          <p>¡Mantengamos la ciudad limpia!</p>
          <Button
            onClick={() => setVisiblePopupServiciosPublicos(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-book text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Biblioteca.</div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horario de atención:{" "}
            </span>
            Desde noviembre hasta abril, atendemos solo por la mañana.
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Teléfono: </span>
            3572539208
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Belgrano 118
          </p>
          <Button
            onClick={() => setVisiblePopupBiblioteca(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-building-columns text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Centro cultural
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            General Paz 555
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horario de atención:{" "}
            </span>
            Lunes a viernes de 7 a 13 hrs.
          </p>
          <p className="my-2">
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
          </p>

          <Button
            onClick={() => setVisiblePopupCentroCultural(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-user-plus text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">RAAC</div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Hipólito Yrigoyen esquina Julio A Roca
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horario de atención:{" "}
            </span>
            Lunes y viernes de 8 a 13hs. Miércoles de 8 a 13 hs y de 18 a 21hs.
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Teléfono: </span>
            3572587955
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Correo electrónico:{" "}
            </span>
            cp.raac.ll@gmail.com
          </p>
          <Button onClick={() => setVisibleRaac(true)} className="mt-3">
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-users text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Área de Género y Diversidad <br /> Punto Mujer.
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Hipólito Yrigoyen esquina Julio.A.Roca
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Horario de atención:{" "}
            </span>
            Lunes de 8:30 a 14 hs y de 16 a 18, miércoles de 10 a 12 y de 15 a
            17. Martes y jueves (atención terapéutica con turno previo).
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Atención telefónica continua:{" "}
            </span>
            3572449113
          </p>
          <Button
            onClick={() => setVisiblePopupPuntoMujer(true)}
            className="mt-3"
          >
            Más información
          </Button>
        </div>

        <div className="col-12 md:col-4 mb-5 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-users text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Seguridad <br /> Guardia Civil
          </div>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Teléfono: </span>
            3572529711
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Hipólito Yrigoyen 791.
          </p>

          <p>
            Trabajamos para priorizar la seguridad, los derechos y garantías de
            todos los vecinos y vecinas de la comunidad
          </p>
        </div>

        <div className="col-12 md:col-4 mb-5 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-heart text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Salud</div>
          <p>Hospital Municipal Dr. Roberto Boldú</p>
          <p>
            Priorizamos la salud y el bienestar de la comunidad de Laguna Larga,
            por eso trabajamos para acercarte la mejor atención junto a nuestro
            equipo médico y tecnológico. Conocé toda la información sobre los
            servicios de salud que podés acceder en el Municipio:
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Emergencias:{" "}
            </span>
            107
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Turnos Hospital Municipal:{" "}
            </span>
            03572 480111
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">Whatsapp: </span>
            3572678460
          </p>
          <p className="my-1 text-center">
            <span className="text-700 line-height-3 font-bold">
              Dirección:{" "}
            </span>
            Hipólito Yrigoyen 1026.
          </p>
        </div>
      </div>
      {visiblePopupRegistroCivil && (
        <PopupRegistroCivil
          visiblePopupRegistroCivil={visiblePopupRegistroCivil}
          setVisiblePopupRegistroCivil={setVisiblePopupRegistroCivil}
        />
      )}

      {visiblePopupServiciosPublicos && (
        <PopupServiciosPublicos
          visiblePopupServiciosPublicos={visiblePopupServiciosPublicos}
          setVisiblePopupServiciosPublicos={setVisiblePopupServiciosPublicos}
        />
      )}

      {visiblePopupPuntoMujer && (
        <PopupPuntoMujer
          visiblePopupPuntoMujer={visiblePopupPuntoMujer}
          setVisiblePopupPuntoMujer={setVisiblePopupPuntoMujer}
        />
      )}

      {visiblePopupCentroCultural && (
        <PopupCentroCultural
          visiblePopupCentroCultural={visiblePopupCentroCultural}
          setVisiblePopupCentroCultural={setVisiblePopupCentroCultural}
        />
      )}

      {visibleAdministracion && (
        <PopupAdministracion
          visibleAdministracion={visibleAdministracion}
          setVisibleAdministracion={setVisibleAdministracion}
        />
      )}

      {visiblePopupDesarrolloSocial && (
        <PopupDesarrolloSocial
          visiblePopupDesarrolloSocial={visiblePopupDesarrolloSocial}
          setVisiblePopupDesarrolloSocial={setVisiblePopupDesarrolloSocial}
        />
      )}

      {visiblePopupBiblioteca && (
        <PopupBiblioteca
          visiblePopupBiblioteca={visiblePopupBiblioteca}
          setVisiblePopupBiblioteca={setVisiblePopupBiblioteca}
        />
      )}

      {visibleRaac && (
        <PopupRaac
          visiblePopupRaac={visibleRaac}
          setVisiblePopupRaac={setVisibleRaac}
        />
      )}
    </div>
  );
};

export default UsefulTelephoneNumbers;
