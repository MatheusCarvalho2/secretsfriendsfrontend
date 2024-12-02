import ImgDrawSent from '../../assets/images/mark EmailRead.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import api from '../../server/api';
import { clearPersistedStore, RootState } from '../../store';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';

function DrawSent() {
    const participantsList = useSelector((state: RootState) => state.participantList);
    const secretFriend = useSelector((state: RootState) => state.secretFriend);

    function sendEmails() {
        participantsList.forEach((participant: string) => {
            const templateParams = {
                replyTo: participant,
                secretFriend: secretFriend,
            };

            emailjs
                .send(
                    'service_n5qrsko',
                    'template_x3rqkit',
                    templateParams,
                    'R0ygy8ZywRVBfv0YF'
                )
                .then(() => {
                    console.log('E-mail enviado com sucesso!');
                })
                .catch((error: string) => {
                    console.error('Erro ao enviar o e-mail:', error);
                });
        });
    }

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
                <h1 className='message-home'>Envei emails!</h1>
            </div>
            <div className='buttons-home'>
                <ButtonAccept
                    textButton='Emails'
                    onClick={sendEmails}
                />
                <ButtonAccept
                    textButton='Logout'
                    onClick={logout}
                />
            </div>
        </div>
    )

}
export default DrawSent
