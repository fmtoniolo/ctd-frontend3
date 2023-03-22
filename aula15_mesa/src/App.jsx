import axios from "axios";
import {useEffect, useState} from "react";
import "./App.css";

function App() {
  const url = "https://api-aluno.vercel.app/aluno/";
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState("");
  const [id, setId] = useState("");

  async function getAlunos() {
    try {
      const response = await axios.get(url);
      setAlunos(response.data);
    } catch (er) {
      alert(er);
    }
  }

  async function addAluno(event) {
    event.preventDefault();
    try {
      await axios.post(url, {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre
      });
      getAlunos();
      clearFields();
    } catch (er) {
      alert(er);
    }
  }

  async function deleteAluno(id) {
    try {
      await axios.delete(url + id);
      getAlunos();
    } catch (er) {
      alert(er);
    }
  }

  function fillFields(aluno) {
    setNome(aluno.nome);
    setMatricula(aluno.matricula);
    setCurso(aluno.curso);
    setBimestre(aluno.bimestre);
    setId(aluno._id);
  }

  async function editAluno(event) {
    event.preventDefault();

    try {
      await axios.put(url + id, {
        nome,
        matricula,
        curso,
        bimestre
      });
      getAlunos();
      clearFields();
    } catch (er) {
      alert(er);
    }
  }

  function clearFields() {
    setNome("");
    setMatricula("");
    setCurso("");
    setBimestre("");
  }

  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <div>
      <h1>Alunos</h1>

      <form onSubmit={id ? editAluno : addAluno}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Matrícula"
          value={matricula}
          onChange={event => setMatricula(event.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Curso"
          value={curso}
          onChange={event => setCurso(event.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Bimestre"
          value={bimestre}
          onChange={event => setBimestre(event.target.value)}
        />{" "}
        <br />
        <input type="submit" value={id ? "Salvar" : "Enviar"} /> <br />
      </form>

      <ul>
        {alunos.map(aluno => (
          <li key={aluno._id}>
            <h3>{aluno.nome}</h3>
            <small>ID: {aluno._id}</small>
            <p>Matrícula: {aluno.matricula}</p>
            <p>Curso: {aluno.curso}</p>
            <p>Bimestre: {aluno.bimestre}</p>
            <button onClick={() => deleteAluno(aluno._id)}>Apagar</button>
            <button onClick={() => fillFields(aluno)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
