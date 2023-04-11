import {useEffect, useState} from "react";
import Card from "../../components/Card/Card";
import BaseTemplate from "../../templates/BaseTemplate";
import styles from "./styles.module.css";
import api from "../../services/api";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const [team, setTeams] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("@times_token");

  async function getTeams() {
    try {
      const response = await api.get("/teams", {
        headers: {
          Authorization: token
        }
      });
      setTeams(response.data);
    } catch (er) {
      console.log(er);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    getTeams();
  }, []);

  return (
    <BaseTemplate className={styles.base}>
      <div className={styles.cards_container}>
        <ul>
          {team.map(team => (
            <li key={team._id}>
              <Card img={team.image} name={team.name} />
            </li>
          ))}
        </ul>
      </div>
    </BaseTemplate>
  );
};

export default Home;
