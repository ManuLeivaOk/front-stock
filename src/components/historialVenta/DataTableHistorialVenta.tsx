import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
  historialVenta: any;
  actionBodyTemplate: any;
}
const DataTableComponent = ({ historialVenta, actionBodyTemplate }: Props) => {
  return (
    <DataTable value={historialVenta} scrollable paginator rows={5}>
      <Column field="fecha" header="Fecha" />
      <Column field="detalle_venta" header="Detalle de venta" />
      <Column field="total" header="Total" />
      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
