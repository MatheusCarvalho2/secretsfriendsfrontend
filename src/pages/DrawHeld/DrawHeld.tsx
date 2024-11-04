import ImgDrawHeld from '../../assets/images/DrawHeld.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import api from '../../server/api';
// import '../drawHeld.css'

function DrawHeld() {
    const logout = () => {
        api.delete('/logout')
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    console.log(response);

                    window.location.href = '/home'
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
                    textButton='Logout'
                    onClick={logout}
                />
            </div>
        </div>
    )

}
export default DrawHeld
