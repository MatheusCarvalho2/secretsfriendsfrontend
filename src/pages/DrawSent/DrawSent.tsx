import ImgDrawSent from '../../assets/images/mark EmailRead.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'

function DrawSent() {

    return (
        <div className='home-content'>
            <div className='home-head'>
                <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
            </div>
            <div className='img-text'>
                <img src={ImgDrawSent} alt="Imagem de carta com uma marcação de OK." />
                <h1 className='message-home'>Emails enviados!</h1>
            </div>
            <div className='buttons-home'>
                <ButtonAccept
                    textButton='OK'
                    onClick={() => { window.location.href = "/sorteio_realizado" }}
                />
            </div>
        </div>
    )

}
export default DrawSent
