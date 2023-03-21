import {useState} from "react";

const App = () => {
  const [id, setId] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [duracao, setDuracao] = useState("");
  const [listaDisciplinas, setListaDisciplinas] = useState([]);

  function addItem(event) {
    event.preventDefault();
    if (id) {
      console.log(event.target[0].value);
      const copiaListadisciplinas = [...listaDisciplinas];
      const index = copiaListadisciplinas.findIndex(item => item.id === id);
      listaDisciplinas[index].disciplina = event.target[0].value;
      copiaListadisciplinas[index].duracao = duracao;
      //const item = listaDisciplinas.find((item) => item.id === id)
    } else {
      // setListaDisciplinas([
      //   ...listaDisciplinas,
      //   {
      //     id: Date.now(),
      //     disciplina: disciplina, //é possível suprimir quando os nomes são iguais
      //     duracao: duracao
      //   }
      // ]);
      // setDisciplina("");
      // setDuracao("");
      // setId("");
    }
  }

  function apagarItem(id) {
    const result = listaDisciplinas.filter(item => item.id !== id);
    setListaDisciplinas(result);
  }

  function apagarTudo() {
    setListaDisciplinas([]);
  }

  function preencheEstados(item) {
    setDisciplina(item.disciplina);
    setDuracao(item.duracao);
    setId(item.id);
  }

  function handleSubmit(value) {
    switch (value) {
      case "Cadastrar":
        setListaDisciplinas([
          ...listaDisciplinas,
          {
            id: Date.now(),
            disciplina: disciplina, //é possível suprimir quando os nomes são iguais
            duracao: duracao
          }
        ]);
        setDisciplina("");
        setDuracao("");
        setId("");
        break;
      case "Salvar":
        console.log(preencheEstados());
        break;
    }
  }

  return (
    <div>
      <h1>Cadastro de disciplina</h1>

      <form onSubmit={addItem}>
        <input
          value={disciplina}
          onChange={event => setDisciplina(event.target.value)}
          placeholder="Nome da disciplina"
        />
        <br />
        <br />
        <select
          value={duracao}
          onChange={event => setDuracao(event.target.value)}
        >
          <option value="">Selecione uma opção</option>
          <option value="40">40 horas</option>
          <option value="60">60 horas</option>
          <option value="80">80 horas</option>
        </select>

        <br />
        <br />
        <input
          type="button"
          value={id ? "Salvar" : "Cadastrar"}
          onClick={event => handleSubmit(event.target.value)}
        />
        <input type="button" value="Apagar tudo" onClick={apagarTudo} />
      </form>

      {listaDisciplinas.length > 0 ? (
        <ul>
          {listaDisciplinas.map(item => (
            <li key={item.id} style={{border: "1px solid #9999"}}>
              <p>{item.id}</p>
              <p>{item.disciplina}</p>
              <p>{item.duracao}</p>

              <button onClick={() => apagarItem(item.id)}>Apagar</button>
              <button onClick={() => preencheEstados(item)}>Editar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum item cadastrado</p>
      )}
    </div>
  );
};

export default App;
