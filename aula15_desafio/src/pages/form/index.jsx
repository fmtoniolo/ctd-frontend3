import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import api from "../../services/api";

function FormPage() {
  const [aluno, setAluno] = useState({});

  async function getAluno() {
    try {
      const {data} = await api.get(`/aluno/${id}`);
      setAluno({...data});
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getAluno;
  }, []); //passa o id pro form, pegar os dados e preencher o form

  const {id} = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <Link to="/home">Home</Link>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Matrícula" />
        <select name="" id="">
          <option value="Banco de Dados">Banco de Dados</option>
          <option value="React JS">React JS</option>
          <option value="React Native">React Native</option>
          <option value="API REST">API REST</option>
        </select>
        <input type="number" placeholder="Bimestre" />
      </form>
    </div>
  );
}

export default FormPage;
