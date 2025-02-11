import { useSelector } from "react-redux";
import { RootState } from '../../store';
import ButtonAccept from "../../components/ButtonAccept/ButtonAccept";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import './ResetPasswordInfo.css'

const ResetPasswordInfo = () => {

    const emailResetPassword = useSelector((state: RootState) => {
        return state.emailResetPassword;
    });

    return (

        <div className='home-content'>
            <div className='info-header'>
                <Link to="/" className='back-arrow'>
                    <FaArrowLeft size={20} />
                </Link>
                <Link to="/" className='back-arrow'>
                    <FaXmark size={20} />
                </Link>
            </div>
            <div className="message-info">
                <h3 className="sucess">
                    Solicitação enviada com sucesso!
                </h3>
                <p>
                    Verifique sua caixa de entrada do email {emailResetPassword}.
                </p>
            </div>

            <div className='buttons-list'>
                <ButtonAccept
                    textButton="Voltar"
                    onClick={() => { window.location.href = '/' }}
                />
            </div>
        </div >
    )
}
export default ResetPasswordInfo