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

interface Products {
  id: number;
  nombre: string;
  precio: number;
}

interface DetalleVenta {
  id: number;
  producto: Products | null;
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
  const [productoFiltro, setProductoFiltro] = useState<Products[]>([]);
  const [clienteFiltro, setClienteFiltro] = useState<any[]>([]);
  const [clientes, setClientes] = useState([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  const [numeroComprobante, setNumeroComprobante] = useState<number>(1);

  useEffect(() => {
    fetchClientes();
    fetchProductos();
    setFecha(new Date());
    setNumeroComprobante((prev) => prev + 1); // Incrementa al cargar el componente
  }, []);

  useEffect(() => {
    const nuevoTotal = detalles.reduce(
      (acc, detalle) => acc + (detalle.subtotal || 0),
      0
    );
    setTotal(nuevoTotal);
  }, [detalles]);

  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/clientes");
      const clientesProcesados = response.data.data.map((cliente: any) => ({
        id: cliente.id,
        nombre: cliente.nombre,
        ...cliente,
      }));
      setClientes(clientesProcesados);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los clientes", error);
      setClientes([]);
      setLoading(false);
    }
  };

  const fetchProductos = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/productos");
      const productosProcesados = response.data.data.map((producto: any) => ({
        id: producto.id,
        nombre: producto.nombre || "Sin nombre",
        precio: producto.precio_venta || 0,
        descripcion: producto.descripcion || "Sin descripcion",
      }));
      setProducts(productosProcesados);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      setProducts([]);
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

  const guardarVenta = () => {
    console.log("Guardar venta", detalles);
    alert("Venta guardada exitosamente.");
  };

  const cancelarVenta = () => {
    if (confirm("¿Estás seguro de que deseas cancelar la venta?")) {
      setDetalles([]);
      setClienteSeleccionado(null);
      setTotal(0);
      alert("Venta cancelada.");
    }
  };

  const imprimirVenta = () => {
    alert("Imprimir funcionalidad no implementada aún.");
    console.log("Venta a imprimir", detalles);
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
              completeMethod={(e) =>
                setClienteFiltro(
                  clientes.filter((cliente: any) =>
                    cliente.nombre.toLowerCase().includes(e.query.toLowerCase())
                  )
                )
              }
              field="nombre"
              onChange={(e) => setClienteSeleccionado(e.value)}
              placeholder="Escribir nombre del cliente"
              className="w-full"
            />
          </div>
          <div className="field col-12 md:col-6">
            <div className="flex justify-content-between align-items-center">
              <div>
                <label htmlFor="numeroComprobante">N° Comprobante</label>
                <InputText
                  id="numeroComprobante"
                  value={numeroComprobante}
                  disabled
                  className="w-full md:w-10rem"
                />
              </div>
              <div>
                <label htmlFor="fecha">Fecha</label>
                <Calendar
                  id="fecha"
                  value={fecha}
                  onChange={(e) => setFecha(e.value)}
                  dateFormat="dd/mm/yy"
                  className="w-full md:w-10rem"
                  disabled
                />
              </div>
            </div>
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
                completeMethod={(e) =>
                  setProductoFiltro(
                    products.filter((producto) =>
                      producto.nombre
                        .toLowerCase()
                        .includes(e.query.toLowerCase())
                    )
                  )
                }
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
            body={(rowData) => (
              <InputText
                value={rowData.producto ? rowData.producto.descripcion : ""}
                disabled
                placeholder="Descripción del producto"
              />
            )}
          />
          <Column
            header="Precio Unitario"
            body={(rowData, options) => (
              <InputNumber
                value={rowData.precioUnitario}
                onValueChange={(e) =>
                  actualizarDetalle(options.rowIndex, "precioUnitario", e.value)
                }
                mode="currency"
                currency="USD"
                placeholder="0.00"
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
                placeholder="0"
              />
            )}
          />
          <Column
            header="Subtotal"
            body={(rowData) => <span>{rowData.subtotal.toFixed(2)}</span>}
          />
        </DataTable>
        <Button
          label="Agregar Producto"
          icon="pi pi-plus"
          className="my-3 p-button p-component"
          onClick={agregarDetalle}
        />
        <div className="flex justify-content-end gap-3 mt-4">
          <Button
            label="Guardar"
            icon="pi pi-save"
            className="p-button-success"
            onClick={guardarVenta}
          />
          <Button
            label="Cancelar"
            icon="pi pi-times"
            className="p-button-danger"
            onClick={cancelarVenta}
          />
          <Button
            label="Imprimir"
            icon="pi pi-print"
            className="p-button-primary"
            onClick={imprimirVenta}
          />
        </div>
      </Card>
    </div>
  );
}
