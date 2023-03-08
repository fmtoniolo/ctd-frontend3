import {useState} from "react";

const App = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAgeInput, setUserageInput] = useState("");

  const [listaUsuarios, setListaUsuarios] = useState([]);

  function addUserList() {
    const newUser = {
      nome: userNameInput,
      idade: userAgeInput
    };

    setListaUsuarios([...listaUsuarios, newUser]);
  }

  console.log(listaUsuarios);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={addUserList}>Add</button>

      <br />
      <br />

      {/* <h3>{userNameInput}</h3>
    <h3>{userAgeInput}</h3> */}

      <input
        placeholder="Nome"
        value={userNameInput}
        onChange={event => setUserNameInput(event.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Idade"
        value={userAgeInput}
        onChange={event => setUserageInput(event.target.value)}
      />

      <ul>
        {listaUsuarios.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.idade}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;
