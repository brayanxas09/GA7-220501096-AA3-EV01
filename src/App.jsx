import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const recargar = () => window.location.reload();

  return (
    <div>
      <h1>InvexTrack - Inventario</h1>

      <ProductForm actualizarLista={recargar} />
      <ProductList />
    </div>
  );
}

export default App;