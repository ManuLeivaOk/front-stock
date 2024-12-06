import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
    products: any
    actionBodyTemplate: any
}
const DataTableComponent = ({ products, actionBodyTemplate }: Props) => {
  return (
    <DataTable value={products} scrollable paginator rows={5}>
      <Column field="name" header="Nombre" />
      <Column field="family" header="Familia" />
      <Column field="provider" header="Proveedor" />
      <Column field="stock" header="Stock" />
      <Column field="price" header="Precio" body={(data) => `$${data.price}`} />
      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
