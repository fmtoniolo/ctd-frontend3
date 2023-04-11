import {Link, useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import {useCallback, useContext, useState, useEffect} from "react";
import LoginContext from "../../context/LoginContext";

const Header = () => {
  const {username, setUsername} = useContext(LoginContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const logout = {
    click: useCallback(() => {
      setShowModal(true);
    }, []),
    confirm: useCallback(() => {
      setShowModal(false);
      localStorage.removeItem("@times_username");
      localStorage.removeItem("@times_token");
      navigate("/");
    }, [navigate]),
    cancel: useCallback(() => {
      setShowModal(false);
    }, [])
  };

  useEffect(() => {
    const getName = localStorage.getItem("@times_username");
    setUsername(getName);
  }, []);

  return (
    <header className={styles.header_container}>
      <Link to={"/home"} className={styles.header_left}>
        <img
          className={styles.img_header}
          src="src/assets/dh-logo.png"
          alt="Digital House"
        />
      </Link>

      <div className={styles.header_right}>
        <p>Olá, {username}</p>

        <button onClick={logout.click} className={styles.header_button}>
          Sair
        </button>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <div className={styles.modal_header}>
                <h2>Confirmação</h2>
                <p>Deseja realmente sair?</p>
              </div>
              <div className={styles.modal_buttons}>
                <button onClick={logout.confirm}>Sim</button>
                <button
                  onClick={logout.cancel}
                  className={styles.modal_button_no}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
