import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Test from "@/pages/Test";
import NotFound from "@/pages/NotFound";

/**
 * Rutas de la app. Para agregar una pantalla nueva:
 *   <Route path="/nueva-ruta" element={<NuevaPagina />} />
 */
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
