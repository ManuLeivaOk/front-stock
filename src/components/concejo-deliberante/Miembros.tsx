/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";

interface Member {
  id: string;
  name: string;
  image: string;
}

export default function Miembros() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: "1001",
      name: "Gisela Geremía",
      image: "GiselaGeremía.webp",
    },
    {
      id: "1002",
      name: "Mauricio Beccerica",
      image: "MauricioBeccerica.webp",
    },
    {
      id: "1003",
      name: "Marina Varela",
      image: "MarinaVarela.webp",
    },
    {
      id: "1004",
      name: "Kevin Cadoppi",
      image: "KevinCadoppi.webp",
    },
    {
      id: "1005",
      name: "Guillermo Graffunder",
      image: "GuillermoGraffunder.webp",
    },
    {
      id: "1006",
      name: "Nelly Zurlo",
      image: "NellyZurlo.webp",
    },
    {
      id: "1007",
      name: "Alexis Marinsalda",
      image: "AlexisMarinsalda.webp",
    },
  ]);

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (member: Member) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`/${member.image}`}
            alt={member.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{member.name}</h4>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={members}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
