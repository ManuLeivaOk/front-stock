import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React from "react";

interface Props {
  currentProduct: any;
  showDialog: any;
  handleCloseDialog: any;
  families: any;
  providers: any;
}
const DialogNewProduct = ({
  currentProduct,
  showDialog,
  handleCloseDialog,
  families,
  providers,
}: Props) => {
  return (
    <Dialog
      header={currentProduct ? "Editar Producto" : "Agregar Nuevo Producto"}
      visible={showDialog}
      style={{ width: "450px" }}
      modal
      onHide={handleCloseDialog}
    >
      <div className="p-fluid">
        <div className="p-field mt-3">
          <label htmlFor="name" className="ml-1">
            Nombre
          </label>
          <InputText
            id="name"
            placeholder="Nombre del producto"
            className="mt-1"
            defaultValue={currentProduct?.name || ""}
          />
        </div>
        <div className="p-field mt-3">
          <label htmlFor="family" className="ml-1">
            Familia
          </label>
          <Dropdown
            id="family"
            options={families}
            placeholder="Selecciona una familia"
            className="mt-1"
            value={currentProduct?.family || ""}
          />
        </div>
        <div className="p-field mt-3">
          <label htmlFor="provider" className="ml-1">
            Proveedor
          </label>
          <Dropdown
            id="provider"
            options={providers}
            placeholder="Selecciona un proveedor"
            className="mt-1"
            value={currentProduct?.provider || ""}
          />
        </div>
        <div className="p-field mt-3">
          <label htmlFor="stock" className="ml-1">
            Stock
          </label>
          <InputText
            id="stock"
            placeholder="Cantidad en stock"
            className="mt-1"
            defaultValue={currentProduct?.stock?.toString() || ""}
          />
        </div>
        <div className="p-field mt-3">
          <label htmlFor="price" className="ml-1">
            Precio
          </label>
          <InputText
            id="price"
            placeholder="Precio del producto"
            className="mt-1"
            defaultValue={currentProduct?.price?.toString() || ""}
          />
        </div>
      </div>
      <div className="flex justify-content-center mt-4">
        <Button
          label="Cancelar"
          icon="pi pi-times"
          className="p-button-text mx-2"
          onClick={handleCloseDialog}
        />
        <Button
          label="Guardar"
          icon="pi pi-check"
          className="p-button-primary mx-2"
          onClick={() => console.log("Guardar producto")}
        />
      </div>
    </Dialog>
  );
};

export default DialogNewProduct;
