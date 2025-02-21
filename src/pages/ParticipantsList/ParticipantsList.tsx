import './ParticipantsList.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept';
import status2Breadcrumb from '../../assets/images/status-2.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addParticipantList, removeParticipant } from '../../store/reducers/participantsList';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import api from '../../server/api';
import FormInputs from '../../components/Form/Form';

function ParticipantsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const participantsListStore = useSelector((state: RootState) => {
    return state.participantList;
  });

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

      })
      .finally(() => {
        setIsModalOpen(false)
      })
      ;
  };

  const handleFinish = () => {
    window.location.href = '/sorteio_realizado'
  };

  return (
    <>
      <div className='home-content'>
        <div className='breadcrumb'>
          <div className='register-header'>
            <Link to="/home" className='back-arrow'>
              <FaArrowLeft size={20} />
            </Link>
            <h2>Adicionar Participantes</h2>
            <Link to="/home" className='back-arrow'>
              <FaXmark size={20} />
            </Link>
          </div>
          <img src={status2Breadcrumb} alt="Etapa um de três" className='steps' />
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className='title-modal'>Informações do participante</h2>

          <form onSubmit={handleAddParticipant} className='form-modal'>
            <div className='form-inputs'>
              {formsParameters.map((formParameter, index) =>
                <FormInputs key={index} {...formParameter} />
              )}
            </div>
            <button className='button-modal' type="submit">Salvar</button>
          </form>
        </Modal>

        <div className='message'>
          {participantsListStore.length > 0 ?
            participantsListStore.map((participant, index) => (
              <div className='message-participant' key={index}>
                <h3>{index} - {participant}</h3>
                <button className='delete-button' type="button" name="delete" onClick={() => {
                  dispatch(removeParticipant(participant));
                }}>X</button>
              </div>
            )) : <h3>Você não tem nenhum partipante cadastrado</h3>}
        </div>

        <div className='buttons-list'>
          <ButtonAccept
            textButton="Adicionar"
            onClick={() => setIsModalOpen(true)}
          />
          <ButtonAccept
            textButton="Ok"
            onClick={handleFinish}
          />
        </div>
      </div>
    </>
  )

}

export default ParticipantsList