"use client";
/* eslint-disable @next/next/no-img-element */
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";

interface NewsItem {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  content: string;
  linkInstagram: string;
  linkFacebook: string;
  mt: string;
}

const News = () => {
  const [visible, setVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const exampleNews: NewsItem[] = [
    {
      id: 1,
      img: "noticia1.webp",
      title:
        " Jornada de Prevención de Adicciones con el profesor Alfredo Miroli.",
      subtitle:
        "En la jornada del jueves se llevaron a cabo una serie de charlas sobre la Prevención de Adicciones, a cargo del reconocido profesor Alfredo Miroli.",
      content:
        "La actividad estuvo destinada a alumnos y alumnas de las distintas escuelas secundarias de la Localidad, en donde más de 200 estudiantes pudieron participar de la actividad. <br/> En el último turno, vecinas y vecinos de Laguna Larga, autoridades de las diferentes instituciones de la Localidad, participaron sobre un conversatorio sobre “Prevenciones en el Ámbito Familiar”.",
      linkInstagram: "https://www.facebook.com/reel/1117105660135446",
      linkFacebook: "https://www.facebook.com/reel/1117105660135446",
      mt: "mt-1",
    },
    {
      id: 2,
      img: "noticia2.webp",
      title: "Travesía de Halloween.",
      subtitle:
        "En la tarde del jueves se realizó la Travesía de Halloween, una tradición que gana cada vez más adeptos en los niños y niñas lagunenses.",
      content:
        "El epicentro fue el Centro Cultural, lugar que se colmó de pequeños disfrazados “terroríficamente” y muy divertidos. Se realizaron diferentes juegos como búsqueda del tesoro, pasillo del terror, cuenta cuentos y mucho baile.",
      linkInstagram: "https://www.facebook.com/reel/1117105660135446",
      linkFacebook: "https://www.facebook.com/reel/1117105660135446",
      mt: "mt-8",
    },
    {
      id: 3,
      img: "noticia3.webp",
      title:
        "Se definió el campeonato Mediterráneo de regularidad en Laguna Larga.",
      subtitle:
        "El pasado fin de semana se corrió el Gran Premio del centro cordobés, el GP de Laguna Larga. ",
      content:
        "Este importante evento motor unió nuestra ciudad con Río Tercero durante el sábado y domingo, momento en el que se entregaron los premios de esta fecha y la premiación final del campeonato Mediterráneo de regularidad 2024. <br/> Este importante evento motor unió nuestra ciudad con Río Tercero durante el sábado y domingo, momento en el que se entregaron los premios de esta fecha y la premiación final del campeonato Mediterráneo de regularidad 2024. <br/> Participaron autos históricos contemporáneos y modernos con fuerte presencia local ya que los hermanos Joaquín y Tomás Ribodino se subieron al podio, además de Oscar y Victoria Ribodino. Además, la dupla Fabricio Érmoli - Andrés Nardi formaron parte de esta gran experiencia. El binomio Emanuel Vottero - Damián Núñez fueron el auto de auxilio durante toda la carrera. ",
      linkInstagram: "https://www.instagram.com/p/DB9sTuZyFYc",
      linkFacebook: "https://www.facebook.com/reel/1117105660135446",
      mt: "mt-4",
    },
  ];

  const header = (img: string) => {
    return <img alt="Card" src={img} className="w-full h-auto" />;
  };

  const openModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
    setVisible(true);
  };

  return (
    <div>
      <div className="flex flex-row justify-content-center mb-3">
        <span className="text-blue-600 font-bold text-3xl">Noticias</span>
      </div>
      <div className="flex flex-row justify-content-center flex-wrap px-5">
        {exampleNews.map((newsItem) => (
          <Card
            key={newsItem.id}
            title={newsItem.title}
            subTitle={newsItem.subtitle}
            header={() => header(newsItem.img)}
            className="md:w-25rem mx-3 my-3 shadow-5"
          >
            <p className="m-0 truncate">{newsItem.content.slice(0, 100)}...</p>
            <div
              className={`${newsItem.mt} flex align-items-center w-full justify-content-end`}
            >
              <Button label="VER MÁS" onClick={() => openModal(newsItem)} />
              <Button
                icon="pi pi-facebook"
                className="ml-5"
                rounded
                text
                raised
                aria-label="Filter"
                onClick={() =>
                  window.open(
                    `${newsItem.linkFacebook}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
              <Button
                icon="pi pi-instagram"
                rounded
                text
                raised
                className="ml-2"
                aria-label="Filter"
                onClick={() =>
                  window.open(
                    `${newsItem.linkInstagram}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
            </div>
          </Card>
        ))}
      </div>

      {selectedNews && (
        <Dialog
          header={selectedNews.title}
          visible={visible}
          style={{ width: "50vw" }}
          modal
          onHide={() => setVisible(false)}
        >
          <img
            alt="Card"
            src={selectedNews.img}
            className="w-full mb-3 h-auto"
          />
          <p className="line-height-3 tracking-wide text-justify font-bold">
            {selectedNews.subtitle}
          </p>
          <p
            className="line-height-6 tracking-wide text-justify"
            dangerouslySetInnerHTML={{ __html: selectedNews.content }}
          ></p>
        </Dialog>
      )}
    </div>
  );
};

export default News;
