import {useState} from "react";

const AddElement = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length]);
  };

  const clear = () => {
    return (
        setNumbers([])
    )
    
  }

  return (
    <div>
      <h1>Adicionar elemento</h1>
      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>O item {number} foi adicionado à lista!</li>;
        })}

        <button style={{margin: 20}} onClick={addNumber}>
          Adcionar item
        </button>
        <button style={{margin: 20}} onClick={clear}>
          Limpar
        </button>
      </ul>
    </div>
  );
};

export default AddElement;
