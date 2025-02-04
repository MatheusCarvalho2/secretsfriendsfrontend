import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom"
import FormInputs from "../../components/Form/Form";
import ButtonAccept from "../../components/ButtonAccept/ButtonAccept";
import api from "../../server/api";
import "./ResetPassword.css";

const ResetPassword = () => {
    const [email, setEmail] = useState<string>("");

    const createInput = [
        {
            labelForInput: "Email",
            placeholderInput: "Digite seu email",
            typeInput: "email",
            setInputValue: setEmail,
            inputName: 'email',
            inputId: 'email-input'
        },
    ];

    function sendEmail() {
        const data = {
            user: { email: email },
        };
        api.post(`/password`, data)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    window.location.href = "/informacao";
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    }

    return (
        <div className='home-content'>
            <div className='register-header'>
                <Link to="/" className='back-arrow'>
                    <FaArrowLeft size={20} />
                </Link>
                <h2>Esqueci minha senha</h2>
                <Link to="/" className='back-arrow'>
                    <FaXmark size={20} />
                </Link>
            </div>

            <div className="input-content">
                {createInput.map((input, index) => (
                    <FormInputs key={index} {...input} />
                ))}
            </div>

            <div className="message-info">
                <p><strong>Esqueceu sua senha?</strong></p>
                <p>Após inserir seu email,você será direcionado para sua caixa de entrada um link para redefinição de senha!
                </p>
            </div>

            <div className='buttons-list'>
                <ButtonAccept
                    textButton="Enviar Email"
                    onClick={sendEmail}
                />
            </div>
        </div>
    )
}

export default ResetPassword