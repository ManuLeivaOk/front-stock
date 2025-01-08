"use client";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import DataTableComponent from "@/components/historialVenta/DataTableHistorialVenta";
import DialogNewProduct from "@/components/historialVenta/DialogNewHistorialVenta";
import { InputText } from "primereact/inputtext";
import DialogFilters from "@/components/historialVenta/DialogFiltersHistorialVenta";
import axios from "axios";

interface historialVenta {
  fecha_venta: string;
  id: number;
  total: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const StockPage: React.FC = () => {
  const [venta, setVenta] = useState<historialVenta[]>([]);
  const [filteredVenta, setFilteredVenta] = useState<historialVenta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [showDialog, setShowDialog] = useState(false);
  const [currentVenta, setCurrentVenta] = useState<historialVenta | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    fetchVenta();

    return () => clearInterval(interval);
  }, []);

  async function fetchVenta() {
    try {
      const response = await axios.get("http://localhost:1337/api/ventas");
      setVenta(response.data.data);
      setFilteredVenta(response.data.data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const handleSearch = () => {
    const filtered = venta.filter((v) =>
      historialVenta.fecha_venta.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVenta(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredVenta(venta);
  };

  const actionBodyTemplate = (rowData: historialVenta) => {
    return (
      <div className="flex gap-2">
        <Button
          label="Editar"
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning"
          onClick={() => console.log("Editar venta", rowData.id)}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => console.log("Eliminar venta", rowData.id)}
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
                backgroundColor: "#60A5FA",
                transition: "width 0.2s ease",
              }}
            ></div>
          </div>
          <p style={{ marginTop: "10px" }}>Cargando información...</p>
        </div>
      ) : (
        <div className="p-m-5 px-8">
          <div className="w-full flex justify-content-between items-center my-4">
            <h1 className="p-text-bold mb-4">Historial de Ventas</h1>
          </div>

          <div className="flex gap-2 items-center mb-4">
            <InputText
              placeholder="Buscar Venta"
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

          <DataTableComponent
            historialVenta={filteredVenta} // Cambiado para pasar la lista correctamente
            actionBodyTemplate={actionBodyTemplate}
          />

          <DialogNewProduct
            currentProduct={currentVenta}
            showDialog={showDialog}
            handleCloseDialog={() => setShowDialog(false)}
          />

          <DialogFilters
            setShowFilterDialog={setShowFilterDialog}
            showFilterDialog={showFilterDialog}
          />
        </div>
      )}
    </>
  );
};

export default StockPage;
