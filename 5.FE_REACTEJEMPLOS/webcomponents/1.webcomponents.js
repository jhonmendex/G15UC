class MiElemento extends HTMLElement {
  //crear el componente
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <h1> Titulo elemento</h1>
    <p>Contenido Elemento</p>
     <b>descripcion</b>
    `;
  }
}

customElements.define("mi-elemento", MiElemento);
