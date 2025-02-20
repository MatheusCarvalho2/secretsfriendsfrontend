import ImgDrawSent from '../../assets/images/mark EmailRead.png'
import LogoImage from '../../assets/images/Logo.svg'
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import api from '../../server/api';
import { useState } from 'react';

function DrawSent() {
    const currentDrawId = useSelector((state: RootState) => state.idDraw);
    const [loading, setLoading] = useState(false)

    function sendEmails() {
        setLoading(true);

        const params = { id: currentDrawId }
        api.post(`/email`, params)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    window.location.href = "/emails_enviados";
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    return (
        <div className='home-content'>
            <div className='home-head'>
                <img className="logo" src={LogoImage} alt="Logo do Secrets Friends" />
            </div>
            {!loading && <div className='img-text'>
                <img src={ImgDrawSent} alt="Imagem de carta com uma marcação de OK." />
                <h1 className='message-home'>Enviar Emails?</h1>
            </div>}

            {loading && <div className='img-text'>
                <img src={ImgDrawSent} alt="Imagem de carta com uma marcação de OK." />
                <h1 className='message-home'>Enviando...</h1>
            </div>}

            <div className='buttons-home'>
                <ButtonAccept
                    textButton={loading ? "Enviando..." : "Enviar"}
                    onClick={sendEmails}
                    disabled={loading}
                />
            </div>
        </div>
    )

}
export default DrawSent
