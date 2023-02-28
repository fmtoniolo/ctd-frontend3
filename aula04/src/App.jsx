import React from "react";
import Header from "./components/Header";
import "./styles.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />

        <main>
          <h1 className="title">LISTA DE LINGUAGENS DE PROGRAMAÇÃO</h1>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <button onClick={() => alert("OK")}>Clique aqui</button>
        </main>
        <Footer title="Todos os direitos reservados"/>
        <Footer title="Olá usuário, eu sou um footer"/>
        <Footer />
      </div>
    </>
  );
};

export default App;
