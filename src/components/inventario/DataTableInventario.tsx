import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
  inventario: any;
  actionBodyTemplate: any;
}
const DataTableComponent = ({ inventario, actionBodyTemplate }: Props) => {
  return (
    <DataTable value={inventario} scrollable paginator rows={5}>
      <Column field="producto" header="Nombre" />
      <Column field="cantidad" header="Cantidad" />
      <Column field="fecha" header="Fecha" />
      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
