"use client";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Card } from "primereact/card";
import { Galleria } from "primereact/galleria";
import React from "react";

const LagunaLarga = () => {
  const images = [
    {
      itemImageSrc: "/ingreso.JPG",
      thumbnailImageSrc: "/ingreso.JPG",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ];
  const itemTemplate = (item: {
    itemImageSrc: string | undefined;
    alt: string | undefined;
  }) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  return (
    <div>
      <div className="p-grid">
        <div className="p-col-12 ">
          <Card title="Historia de Laguna Larga" className="p-mb-4 shadow-5">
            <div className="flex flex-column md:flex-row">
              <Galleria
                value={images}
                style={{ maxWidth: "640px" }}
                showThumbnails={false}
                showIndicators
                item={itemTemplate}
                className="w-full md:w-6"
              />

              <div className="md:px-7 md:py-5 flex flex-column justify-content-center md:w-6">
                <p className="line-height-3">
                  Laguna Larga es una pintoresca localidad situada en la
                  provincia de Córdoba, Argentina, ubicada a unos 55 km al
                  sureste de la ciudad de Córdoba capital, en el departamento de
                  Río Segundo. Es un pueblo con una rica tradición agrícola y
                  ganadera, que también cuenta con actividades industriales
                  relacionadas con estos sectores. Laguna Larga ofrece un
                  ambiente tranquilo y es conocida por su hospitalidad y vida
                  comunitaria.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-grid shadow-5">
        <div className="p-col-12">
          <Accordion>
            <AccordionTab header="Historia">
              <p className="line-height-3">
                La denominación de la región como de ‘Laguna Larga’ puede
                hallarse en algunos documentos del siglo XVIII haciendo
                referencia al espejo de agua que bordeaba el camino Real de las
                Postas y cercano a la Posta de Impira. La región era
                caracterizada por algunos viajeros como una gran planicie,
                salpicada por amplios montes de árboles autóctonos, propios del
                espinal.
              </p>
              <p className="line-height-3">
                Los primeros pueblos originarios que deambularon por la zona son
                asociados a la cultura sanavirona, que seguían los cursos de
                agua del río Xanaes y que cazaban y recolectaban la flora y
                fauna abundante en ciertas temporadas. Pero a la llegada del
                conquistador español, habían despoblado la región.
              </p>
              <p className="line-height-3">
                Se cree que el nombre dado a la laguna como ‘Cachicoya’, es
                herencia aborigen, y tendría su traducción a ‘laguna de aguas
                saladas’, de la lengua diaguita. Sería una deformación de ‘Cachi
                Cocha’. Los criollos se asentaron en la zona en caseríos y
                chacras dispersas, con largas parcelas de terreno para la cría
                de ganado vacuno y mular. El primero por la posibilidad de venta
                del cuero y el tasajo en la Córdoba colonial, los segundos, por
                su necesidad para el transporte de mercadería al Potosí del Alto
                Perú.
              </p>
              <p className="line-height-3">
                Con los tiempos revolucionarios, fue testigo del paso de las
                tropas patriotas en el tránsito constante entre Buenos Aires y
                el norte, y posiblemente aportó soldados locales a esa causa.
                Durante la guerra civil entre Unitarios y Federales, vio
                derramar sangre hermana entre los ejércitos del General José
                María Paz y del caudillo riojano Facundo Quiroga el 25 de
                febrero de 1830, enfrentados por distintos destinos para un país
                que aún no era tal. Años después vería el avance de la vía
                férrea en sus campos, y la instalación de una estación.
              </p>
              <p className="line-height-3">
                La expropiación fue resistida por los criollos afectados pero se
                impuso al calor de un Estado nacional que sometía al interior.
                Los capitales ingleses vendieron al mejor postor las parcelas de
                campo apropiadas y se lotearon manzanas en derredor de la nueva
                vía de comunicación. Poco a poco, el disperso caserío rural se
                urbanizó. La inmigración desbordó los andenes con sus valijas,
                baúles, idiomas extraños y costumbres foráneas. Apellidos
                italianos, españoles, árabes e incluso rusos, comenzaron a oírse
                y dejaron de ser ajenos. El ‘crisol de razas’ engendró familias
                y estirpes nuevas.
              </p>
              <p className="line-height-3">
                La educación y la salud eran necesidades urgentes que fueron
                satisfechas poco a poco con la presencia de docentes como Rafael
                Rodríguez y sus hijas, Catalina destacándose entre ellas. La
                instalación de la primera escuela fiscal (hoy Narciso Laprida)
                significó un vuelco igual de significativo. Al flagelo de las
                enfermedades, se impuso la curandería tradicional, en
                competencia con la ciencia médica, a través de Oscar Santucho y
                José María Romero Díaz.
              </p>
              <p className="line-height-3">
                El cristianismo católico se hizo hegemónico y demandó no sólo
                lugares de culto religioso sino un párroco estable. La figura de
                Manuel Tejerina resultó central, no sólo como guía espiritual,
                sino como rector de una rígida moral e impulsor de las primeras
                instituciones culturales y sociales. Las comisiones de fomento
                dejaron paso a la concreción de una Municipalidad y a las
                disputas políticas partidarias: primero entre radicales y
                conservadores, luego con el peronismo y la democracia cristiana.
                Siempre y cuando, alguna inoportuna intervención federal no
                rompiera el orden institucional.
              </p>
              <p className="line-height-3">
                La cultura llenó la aparente pasividad del pueblo, con sus
                músicos y orquestas populares, Los Bohemios, Aldo Cravero,
                Victoriano Puglié y tantos otros, en las pistas de baile del
                campo o en los inolvidables carnavales de cada febrero. Mientras
                que el deporte agitó las pasiones, enfrentando ‘las dos bandas’
                entre los rojos de Sportivo y los rojinegros de Newells Old
                Boys.
              </p>
              <p className="line-height-3">
                La actividad comercial y la agropecuaria generó fuentes de
                trabajo en las grandes casas comerciales Sagués y Andreoli, o en
                la cerealera Barbero o en la Cooperativa Agrícola. La actividad
                industrial de las metalmecánicas tuvo su edad de oro fabricando
                tractores, sembradoras y mil ingenios más en la Aipridec,
                Fraresso o Marinozzi. A la educación inicial se sumó la
                secundaria con el General Paz y después con la Catalina, con
                recordados y eternos docentes.
              </p>
              <p className="line-height-3">
                El aire se llenó con las transmisiones de radios locales y cada
                noche sintonizamos las noticias de Canal 5. El nuevo milenio nos
                encontró con sus problemas y desafíos. La autopista
                Córdoba-Rosario nos abrió un atajo que no se tenía desde la
                llegada de la ruta nacional 9 en los ’30, y la Terminal de
                Ómnibus permitió un servicio accesible con el resto de las
                provincias.
              </p>
              <p className="line-height-3">
                Pudimos disfrutar de grandes artistas y espectáculos fenomenales
                en el nuevo Centro Cultural Municipal, un lujo que pocos pueden
                darse. Atesoramos y valoramos todo lo logrado y más en el Museo
                Cachicoya. El legado de luchas, contradicciones y logros
                conseguido es herencia común para nuestras generaciones y para
                todos quienes quieran vivir en esta comunidad orgullosa de su
                pasado y, sin dudas, con un gran futuro.
              </p>
            </AccordionTab>
            <AccordionTab header="Nuestra Bandera">
              <p className="line-height-3">
                La bandera de Laguna Larga fue creada un 15 de noviembre de
                1959. Sus colores son el verde y el blanco. Las medidas son de
                1,08 m. de largo por 0,86 m. de ancho. Está compuesta de tres
                franjas horizontales de color blanco, dos de ellas de 0,21 m. de
                ancho por 1,08 de largo; y la franja central, de 0,27 m de ancho
                por 1,08 de largo. Estas franjas se encuentran separadas entre
                sí por dos franjas horizontales de color verde, cuyas medidas
                son de 0,10 m. de ancho por 1,08 m. de largo.
              </p>
              <p className="line-height-3">
                El significado de la forma y colores de nuestra enseña es la
                conjunción de la historia con un hecho fortuito producto del
                azar y la imaginación innata de los grandes creadores. El hecho
                histórico corresponde al tendido de las vías del ferrocarril que
                dio origen a nuestra localidad, por ello las dos franjas
                horizontales. El azar jugó cuando Juana y Margarita Bairolatti
                acertaban a pasar con un ramo de calas en sus brazos frente al
                monumento de la madre, sitio en nuestra sección de Boulevard
                Rosario (hoy General Paz) y central Sur (hoy 9 de Julio); en ese
                momento una flor cae al suelo sin ser percibido por las señoras.
                Pero el “Tata” Suaréz, siempre con el ojo atento, crédulo del
                destino, tomó los colores verdes del tallo y blanco de la flor
                para estamparlo en la bandera de nuestro pueblo, augurando la
                paz y la esperanza para cada uno de los habitantes a lo largo de
                la historia de nuestra comunidad.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default LagunaLarga;
