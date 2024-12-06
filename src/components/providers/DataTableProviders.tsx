import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
  providers: any;
  actionBodyTemplate: any;
}
const DataTableComponent = ({ providers, actionBodyTemplate }: Props) => {
  return (
    <DataTable value={providers} scrollable paginator rows={5}>
      <Column field="name" header="Nombre" />
      <Column field="phone" header="Teléfono" />
      <Column field="address" header="Dirección" />
      <Column field="email" header="Email" />
      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
