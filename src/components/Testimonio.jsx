import React from "react";
import '../style/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="Imagen de Emma" className="imagen-testimonio" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio; 