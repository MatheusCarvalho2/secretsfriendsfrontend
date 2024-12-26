import ImgDrawSent from '../../assets/images/mark EmailRead.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'

function DrawSent() {
    function sendEmails() {
        console.log("Fazer a rota para back enviar emails")
        window.location.href = '/emails_enviados'
    }

    return (
        <div className='home-content'>
            <div className='home-head'>
                <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
            </div>
            <div className='img-text'>
                <img src={ImgDrawSent} alt="Imagem de carta com uma marcação de OK." />
                <h1 className='message-home'>Enviar Emails?</h1>
            </div>
            <div className='buttons-home'>
                <ButtonAccept
                    textButton='Enviar'
                    onClick={sendEmails}
                />
            </div>
        </div>
    )

}
export default DrawSent
