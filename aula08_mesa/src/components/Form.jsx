import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [movie, setMovie] = useState("");
    const [list, setList] = useState([]);

    const formSubmit = () => {
        const data = {
            name: name,
            age: age,
            movie: movie
        }
        setList([...list, data]);
        setName("");
        setAge("");
        setMovie("");
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter'){
            formSubmit()
        } 
            
    }
console.log(list)
  return (
    <>
      <h2>Form</h2>
      <p>Nome, idade e filme favorito:</p>
      <form>
        <input placeholder="Nome" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <br />
        <input placeholder="Idade" type="text" value={age} onChange={(event) => setAge(event.target.value)} />
        <br />
        <br />
        <input placeholder="Filme" type="text" value={movie} onChange={(event) => setMovie(event.target.value)} onKeyDown={handleEnter}/>
        <br />
        <br />

        <input type="button" value="Registrar" onClick={formSubmit} />
        <input type="button" value="Limpar" onClick={() => setList([])} />
      </form>

    <ul>
        {
            list.map((item, index) => (
                <li key={index}>
                <strong>Nome:</strong> {item.name} <br/> <strong>Idade:</strong> {item.age} <br/> <strong>Filme favorito:</strong> {item.movie}
                <br />
                <br />
                </li>
            ))
        }
    </ul>

    </>
  );
};

export default Form;
