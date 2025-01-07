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
      <Column field="nombre" header="Nombre" />
      <Column field="telefono" header="Teléfono" />
      <Column field="direccion" header="Dirección" />
      <Column field="email" header="Email" />
      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
