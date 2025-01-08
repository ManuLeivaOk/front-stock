import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Props {
  products: any;
  actionBodyTemplate: any;
}
const DataTableComponent = ({ products, actionBodyTemplate }: Props) => {
  return (
    <DataTable value={products} scrollable paginator rows={5}>
      <Column field="nombre" header="Nombre" />
      <Column field="descripcion" header="Descripción" />
      <Column field="stock" header="Stock" />
      <Column field="precio_costo" header="Costo" />
      <Column field="precio_venta" header="Venta" />
      <Column
        header="Proveedor"
        body={(rowData) =>
          rowData.proveedors?.length
            ? rowData.proveedors.map((prov:any) => prov.nombre).join(", ")
            : "Sin proveedores"
        }
      />
      <Column
        field="familia.nombre"
        header="Familia"
        body={(rowData) => rowData.familia?.nombre || "Sin familia"}
      />

      <Column header="Acciones" body={actionBodyTemplate} />
    </DataTable>
  );
};

export default DataTableComponent;
