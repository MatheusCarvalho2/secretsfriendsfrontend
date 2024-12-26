import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import ParticipantsList from "./pages/ParticipantsList/ParticipantsList";
import AddParticipant from "./pages/AddParticipant/AddParticipants";
import DrawHeld from "./pages/DrawHeld/DrawHeld";
import DrawSent from "./pages/DrawSent/DrawSent";
import DrawSentConfirmation from "./pages/DrawSentConfirmation/DrawSentConfirmation";

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
        <Route path="/envia_email" element={<DrawSent />} />
        <Route path="/emails_enviados" element={<DrawSentConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
