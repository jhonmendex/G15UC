import CompClase from "./components/1.CompClase/CompClase.jsx";
import CompFuncion from "./components/2.CompFuncion/CompFuncion.jsx";
import Menu from "./components/3.Router/Menu.jsx";
import MaterialUi from "./components/4.EstilosMui/MaterialUi.jsx";
import Libro from "./components/5.Props/Libro.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <hr />
        <br />
        <Routes>
          <Route path="/compclase" element={<CompClase />} />
          <Route path="/compfuncion" element={<CompFuncion />} />
          <Route path="/mui" element={<MaterialUi />} />
          <Route path="/props" element={<Libro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
