import FormInputs from "../components/inputs/form";
import './cadastro.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import api from '../server/api';

function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const formsParameters = [
    {
      labelForInput: 'Nome Completo',
      placeholderInput: 'Digite seu nome completo',
      typeInput: 'text',
      setInputValue: setNomeCompleto,
    },
    {
      labelForInput: 'Email',
      placeholderInput: 'Digite seu email',
      typeInput: 'email',
      setInputValue: setEmail,
    },
    {
      labelForInput: 'Senha',
      placeholderInput: 'Digite sua senha',
      typeInput: 'password',
      setInputValue: setSenha,
    },
    {
      labelForInput: 'Confirme sua senha',
      placeholderInput: 'Confirme sua senha',
      typeInput: 'password',
      setInputValue: setConfirmaSenha,
    },
  ]

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`seu nome é ${nomeCompleto}`);
    console.log(`seu email é ${email}`);
    console.log(`sua senha é ${senha}`);

    api({
      method: "post",
      url: "/users",
      data: {
        email: email,
        password: senha,
        password_confirmation: confirmaSenha,
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Houve um erro!", error);
      });
  };


  return (
    <>
      <div className="cadastro">
        <div className='cadastro-header'>
          <Link to="/" className='backArrow'>
            <FaArrowLeft size={20} />
          </Link>
          <h2>Cadastro</h2>
          <Link to="/" className='backArrow'>
            <FaXmark size={20} />
          </Link>
        </div>
        <form onSubmit={handleLogin} className='form'>
          <div className='form-inputs'>
            {formsParameters.map(formParameter =>
              <FormInputs
                labelForInput={formParameter.labelForInput}
                placeholderInput={formParameter.placeholderInput}
                typeInput={formParameter.typeInput}
                setInputValue={formParameter.setInputValue}
              />)}
          </div>
          <div className="buttonSubmit">
            <button className='buttonPadrao' type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro