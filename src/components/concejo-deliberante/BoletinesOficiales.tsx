"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function BoletinesOficiales() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1001",
      code: "f230fh0g3",
      name: "11/02/2023",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1002",
      code: "f230fh0g4",
      name: "10/02/2023",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f230fh0g5",
      name: "09/02/2023",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
  ]);

  // Función para renderizar el icono de descarga
  const renderDownloadIcon = (rowData: Product) => {
    return (
      <>
        <Tooltip target=".download-icon" content="Descargar" position="top" />
        <Button
          icon="pi pi-download"
          onClick={() => handleDownload(rowData.id)}
        />
      </>
    );
  };

  // Ejemplo de función para manejar la acción de descarga
  const handleDownload = (id: string) => {
    console.log(`Descargando el producto con ID: ${id}`);
    // Implementa la lógica de descarga aquí
  };

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="code"
          header="Nombre"
          headerClassName="bg-blue-700 text-white"
        ></Column>
        <Column
          field="name"
          header="Fecha"
          headerClassName="bg-blue-700 text-white"
        ></Column>
        <Column
          header="Acciones"
          body={renderDownloadIcon}
          headerClassName="bg-blue-700 text-white"
        ></Column>
      </DataTable>
    </div>
  );
}
