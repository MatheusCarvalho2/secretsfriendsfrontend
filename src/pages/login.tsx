/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ButtonAccept from "../components/inputs/buttonaccept";
import FormInputs from "../components/inputs/form";
import api from "../server/api";
import "../style/login.css";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg'
import { useDispatch } from 'react-redux';
import { setName } from '../store/reducers/name';

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createinput = [
    {
      labelForInput: "Nome",
      placeholderInput: "Digite seu nome",
      typeInput: "name",
      setInputValue: setName,
    },
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

  const handleLogin = () => {
    api.post('/login', {
      user: {
        email: email,
        password: password,
      }
    }).then(response => {
      if (response.status === 200) {
        // const name = response.data.name;
        localStorage.setItem('name', email);
        // const token = response?.headers?.get('Authorization')?.split(' ')[1];
        // localStorage.setItem('jwt', token);

        window.location.href = '/home';
      }
    })
      .catch(error => {
        console.error("Erro:", error);
      });
  }

  const dispatch = useDispatch();

  const handleNameChange = (newName: string) => {
    dispatch(setName(newName));
  };


  return (
    <>
      <div className="global">
        <div className="login">
          <img className="login-img" src={Logo} alt="Logo do Secrets Friends" />

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
            onClick={() => {
              handleLogin()
              handleNameChange("Ana")
            }}
          />
          <div className="links">
            <a href="">Esqueceu sua senha</a>
            <Link to="/cadastro">Não possui conta? Cadastre-se!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
