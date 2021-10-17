import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <Checkbox />
      
    </div>
  );
}
/* todos los eventos en html dan un objeto evento que podemos recuperr dentro de nuestro callback (event), el evento da la posibilidad de acceder a este objeto*/

export function Checkbox() {
  const manejarCambio = (event) => {
    console.log("he cambiado");
    console.log("-----------------");
    console.log(event); // imprime el objeto evento, que tiene un monton de propiedades, entre ellas target que representa al nodo HTML en cuestion, tipo de evento : change.
    console.log("-----------------");
    console.log(event.target); // Representacion de ese nodo HTML que es una etiqueta <input>
    console.log("-----------------");
    console.log(event.target.type); // si accedo a la propiedad tipo, nos muestra que corresponde a tipo checkbox
    console.log("-----------------");
    console.log(event.target.checked); // si accedo a la propiedad checked nos muestra el valor actual del estado: true o false
  };
  return (
    <>
      {/* <input onChange={manejarCambio} type="checkbox" /> */}
      {/* El elemento onChange se dispara cuando hay un cambio de estado en el componente   */}
      <input onChange={true} type="checkbox" />
      {/* Si decidimos manejar el estado de un componente externo a React: react arroja warning : un componente está cambiando un input de forma no controlada, por lo que vamos a tener que manejar el estado con React  */}
    </>
  );
}

export default App;
