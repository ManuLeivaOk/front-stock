"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import DataTableComponent from "@/components/common/DataTable";
import DialogNewProduct from "@/components/common/DialogNewProduct";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import DialogFilters from "@/components/common/DialogFilters";

interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
  family: string;
  provider: string;
}

const StockPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Producto A",
      stock: 10,
      price: 50,
      family: "Electrónica",
      provider: "Proveedor X",
    },
    {
      id: 2,
      name: "Producto B",
      stock: 5,
      price: 75,
      family: "Hogar",
      provider: "Proveedor Y",
    },
    {
      id: 3,
      name: "Producto C",
      stock: 20,
      price: 100,
      family: "Jardinería",
      provider: "Proveedor Z",
    },
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        products={products}
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
  );
};

export default StockPage;
