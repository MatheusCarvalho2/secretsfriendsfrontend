import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Hello from "./pages/hello";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Router>
  );
};

export default App;
