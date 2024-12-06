"use client";
import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import "./styles.css";

export default function Header() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => (window.location.href = "/inicio"),
    },
    {
      label: "Sobre Laguna Larga",
      icon: "pi pi-info-circle",
      command: () => (window.location.href = "/historia-de-laguna-larga"),
    },
    /*     {
      label: "Centro cultural",
      icon: "pi pi-building-columns",
      command: () => (window.location.href = "/inicio"),
    },
    {
      label: "Biblioteca",
      icon: "pi pi-book",
      command: () => (window.location.href = "/inicio"),
    },
    {
      label: "Hospital",
      icon: "pi pi-heart",
      command: () => (window.location.href = "/inicio"),
    },
    {
      label: "Guardería",
      icon: "pi pi-palette",
      command: () => (window.location.href = "/inicio"),
    }, */
    {
      label: "Concejo deliberante",
      icon: "pi pi-comments",
      command: () => (window.location.href = "/concejo-deliberante"),
    },
  ];

  /*   const end = (
    <Button
      icon="pi pi-menu"
      onClick={() => setVisibleSidebar(true)}
      className="p-button-text text-white"
    />
  ); */

  return (
    <>
      <Menubar model={items} />

      <Sidebar
        visible={visibleSidebar}
        onHide={() => setVisibleSidebar(false)}
        className="p-sidebar-md text-white"
      >
        <Menu model={items} />
      </Sidebar>
    </>
  );
}
