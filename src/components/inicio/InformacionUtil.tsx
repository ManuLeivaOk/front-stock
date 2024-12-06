/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Fieldset } from "primereact/fieldset";
import Image from "next/image";

export default function InformacionUtil() {
  return (
    <div>
      <div className="card">
        <Fieldset
          legend={
            <span className="bg-blue-700 text-white px-3 py-2 rounded flex items-center">
              <i className="pi pi-phone mr-2"></i>
              Teléfonos útiles
            </span>
          }
          className="m-0"
        >
          <div className="flex justify-content-center">
            <p className="mr-8">
              <span className="font-bold mr-2">Policía:</span>
              101
            </p>
            <p className="">
              <span className="font-bold mr-2">Bomberos:</span>
              101
            </p>
          </div>

          <div className="flex justify-content-center">
            <p className="mr-8">
              <span className="font-bold mr-2">Hospital: </span>
              107 - 03572 480111 (urgencias)
            </p>
            <p className="">
              <span className="font-bold mr-2">
                Municipio de Laguna Larga:{" "}
              </span>
              03572 480101
            </p>
          </div>
        </Fieldset>
      </div>
      <div className="card">
        <TabView>
          {/* <TabPanel header="Colectivos" leftIcon="pi pi-truck mr-2">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel> */}
          <TabPanel header="Farmacias de turno" leftIcon="pi pi-heart mr-2">
            <Image
              src="/farmacias.webp"
              alt="farmacias de turno"
              width={500}
              height={400}
              className="w-full h-auto md:hidden"
            />
            <Image
              src="/farmaciasDesk.webp"
              alt="farmacias de turno"
              width={500}
              height={400}
              className="w-full h-auto hidden md:block"
            />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
