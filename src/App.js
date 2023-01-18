import "./App.css";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import { Clear } from "./componentes/Clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  function addInput(valor) {
    setInput(input + valor);
  }
  function result() {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Porfavor ingrese valores para realizar calculos.");
    }
  }

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={result}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
