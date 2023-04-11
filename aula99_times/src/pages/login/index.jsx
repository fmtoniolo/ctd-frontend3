import api from "../../services/api";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import loginContext from "../../context/LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUsername} = useContext(loginContext);
  const navigate = useNavigate();

  const checkCredentials = async event => {
    event.preventDefault();

    const url = "https://api-products-dh-next.vercel.app/auth";

    try {
      const response = await api.post(url, {
        email,
        password
      });

      if (response.status === 200) {
        setUsername(response.data.name);
        localStorage.setItem("@times_username", response.data.name);
        localStorage.setItem("@times_token", response.data.token);
        navigate("/home");
      }
    } catch (e) {
      console.error(e);
      alert("Email e/ou senha inválidos.");
    }
  };
  return (
    <div className={styles.login_container}>
      <img src="src/assets/dh-logo.png" alt="Digital House" />
      <div className={styles.login_box}>
        <form onSubmit={checkCredentials}>
          <input
            type="email"
            placeholder="Informe o email"
            required
            onChange={event => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Informe a senha"
            required
            onChange={event => setPassword(event.target.value)}
          />
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
