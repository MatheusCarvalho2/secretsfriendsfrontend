import { RootState } from '../store';
import ImgHome from '../assets/images/ImgHome.png'
import LogoImage from '../assets/images/Logo.svg'
import ButtonAccept from '../components/inputs/buttonAccept'
import api from '../server/api';
import '../style/home.css'
import { useSelector } from 'react-redux';

function Home() {
  const logout = () => {
    api.delete('/logout')
  };

  const currentName = useSelector((state: RootState) => {
    return state.name;
  });

  return (
    <div className='home-content'>
      <div className='home-head'>
        <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
        <h2>Olá {currentName ? currentName : 'Amigo'}</h2>
      </div>
      <div className='img-text'>
        <img src={ImgHome} alt="Caixa de presente brana com uma fita azul." />
        <h3 className='message-home'>Crie o seu primeiro sorteio agora!</h3>
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
