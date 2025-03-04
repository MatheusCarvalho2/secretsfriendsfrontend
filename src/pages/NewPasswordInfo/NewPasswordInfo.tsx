import ButtonAccept from "../../components/ButtonAccept/ButtonAccept";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NewPasswordInfo = () => {
    return (

        <div className='breadcrumb'>
            <div className='breadcrumb-header'>
                <Link to="/" className='back-arrow'>
                    <FaArrowLeft size={20} />
                </Link>
                <Link to="/" className='back-arrow'>
                    <FaXmark size={20} />
                </Link>
            </div>
            <div className="message-info">
                <h3 className="sucess">
                    Senha redefinida com sucesso!
                </h3>
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
export default NewPasswordInfo