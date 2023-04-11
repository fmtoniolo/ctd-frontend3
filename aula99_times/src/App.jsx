import "./app.css";
import Login from "./pages/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import {useState} from "react";
import LoginContext from "./context/LoginContext";
import TeamInfo from "./pages/team-info";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <LoginContext.Provider value={{username, setUsername}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info/" element={<TeamInfo />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default App;
