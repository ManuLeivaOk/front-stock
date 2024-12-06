import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React from "react";

interface Props {
  setShowFilterDialog: any;
  showFilterDialog: any;
}
const DialogFilters = ({ setShowFilterDialog, showFilterDialog }: Props) => {
  return (
    <Dialog
      header="Filtros Avanzados"
      visible={showFilterDialog}
      style={{ width: "400px" }}
      modal
      onHide={() => setShowFilterDialog(false)}
    >
      <div className="p-fluid">
        <div className="p-field mt-3">
          <label htmlFor="family">Familia</label>
          <Dropdown
            id="family"
            options={["Electrónica", "Hogar", "Jardinería"]}
            placeholder="Selecciona una familia"
            className="mt-2"
          />
        </div>
        <div className="p-field mt-3">
          <label htmlFor="provider">Proveedor</label>
          <Dropdown
            id="provider"
            options={["Proveedor X", "Proveedor Y", "Proveedor Z"]}
            placeholder="Selecciona un proveedor"
            className="mt-2"
          />
        </div>
      </div>
      <div className="flex justify-content-center mt-5">
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
  );
};

export default DialogFilters;
