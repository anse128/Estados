import corazonFull from "./img/corazon-full.svg";
import corazonVacio from "./img/corazon-vacio.svg";

function App() {
  let mostrarCorazon = true;
  return (
    <div className="App">
      {/* una operación por llave dentro del jsx  */}
      {
        //----operador ternario----
        //{unaCondicion ? "mostrar algo" : "mostramos nada"}
        //para retornar mas d euna linea en un componente de react hay que poner parentesis
      }

      {
        mostrarCorazon ? ( // si es verdadero mostrar corazonFull
          <img height="30px" src={corazonFull} alt="corazón full" />
        ) : ( // si no mostrar corazonVacio
          <img height="30px" src={corazonVacio} alt="corazón vacío" />
        )
      }
    </div>
  );
}

export default App;
