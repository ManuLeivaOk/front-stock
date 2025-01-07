import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
  Familia: any;
  actionBodyTemplate: any;
}
const DataTableComponent = ({ Familia, actionBodyTemplate }: Props) => (
  <DataTable value={Familia} scrollable paginator rows={5}>
    <Column field="nombre" header="Familia" />
    <Column field="descripcion" header="Descripción" />
    <Column header="Acciones" body={actionBodyTemplate} />
  </DataTable>
);

export default DataTableComponent;
