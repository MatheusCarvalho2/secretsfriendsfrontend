import ImgHome from '../assets/images/ImgHome.png'
import LogoImage from '../assets/images/Logo.svg'
import ButtonAccept from '../components/inputs/buttonaccept'
import '../style/home.css'
import { useEffect, useState } from 'react';
import api from '../server/api';

function Home() {
  const [userName, setUserName] = useState('');

  const logout = () => {
    api.delete('/logout')
  }

  useEffect(() => {
    api.get('/login')
      .then(response => {
        console.log(response);
        console.log(response.data);

        setUserName(response.data.email);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  const token = localStorage.getItem('jwt'); // Obtém o token armazenado

  fetch('http://localhost:3000/login', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Adiciona o token no header
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro ao buscar dados', error));


  return (
    <div className='home-content'>
      <div className='home-head'>
        <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
        <h2>Olá {userName}</h2>
      </div>
      <div className='img-text'>
        <img src={ImgHome} alt="Pessoa feliz por ter logado." />
        <h3>Crie o seu primeiro sorteio agora!</h3>
      </div>
      <div className='buttons-home'>
        <ButtonAccept
          textButton='Logout'
          onClick={logout}
        />
        <ButtonAccept
          textButton="Criar"
          onClick={() => { window.location.href = '/criar' }}
        />
      </div>
    </div>
  )

}
export default Home
