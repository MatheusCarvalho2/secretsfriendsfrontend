import { Link, useSearchParams } from "react-router-dom"
import FormInputs from "../../components/Form/Form";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import api from "../../server/api";

const NewPassword = () => {
    const [searchToken] = useSearchParams();
    const token = searchToken.get('reset_password_token')

    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const formsParameters = [
        {
            labelForInput: 'Senha',
            placeholderInput: 'Digite sua senha',
            typeInput: 'password',
            setInputValue: setPassword,
            inputName: 'senha',
            inputId: 'senha-input'
        },
        {
            labelForInput: 'Confirme sua senha',
            placeholderInput: 'Confirme sua senha',
            typeInput: 'password',
            setInputValue: setPasswordConfirmation,
            inputName: 'confirmacao-senha',
            inputId: 'confirmacao-senha-input'
        },
    ];

    const handlePasswordReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        api.patch('/password', {
            user: {
                reset_password_token: token,
                password: password,
                password_confirmation: passwordConfirmation,
            },
        })
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    window.location.href = '/informacao_senha';
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    };

    return (
        <>
            <div className='home-content'>
                <div className='register-header'>
                    <Link to="/" className='back-arrow'>
                        <FaArrowLeft size={20} />
                    </Link>
                    <h2>Redefinir senha</h2>
                    <Link to="/" className='back-arrow'>
                        <FaXmark size={20} />
                    </Link>
                </div>
                <form onSubmit={handlePasswordReset} className='form'>
                    <div className='form-inputs'>
                        {formsParameters.map((formParameter, index) =>
                            <FormInputs key={index} {...formParameter} />
                        )}
                    </div>
                    <button className='default-button' type="submit">Redefinir Senha</button>
                </form>
            </div>
        </>
    )
}
export default NewPassword