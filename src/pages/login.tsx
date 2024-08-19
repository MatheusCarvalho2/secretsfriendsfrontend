import { useState } from "react";
import ButtonAccept from "../components/inputs/buttonaccept";
import FormInputs from "../components/inputs/form";
import api from "../server/api";
import "./login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log(email);
  console.log(password);

  const createinput = [
    {
      labelForInput: "Email",
      placeholderInput: "Digite seu email",
      typeInput: "email",
      setInputValue: setEmail,
    },
    {
      labelForInput: "Senha",
      placeholderInput: "Digite sua senha",
      typeInput: "password",
      setInputValue: setPassword,
    },
  ];

  return (
    <>
      <div className="global">
        <div className="login">
          <img src="img\Logo.svg" alt="logo Secrets Friends" />

          {createinput.map((input) => (
            <FormInputs
              labelForInput={input.labelForInput}
              placeholderInput={input.placeholderInput}
              typeInput={input.typeInput}
              setInputValue={input.setInputValue}
            />
          ))}

          <button className="button-google" type="button" value="">
            <img src="img\google.png" alt="" />
            <span>Continuar com o Google</span>
            <span></span>
          </button>
          <ButtonAccept
            textButton="Login"
            // onClick={async () => {
            //   console.log(`seu email é ${email}`);
            //   const response = await api.post("/users", {
            //     email: email,
            //     password: password,
            //   });
            //   console.log("response.data", response.data);
            // }}
            onClick={() => {
              console.log(`seu email é ${email}`);
              api.post('/users', {
                user: {
                  email: email,
                  password: password,
                }
              });
            }}
          />
          <div className="remember">
            <a href="">Esqueceu sua senha</a>
            <Link to="/cadastro">Não possui conta? Cadastre-se!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
