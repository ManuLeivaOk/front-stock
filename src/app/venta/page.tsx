"use client";
import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { DataTable, Column } from "primereact/datatable";
import { InputNumber } from "primereact/inputnumber";
import axios from "axios";

const productosDisponibles = [
  { id: 1, nombre: "Producto A", precio: 10.0 },
  { id: 2, nombre: "Producto B", precio: 15.0 },
  { id: 3, nombre: "Producto C", precio: 7.5 },
  { id: 4, nombre: "Producto D", precio: 25.0 },
  { id: 5, nombre: "Producto E", precio: 30.0 },
  { id: 999, nombre: "Otros", precio: 0 },
];

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface DetalleVenta {
  id: number;
  producto: Producto | null;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
  descripcion: string;
}

export default function DetalleVenta() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [fecha, setFecha] = useState<Date | null>(null);
  const [detalles, setDetalles] = useState<DetalleVenta[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [productoFiltro, setProductoFiltro] = useState<Producto[]>([]);
  const [clienteFiltro, setClienteFiltro] = useState<any[]>([]);
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchclientes();
    setFecha(new Date());
  }, []);

  useEffect(() => {
    const nuevoTotal = detalles.reduce(
      (acc, detalle) => acc + (detalle.subtotal || 0),
      0
    );
    setTotal(nuevoTotal);
  }, [detalles]);

  const fetchclientes = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/clientes");
      const clientesProcesados = response.data.data.map((cliente: any) => ({
        id: cliente.id,
        ...cliente.attributes, // Esto desestructura correctamente los atributos
      }));
      setClientes(clientesProcesados);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los clientes", error);
      setLoading(false);
    }
  };
  
  

  const agregarDetalle = () => {
    const nuevoDetalle: DetalleVenta = {
      id: detalles.length + 1,
      producto: null,
      cantidad: 0,
      precioUnitario: 0,
      subtotal: 0,
      descripcion: "",
    };
    setDetalles([...detalles, nuevoDetalle]);
  };

  const actualizarDetalle = (index: number, campo: string, valor: any) => {
    const nuevosDetalles = [...detalles];
    const detalle = nuevosDetalles[index];

    if (campo === "producto") {
      detalle.producto = valor;
      detalle.precioUnitario = valor ? valor.precio : 0;
      if (valor && valor.id !== 999) {
        detalle.descripcion = ""; // Limpiar descripción si no es "Otros"
      }
    } else if (campo === "cantidad") {
      detalle.cantidad = valor;
    } else if (campo === "descripcion") {
      detalle.descripcion = valor;
    } else if (campo === "precioUnitario") {
      detalle.precioUnitario = valor;
    }

    detalle.subtotal = detalle.precioUnitario * detalle.cantidad;
    setDetalles(nuevosDetalles);
  };

  const filtrarProductos = (e: { query: string }) => {
    const filtro = e.query.toLowerCase();
    setProductoFiltro(
      productosDisponibles.filter((producto) =>
        producto.nombre.toLowerCase().includes(filtro)
      )
    );
  };

  const filtrarClientes = (e: { query: string }) => {
    const filtro = e.query.toLowerCase();
    setClienteFiltro(
      clientes.filter((cliente: any) =>
        cliente.nombre.toLowerCase().includes(filtro)
      )
    );
  };

  return (
    <div className="p-4">
      <Card title="Detalle de Venta">
        <div className="grid formgrid">
          <div className="field col-12 md:col-6">
            <label htmlFor="cliente">Cliente</label>
            <AutoComplete
              id="cliente"
              value={clienteSeleccionado}
              suggestions={clienteFiltro}
              completeMethod={filtrarClientes}
              field="nombre"
              onChange={(e) => setClienteSeleccionado(e.value)}
              placeholder="Escribir nombre del cliente"
              className="w-full"
            />
          </div>
          <div className="field col-12 md:col-6">
            <label htmlFor="fecha">Fecha</label>
            <Calendar
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.value)}
              dateFormat="dd/mm/yy"
              className="w-full"
              disabled
            />
          </div>
        </div>
      </Card>

      <Card title="Detalles de Productos" className="mt-4">
        <DataTable value={detalles} responsiveLayout="scroll">
          <Column
            header="Producto"
            body={(rowData, options) => (
              <AutoComplete
                value={rowData.producto}
                suggestions={productoFiltro}
                completeMethod={filtrarProductos}
                field="nombre"
                onChange={(e) =>
                  actualizarDetalle(options.rowIndex, "producto", e.value)
                }
                placeholder="Escribir nombre del producto"
              />
            )}
          />
          <Column
            header="Descripción"
            body={(rowData, options) => (
              <InputText
                value={rowData.descripcion || ""}
                onChange={(e) =>
                  actualizarDetalle(
                    options.rowIndex,
                    "descripcion",
                    e.target.value
                  )
                }
                placeholder="Escribir descripción"
                disabled={rowData.producto?.id !== 999}
              />
            )}
          />
          <Column
            header="Cantidad"
            body={(rowData, options) => (
              <InputNumber
                value={rowData.cantidad}
                onValueChange={(e) =>
                  actualizarDetalle(options.rowIndex, "cantidad", e.value)
                }
                min={0}
                placeholder="Cantidad"
              />
            )}
          />
          <Column
            header="Precio Unitario"
            body={(rowData, options) =>
              rowData.producto && rowData.producto.id === 999 ? (
                <InputNumber
                  value={rowData.precioUnitario}
                  onValueChange={(e) =>
                    actualizarDetalle(
                      options.rowIndex,
                      "precioUnitario",
                      e.value
                    )
                  }
                  mode="currency"
                  currency="USD"
                  placeholder="Precio"
                />
              ) : (
                `$${(rowData.precioUnitario || 0).toFixed(2)}`
              )
            }
          />
          <Column
            header="Subtotal"
            body={(rowData) => `$${(rowData.subtotal || 0).toFixed(2)}`}
          />
        </DataTable>
        <Button
          label="Agregar Producto"
          icon="pi pi-plus"
          className="my-3 p-button p-component"
          onClick={agregarDetalle}
        />
      </Card>

      <div className="flex justify-end mt-4">
        <h3>
          Total: <strong>${total.toFixed(2)}</strong>
        </h3>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button
          label="Guardar Venta"
          icon="pi pi-save"
          className="p-button-rounded p-button-warning p-button p-component"
        />
        <Button
          label="Cancelar"
          icon="pi pi-times"
          className="p-button-rounded p-button-danger p-button p-component"
        />
      </div>
    </div>
  );
}
