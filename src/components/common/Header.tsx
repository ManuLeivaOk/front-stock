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
      label: "Stock",
      icon: "pi pi-barcode",
      command: () => (window.location.href = "/stock"),
    },
    {
      label: "Proveedores",
      icon: "pi pi-users",
      command: () => (window.location.href = "/proveedores"),
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
      label: "Tipos de producto",
      icon: "pi pi-box",
      command: () => (window.location.href = "/tipos-de-producto"),
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
