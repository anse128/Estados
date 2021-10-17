import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Checkbox />
    </div>
  );
}

function Checkbox() {
  let infoEstado = useState(false); //El Hook useState retorna un array con la información del estado, donde en la posición 0 es el estado actual y la posición 1 la función donde vamos a pasar el valor del nuevo estado

  let valorActual = infoEstado[0];
  let actualizarEstado = infoEstado[1];

  console.log("el valor actual es: " + valorActual); //false
  console.log("función para actualizar es: : " + infoEstado); // función () { [native codec] } codigo nativo de la librería, está abstraida, lo que nos interesa es que sabemos que retorna información del estado y que a su vez recibe como argumento el valor

  const manejarCambio = () => {
    console.log("se disparo el evento onChange...");
    // le pasamos el valor nuevo de ese estado que nosotros vamos a querer ver en ese componente
    if (valorActual === true) {
      //si el valor actual es true actualizo el estado a false
      actualizarEstado(false); 
    } else {
      //si el valor actual es false actualizo el estado a true
      actualizarEstado(true);
    }
  };

  return (
    <>
      {/* Vamos a querer manejar el estado con React eso va a significar de que el valor del check va ser igual al valorActual que React produzca por nosotros, esto se hace una vez el evento manejarCambio se despliegue */}
      <input checked={valorActual} onChange={manejarCambio} type="checkbox" />
    </>
  );
}

export default App;
