"use client";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import DataTableComponent from "@/components/products/DataTableProducts";
import DialogNewProduct from "@/components/products/DialogNewProduct";
import { InputText } from "primereact/inputtext";
import DialogFilters from "@/components/products/DialogFiltersProducts";
import axios from "axios";


interface Product {
  id: number;
  nombre: string;
  stock: number;
  precio: number;
  familia: string;
  provider: string;
  descripcion: string;
}

const StockPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  useEffect(() => {
    // Simular el progreso del loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false); // Loading finalizado
          return 100;
        }
        return prev + 10; // Incrementa el progreso
      });
    }, 300);

    fetchProducts();
    

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  // Carga de productos por una llamada a la API)
  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:1337/api/productos?populate[familia]=true&populate[proveedors]=true");
      setProducts(response.data.data);
      setFilteredProducts(response.data.data); // Filtrados iniciales
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // setTimeout(() => {
  //   const fetchedProducts = [
  //     {
  //       id: 1,
  //       name: "Producto A",
  //       stock: 10,
  //       price: 50,
  //       family: "Electrónica",
  //       provider: "Proveedor X",
  //     },
  //     {
  //       id: 2,
  //       name: "Producto B",
  //       stock: 5,
  //       price: 75,
  //       family: "Hogar",
  //       provider: "Proveedor Y",
  //     },
  //     {
  //       id: 3,
  //       name: "Producto C",
  //       stock: 20,
  //       price: 100,
  //       family: "Jardinería",
  //       provider: "Proveedor Z",
  //     },
  //   ];
  //   setProducts(fetchedProducts);
  //   setFilteredProducts(fetchedProducts);
  // }, 3000);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredProducts(products);
  };

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setShowDialog(true);
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <div className="flex gap-2">
        <Button
          label="Editar"
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning"
          onClick={() => handleEditProduct(rowData)}
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

  const families = ["Electrónica", "Hogar", "Jardinería"];
  const providers = ["Proveedor X", "Proveedor Y", "Proveedor Z"];

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
            <h1 className="p-text-bold mb-4">Gestión de Stock</h1>
            <Button
              label="Agregar Producto"
              icon="pi pi-plus"
              className="my-3"
              onClick={handleAddProduct}
            />
          </div>

          <div className="flex gap-2 items-center mb-4">
            <InputText
              placeholder="Buscar producto..."
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
            products={filteredProducts}
            actionBodyTemplate={actionBodyTemplate}
          />

          <DialogNewProduct
            currentProduct={currentProduct}
            showDialog={showDialog}
            handleCloseDialog={handleCloseDialog}
            families={families}
            providers={providers}
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
