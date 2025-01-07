import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
  clientes: any;
  actionBodyTemplate: any;
}
const DataTableComponent = ({ clientes, actionBodyTemplate }: Props) => {
  return (
    <DataTable value={clientes} scrollable paginator rows={5}>
      <Column field="nombre" header="Nombre" />
      <Column field="telefono" header="Teléfono" />
      <Column field="direccion" header="Dirección" />
      <Column field="email" header="Email" />
      <Column field="fecha_registro" header="Alta" />
      <Column field="patente" header="Patente" />
      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
