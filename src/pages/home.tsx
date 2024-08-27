import ImgHome from '../assets/images/ImgHome.png'
import LogoImage from '../assets/images/Logo.svg'
import './home.css'

function Home() {
  return (
    <>
      <div className='home-head'>
        <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
        <h2>Olá Pessoa</h2>
      </div>
      <div className='img-text'>
        <img src={ImgHome} alt="Pessoa feliz por ter logado." />
        <h3>Crie o seu primeiro sorteio agora!</h3>
      </div>
    </>
  )

}
export default Home
