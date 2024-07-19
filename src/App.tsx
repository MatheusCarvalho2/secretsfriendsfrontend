import "./App.css";
import ButtonAccept from "./components/inputs/buttonaccept";
import FormInputs from "./components/inputs/form";

const App = () => {
  const createinput = [
    {
      labelForInput: "Email",
      placeholderInput: "Digite seu email",
      typeInput: "email",
    },
    {
      labelForInput: "Senha",
      placeholderInput: "Digite sua senha",
      typeInput: "password",
    },
  ];

  return (
    <>
      <div className="global">
        <div className="login">
          <img src="public\img\Logo.svg" alt="logo Secrets Friends" />

          {createinput.map((input) => (
            <FormInputs
              labelForInput={input.labelForInput}
              placeholderInput={input.placeholderInput}
              typeInput={input.typeInput}
            />
          ))}

          <button className="button-google" type="button" value="">
            <img src="public\img\google.png" alt="" />
            <span>Continuar com o Google</span>
            <span></span>
          </button>
          <ButtonAccept textButton="Login" />
          <div className="remember">
            <a href="">Esqueceu sua senha</a>
            <a href="">Não possui conta? Cadastre-se!</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
