import ImgHome from '../assets/images/ImgHome.png'
import LogoImage from '../assets/images/Logo.svg'
import ButtonAccept from '../components/inputs/buttonaccept'
import '../style/home.css'

function Home() {

  return (
    <div className='home-content'>
      <div className='home-head'>
        <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
        <h2>Olá Pessoa</h2>
      </div>
      <div className='img-text'>
        <img src={ImgHome} alt="Pessoa feliz por ter logado." />
        <h3>Crie o seu primeiro sorteio agora!</h3>
      </div>
      <ButtonAccept
        textButton="Criar"
        onClick={() => { window.location.href = '/criar' }}
      />
    </div>
  )

}
export default Home
