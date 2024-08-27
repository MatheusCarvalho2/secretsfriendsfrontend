import FormInputs from "../components/inputs/form";
import './cadastro.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import api from '../server/api';

function Cadastro() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const formsParameters = [
    {
      labelForInput: 'Nome Completo',
      placeholderInput: 'Digite seu nome completo',
      typeInput: 'text',
      setInputValue: setName,
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
      setInputValue: setPassword,
    },
    {
      labelForInput: 'Confirme sua senha',
      placeholderInput: 'Confirme sua senha',
      typeInput: 'password',
      setInputValue: setPasswordConfirmation,
    },
  ]

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);

    api.post('/signup', {
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erro:", error);
      });
  };


  return (
    <>
      <div className="cadastro">
        <div className='cadastro-header'>
          <Link to="/" className='back-arrow'>
            <FaArrowLeft size={20} />
          </Link>
          <h2>Cadastro</h2>
          <Link to="/" className='back-arrow'>
            <FaXmark size={20} />
          </Link>
        </div>
        <form onSubmit={handleRegister} className='form'>
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
            <button className='button-padrao' type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro