import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom"
import FormInputs from "../../components/Form/Form";
import ButtonAccept from "../../components/ButtonAccept/ButtonAccept";
import api from "../../server/api";
import { useDispatch } from "react-redux";
import { setEmailResetPasswordStore } from "../../store/reducers/emailResetPassword";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
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
        setLoading(true);

        const data = {
            user: { email: email },
        };

        api.post(`/password`, data)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    dispatch(setEmailResetPasswordStore(data.user.email));
                    window.location.href = "/informacao";
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
        <div className='breadcrumb'>
            <div className='breadcrumb-header'>
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

            {!loading && <div className="message-info">
                <p><strong>Esqueceu sua senha?</strong></p>
                <p>Após inserir seu email,você será direcionado para sua caixa de entrada um link para redefinição de senha!
                </p>
            </div>}

            {loading && <div className="message-info">
                <p><strong>Enviando...</strong></p>
            </div>}

            <div className='buttons-list'>
                <ButtonAccept
                    textButton={loading ? "Enviando..." : "Enviar Email"}
                    onClick={sendEmail}
                    disabled={loading}
                />
            </div>
        </div>
    )
}

export default ResetPassword