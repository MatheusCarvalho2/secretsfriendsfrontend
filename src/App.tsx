import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Create from "./pages/create";
import ParticipantsList from "./pages/participants_list";
import AddParticipant from "./pages/add_participantes";
import DrawHeld from "./pages/draw_held";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/criar" element={<Create />} />
        <Route path="/lista" element={<ParticipantsList />} />
        <Route path="/adicionar" element={<AddParticipant />} />
        <Route path="/sorteio_realizado" element={<DrawHeld />} />
      </Routes>
    </Router>
  );
};

export default App;
