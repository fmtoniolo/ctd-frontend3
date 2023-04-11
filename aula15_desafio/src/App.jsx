import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";
import FormPage from "./pages/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="/formulario/:id" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
