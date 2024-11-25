import { clearPersistedStore, RootState } from '../../store';
import ImgDrawHeld from '../../assets/images/DrawHeld.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import api from '../../server/api';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';

function DrawHeld() {
    const participantsList = useSelector((state: RootState) => state.participantList);
    const secretFriend = useSelector((state: RootState) => state.secretFriend);
    // const currentDrawId = useSelector((state: RootState) => state.idDraw);

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

    // function teste() {
    //     api.get(`/draws/${currentDrawId}`)
    //         .then(response => console.log(response.data)
    //         )
    // }

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
                <h1 className='message-home'>Sorteio Realizado!</h1>
                <img src={ImgDrawHeld} alt="Caixa de presente aberta saindo confetes de dentro." />
            </div>
            <div className='buttons-home'>
                <ButtonAccept
                    textButton='Sorteios'
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
export default DrawHeld
