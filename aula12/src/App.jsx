import {useState, useEffect} from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(9000);

  useEffect(() => {
    setNumber(100);
  }, [number2]); // toda vez que number2 muda, useEffect executa novamente, nesse caso, reseta number para 100

  return (
    <div>
      <h1>Hello</h1>
      <h2>{number}</h2>
      <h2>{number2}</h2>

      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
      <button onClick={() => setNumber2(number2 + 1)}>Incrementar 2</button>
    </div>
  );
};

export default App;
