import { useState } from "react";
import { crearProducto } from "../services/api";

const ProductForm = ({ actualizarLista }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await crearProducto({ nombre, cantidad });

    actualizarLista();
    setNombre("");
    setCantidad("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <button>Guardar</button>
    </form>
  );
};

export default ProductForm;