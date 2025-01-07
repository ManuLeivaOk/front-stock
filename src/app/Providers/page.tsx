"use client";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import DataTableComponent from "@/components/providers/DataTableProviders";
import axios from "axios";

interface Provider {
  id: number;
  nombre: string;
  telefono: string;
  direccion: string;
  email: string;
}

const Page: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [currentProvider, setCurrentProvider] = useState<Provider | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); // Termina la carga
          return 100;
        }
        return prev + 10; // Incrementa el progreso
      });
    }, 300);

    fetchProveedores();

    return () => clearInterval(interval); // Limpia el intervalo
  }, []);

  const fetchProveedores = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/proveedors");
      setProviders(response.data.data);
      setFilteredProviders(response.data.data); // Filtrados iniciales
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = providers.filter((provider) =>
      provider.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProviders(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredProviders(providers);
  };

  const handleAddProvider = () => {
    setCurrentProvider(null);
    setShowDialog(true);
  };

  const handleEditProvider = (product: Provider) => {
    setCurrentProvider(product);
    setShowDialog(true);
  };

  const actionBodyTemplate = (rowData: Provider) => {
    return (
      <div className="flex gap-2">
        <Button
          label="Editar"
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning"
          onClick={() => handleEditProvider(rowData)}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => console.log("Eliminar producto", rowData.id)}
        />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          {/* Barra de progreso horizontal */}
          <div
            style={{
              width: "80%",
              height: "20px",
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#60A5FA", // Color azul
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
          <p style={{ marginTop: "10px" }}>Cargando información...</p>
        </div>
      ) : (
        <div className="p-m-5 px-8">
          {/* Header */}
          <div className="w-full flex justify-content-between items-center my-4">
            <h1 className="p-text-bold mb-4">Gestión de Proveedores</h1>
            <Button
              label="Agregar Proveedor"
              icon="pi pi-plus"
              className="my-3"
              onClick={handleAddProvider}
            />
          </div>

          <div className="flex gap-2 items-center mb-4">
            <InputText
              placeholder="Buscar proveedor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-inputtext-sm"
            />
            <Button
              icon="pi pi-search"
              className="p-button-sm"
              onClick={handleSearch}
            />
            <Button
              label="Filtros"
              icon="pi pi-sliders-h"
              className="p-button-secondary p-button-sm"
              onClick={() => setShowFilterDialog(true)}
            />
          </div>

          {/* Data Table */}
          <DataTableComponent
            providers={filteredProviders}
            actionBodyTemplate={actionBodyTemplate}
          />

          {/* Filter Dialog */}
          <Dialog
            header="Filtros Avanzados"
            visible={showFilterDialog}
            style={{ width: "400px" }}
            modal
            onHide={() => setShowFilterDialog(false)}
          >
            <div className="p-fluid">
              <div className="p-field">
                <label htmlFor="name">Nombre del Proveedor</label>
                <InputText id="name" />
              </div>
              <div className="p-field">
                <label htmlFor="email">Correo Electrónico</label>
                <InputText id="email" />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                label="Aplicar"
                icon="pi pi-check"
                className="p-button-primary mx-2"
                onClick={() => {
                  setShowFilterDialog(false);
                }}
              />
              <Button
                label="Cancelar"
                icon="pi pi-times"
                className="p-button-text mx-2"
                onClick={() => setShowFilterDialog(false)}
              />
            </div>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default Page;