const DetalleLibro = (props) => {
  return (
    <>
      <h3>{props.libro.nombre}</h3>
      <p>Autor: {props.libro.autor}</p>
      <p>Precio: {props.libro.precio}</p>
      <p>publicacion: {props.publicacion}</p>
    </>
  );
};

export default DetalleLibro;
