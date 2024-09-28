import Box from "@mui/material/Box";
import DetalleLibro from "./DetalleLibro.jsx";
const libros = [
  {
    id: 1,
    nombre: "El principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 15.99,
  },
  {
    id: 2,
    nombre: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    precio: 20.99,
  },
  {
    id: 3,
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    precio: 18.99,
  },
];

const Libro = () => {
  const publicacion = 1989;
  return (
    <>
      <Box>
        {libros.map((libro) => {
          return (
            <DetalleLibro
              key={libro.id}
              libro={libro}
              publicacion={publicacion}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Libro;
