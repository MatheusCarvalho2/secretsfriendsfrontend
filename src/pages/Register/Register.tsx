import FormInputs from "../../components/Form/Form";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import api from '../../server/api';

function Register() {
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
      inputName: 'nome-completo',
      inputId: 'nome-completo-input'
    },
    {
      labelForInput: 'Email',
      placeholderInput: 'Digite seu email',
      typeInput: 'email',
      setInputValue: setEmail,
      inputName: 'email',
      inputId: 'email-input'
    },
    {
      labelForInput: 'Senha',
      placeholderInput: 'Digite sua senha',
      typeInput: 'password',
      setInputValue: setPassword,
      inputName: 'senha',
      inputId: 'senha-input'
    },
    {
      labelForInput: 'Confirme sua senha',
      placeholderInput: 'Confirme sua senha',
      typeInput: 'password',
      setInputValue: setPasswordConfirmation,
      inputName: 'confirmacao-senha',
      inputId: 'confirmacao-senha-input'
    },
  ]

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.post('/signup', {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          window.location.href = '/';
        }
      })
      .catch(error => {
        console.error("Erro:", error);
      });
  };


  return (
    <>
      <div className="breadcrumb">
        <div className='breadcrumb-header'>
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
            {formsParameters.map((formParameter, index) =>
              <FormInputs key={index} {...formParameter} />
            )}
          </div>
          <button className='default-button' type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default Register