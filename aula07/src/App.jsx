import {useState} from "react";

const App = () => {
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState("Valor incial");

  //let numero = 0;
  console.log(numero);
  function handleClick() {
    setNumero(numero + 1);
    setNome("Felipe " + numero);
  }

  return (
    <div>
      <h1>{numero}</h1>
      <h2>{nome}</h2>
      <button onClick={handleClick}>Clique</button>
    </div>
  );
};

export default App;
