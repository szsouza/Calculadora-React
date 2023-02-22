import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState("somar");

  const calcular = () => {
    if (operacao == "somar") return parseFloat(nro1) + parseFloat(nro2);
    else if (operacao == "subtrair") return parseFloat(nro1) - parseFloat(nro2);
    else if (operacao == "Multiplicar")
      return parseFloat(nro1) * parseFloat(nro2);
    else return parseFloat(nro1) / parseFloat(nro2);
  };

  useEffect(() => {
    setResultado(calcular());
  }, [nro1, nro2, operacao]);

  return (
    <div className="App">
      <h1>Calculadora react</h1>
      <label>Primeiro Nro</label>
      <input
        type="number"
        required
        value={nro1}
        onChange={(e) => setNro1(e.target.value)}
      />
      <label>Segundo Nro</label>
      <input
        type="number"
        required
        value={nro2}
        onChange={(e) => setNro2(e.target.value)}
      />

      <select onChange={(e) => setOperacao(e.target.value)}>
        <option>somar</option>
        <option>subtrair</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>

      <label>Resultado {resultado} </label>
    </div>
  );
}

export default App;
