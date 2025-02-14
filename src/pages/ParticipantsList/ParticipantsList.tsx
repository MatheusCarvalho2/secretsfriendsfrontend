import './ParticipantsList.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import ButtonAccept from '../../components/ButtonAccept/ButtonAccept';
import status2Breadcrumb from '../../assets/images/status-2.png'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { removeParticipant } from '../../store/reducers/participantsList';

function ParticipantsList() {

  const handleModal = () => {
    window.location.href = '/adicionar'
  }

  const participantsListStore = useSelector((state: RootState) => {
    return state.participantList;
  });

  const handleFinish = () => {
    window.location.href = '/sorteio_realizado'
  };

  const dispatch = useDispatch();


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
            onClick={handleModal}
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