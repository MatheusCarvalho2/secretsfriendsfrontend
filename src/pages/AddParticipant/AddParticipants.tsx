import './AddParticipants.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import FormInputs from '../../components/Form/Form';
import { useState } from 'react';
import api from '../../server/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addParticipantList } from '../../store/reducers/participantsList';

function AddParticipant() {
  const [emailAddParticipant, setEmailAddParticipant] = useState<string>('');
  const formsParameters = [
    {
      labelForInput: 'Email',
      placeholderInput: 'Ex: email@email.com',
      typeInput: 'email',
      setInputValue: setEmailAddParticipant,
      inputName: 'email',
      inputId: 'email-input'
    }
  ];

  const dispatch = useDispatch();

  const currentDrawId = useSelector((state: RootState) => {
    return state.idDraw;
  });

  const handleAddParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.post('/participants', {
      name: '',
      email: emailAddParticipant,
      draw_id: currentDrawId
    })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          dispatch(addParticipantList(emailAddParticipant));
          window.location.href = '/lista'
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
          <Link to="/lista" className='back-arrow'>
            <FaArrowLeft size={20} />
          </Link>
          <h2>Informações do participante</h2>
          <Link to="/home" className='back-arrow'>
            <FaXmark size={20} />
          </Link>
        </div>
        <form onSubmit={handleAddParticipant} className='form'>
          <div className='form-inputs'>
            {formsParameters.map((formParameter, index) =>
              <FormInputs key={index} {...formParameter} />
            )}
          </div>
          <button className='default-button' type="submit">Salvar</button>
        </form>
      </div>
    </>
  )

}

export default AddParticipant