import ImgDrawSent from '../../assets/images/mark EmailRead.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import api from '../../server/api';
import { clearPersistedStore } from '../../store';

function DrawSentConfirmation() {
    const logout = () => {
        api.delete('/logout')
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    clearPersistedStore()
                    window.location.href = '/'
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    };

    return (
        <div className='home-content'>
            <div className='home-head'>
                <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
            </div>
            <div className='img-text'>
                <img src={ImgDrawSent} alt="Imagem de carta com uma marcação de OK." />
                <h1 className='message-home'>Emails Enviados</h1>
            </div>
            <div className='buttons-home'>
                <ButtonAccept
                    textButton='Logout'
                    onClick={logout}
                />
            </div>
        </div>
    )

}
export default DrawSentConfirmation
