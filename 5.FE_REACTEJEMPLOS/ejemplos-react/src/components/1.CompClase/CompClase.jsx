import { Component } from "react";

class CompClase extends Component {
  //ciclo de vida de un componente
  constructor(props) {
    //inicializacion
    super(props);
    console.log("componente creado");
  }

  componentDidUpdate() {
    //cuando el componente se actualiza
    console.log("componente actualizado");
  }

  componentDidMount() {
    //cuando el componente se monta
    console.log("componente montado");
  }

  componentWillUnmount() {
    console.log("componente desmontado");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1> soy un componente presentacional de clase</h1>
      </>
    );
  }
}

export default CompClase;
