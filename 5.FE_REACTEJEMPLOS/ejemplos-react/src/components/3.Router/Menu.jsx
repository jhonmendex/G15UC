import "./Menu.css";
import { Link } from "react-router-dom";
function Vineta() {
  return <> 😀 </>;
}

function Menu() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/compclase">
            <Vineta />
            comp clase
          </Link>
        </li>

        <li>
          <Link to="/compfuncion">
            <Vineta />
            comp funcion
          </Link>
        </li>
        <li>
          <Link to="/mui">
            <Vineta />
            Ejemplo Mui
          </Link>
        </li>
        <li>
          <Link to="/props">
            <Vineta />
            Ejemplo Props
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
