import api from "../../services/api";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import FormPage from "../form";

const HomePage = () => {
  const [alunos, setAlunos] = useState([]);

  async function getAlunos() {
    try {
      const {data} = await api.get("aluno");
      setAlunos(data);
    } catch (er) {
      alert(er);
    }
  }

  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <div>
      <h1>Alunos</h1>
      <Link to="/formulario">Formulário</Link>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno._id}>
            <Link to={`/formulario/${aluno._id}`}>
              <p>{aluno.nome}</p>
            </Link>
            <button>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
