"use client";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import DataTableComponent from "@/components/providers/DataTableProviders";
import axios from "axios";

interface Provider {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
}

const Page: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // cuando inicia el componente
  // const [providers, setProviders] = useState<Provider[]>([
  //   {
  //     id: 1,
  //     name: "Proveedor A",
  //     phone: "123456789",
  //     address: "Calle Ficticia 123",
  //     email: "proveedora@example.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Proveedor B",
  //     phone: "987654321",
  //     address: "Avenida Real 456",
  //     email: "proveedorb@example.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Proveedor C",
  //     phone: "555666777",
  //     address: "Calle Inventada 789",
  //     email: "proveedorc@example.com",
  //   },
  // ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProviders, setFilteredProviders] = useState(providers);
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [currentProvider, setCurrentProvider] = useState<Provider | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    fetchProveedores();
  }, []);

  const fetchProveedores = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/proveedors");
      setProviders(response.data.data); //respuesta del back
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = providers.filter((provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div>Cargando...</div>
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
            providers={providers}
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
                  // Lógica de filtros avanzados aquí
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
