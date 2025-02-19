import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import productoService from "../services/producto.service";

function InsertarProducto() {
  const [producto, setProducto] = useState({
    id: "",
    stock: 0,
    name: "",
    brand: "",
    price: 0.0,
    active: true,
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const id = form.id.value;
      const stock = form.stock.value;
      const name = form.name.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const active = form.active.checked;

      const newProducto = { id, stock, name, brand, price, active };
      setProducto(newProducto);
      await productoService.create(newProducto);
      console.log("Producto registrado:", newProducto);
      navigate("/listado");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="container mt-4 card p-4">
        <h2>Insertar Producto</h2>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input type="text" className="form-control" name="id" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input type="text" className="form-control" name="brand" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" step="0.01" className="form-control" name="price" required />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" name="active" defaultChecked />
          <label className="form-check-label">Activo</label>
        </div>
        <button type="submit" className="btn btn-primary">Guardar Producto</button>
      </form>
    </>
  );
}

export default InsertarProducto;
