import ImgDrawSent from '../../assets/images/mark EmailRead.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import api from '../../server/api';

function DrawSent() {
    const currentDrawId = useSelector((state: RootState) => state.idDraw);

    function sendEmails() {
        const params = { id: currentDrawId }
        api.post(`/email`, params)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    window.location.href = "/emails_enviados";
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
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
