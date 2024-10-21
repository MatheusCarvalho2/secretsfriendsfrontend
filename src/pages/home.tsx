/* eslint-disable @typescript-eslint/no-explicit-any */
import ImgHome from '../assets/images/ImgHome.png'
import LogoImage from '../assets/images/Logo.svg'
import ButtonAccept from '../components/inputs/buttonaccept'
import '../style/home.css'
// import { useEffect, useState } from 'react';
import api from '../server/api';
import { useSelector } from 'react-redux';

function Home() {
  const logout = () => {
    api.delete('/logout')
  };

  const currentName = useSelector((state: any) => {
    console.log(state.name);
    return state.name;
  });

  console.log(currentName);

  // const name = localStorage.getItem('name');

  // const [userName, setUserName] = useState('');
  // useEffect(() => {
  //   api.get('/login')
  //     .then(response => {
  //       console.log(response);
  //       console.log(response.data.name);

  //       setUserName(response.data.email);
  //     })
  //     .catch(error => {
  //       console.error("Error:", error);
  //     });
  // }, []);


  return (
    <div className='home-content'>
      <div className='home-head'>
        <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
        <h2>Olá {currentName}</h2>
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
