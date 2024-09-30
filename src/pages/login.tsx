/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ButtonAccept from "../components/inputs/buttonaccept";
import FormInputs from "../components/inputs/form";
import api from "../server/api";
import "../style/login.css";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg'
import { profileSignIn, ProfileProps } from "../store/actions";
import { useSelector } from "react-redux";
import { ProfileState } from "../store/types";
import { ApplicationState } from "../store";

// import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

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

  // const dispatch = useDispatch();

  // const handleNameChange = (newName: string) => {
  //   dispatch(setName(newName));
  // };

  const user: ProfileProps = {
    email,
    password,
    passwordConfimation: password,
  };

  const handleLogin = () => {
    profileSignIn(user);

    // api.post('/login', {
    //   user: {
    //     email: email,
    //     password: password,
    //   }
    // }).then(response => {
    //   if (response.status === 200) {

    //     // const name = response.data.name;
    //     // localStorage.setItem('name', email);
    //     // handleNameChange(email)
    //     // const token = response?.headers?.get('Authorization')?.split(' ')[1];
    //     // localStorage.setItem('jwt', token);

    //     window.location.href = '/home';
    //   }
    // })
    //   .catch(error => {
    //     console.error("Erro:", error);
    //   });
  }
  const { profile } = useSelector<ApplicationState, ProfileState>((state) => state.storage.profile);

  console.log(profile);


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
