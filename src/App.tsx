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
      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <img
          src="public\img\Logo.svg"
          alt="logo Secrets Friends"
          style={{ height: 150, width: 180, marginBottom: 80 }}
        />

        {createinput.map((input) => (
          <FormInputs
            labelForInput={input.labelForInput}
            placeholderInput={input.placeholderInput}
            typeInput={input.typeInput}
          />
        ))}

        <input type="button" value="" />
        <ButtonAccept textButton="Login" />
        <a href="">Esqueceu sua senha</a>
        <a href="">Não possui conta? Cadastre-se!</a>
      </div>
    </>
  );
};

export default App;
