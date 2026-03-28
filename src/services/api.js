// Guardar y leer del localStorage

const STORAGE_KEY = "productos";

// Obtener productos
export const getProductos = async () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return { data: data ? JSON.parse(data) : [] };
};

// Crear producto
export const crearProducto = async (producto) => {
  const data = localStorage.getItem(STORAGE_KEY);
  const productos = data ? JSON.parse(data) : [];

  producto._id = Date.now();

  productos.push(producto);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
};

// Eliminar producto
export const eliminarProducto = async (id) => {
  const data = localStorage.getItem(STORAGE_KEY);
  let productos = data ? JSON.parse(data) : [];

  productos = productos.filter(p => p._id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
};