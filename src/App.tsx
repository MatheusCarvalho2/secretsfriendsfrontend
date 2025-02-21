import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import ParticipantsList from "./pages/ParticipantsList/ParticipantsList";
import DrawHeld from "./pages/DrawHeld/DrawHeld";
import DrawSent from "./pages/DrawSent/DrawSent";
import DrawSentConfirmation from "./pages/DrawSentConfirmation/DrawSentConfirmation";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ResetPasswordInfo from "./pages/ResetPasswordInfo/ResetPasswordInfo";
import NewPassword from "./pages/NewPassword/NewPassword";
import NewPasswordInfo from "./pages/NewPasswordInfo/NewPasswordInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/criar" element={<Create />} />
        <Route path="/lista" element={<ParticipantsList />} />
        <Route path="/sorteio_realizado" element={<DrawHeld />} />
        <Route path="/envia_email" element={<DrawSent />} />
        <Route path="/emails_enviados" element={<DrawSentConfirmation />} />
        <Route path="/esqueci-minha_senha" element={<ResetPassword />} />
        <Route path="/informacao" element={<ResetPasswordInfo />} />
        <Route path="/password/edit" element={<NewPassword />} />
        <Route path="/informacao_senha" element={<NewPasswordInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
