import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const miApp = document.getElementById("mi-aplicacion");
createRoot(miApp).render(<App />);
