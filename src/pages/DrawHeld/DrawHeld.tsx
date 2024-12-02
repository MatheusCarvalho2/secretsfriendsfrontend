import { RootState } from '../../store';
import ImgDrawHeld from '../../assets/images/DrawHeld.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import api from '../../server/api';
import { useSelector } from 'react-redux';

function DrawHeld() {
    const secretFriend = useSelector((state: RootState) => state.secretFriend);
    const currentDrawId = useSelector((state: RootState) => state.idDraw);

    function returnDraw() {
        console.log(secretFriend);
        window.location.href = "/email_enviado";
    }

    function showParticipants() {
        api.get(`/draws/${currentDrawId}`)
            .then(response => console.log(response.data)
            )
    }

    return (
        <div className='home-content'>
            <div className='home-head'>
                <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
            </div>
            <div className='img-text'>
                <h1 className='message-home'>Realize o Sorteio!</h1>
                <img src={ImgDrawHeld} alt="Caixa de presente aberta saindo confetes de dentro." />
            </div>
            <div className='buttons-home'>
                <ButtonAccept
                    textButton='Mostra amigos'
                    onClick={showParticipants}
                />
                <ButtonAccept
                    textButton='Sorteio'
                    onClick={returnDraw}
                />
            </div>
        </div>
    )

}
export default DrawHeld
