import { useEffect, useState } from "react";
import { getProductos, eliminarProducto } from "../services/api";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const res = await getProductos();
    setProductos(res.data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleDelete = async (id) => {
    await eliminarProducto(id);
    cargarProductos();
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      {productos.map((p) => (
        <div key={p._id}>
          <p>{p.nombre} - {p.cantidad}</p>
          <button onClick={() => handleDelete(p._id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;