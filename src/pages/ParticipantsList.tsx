import '../style/participants_list.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import ButtonAccept from '../components/inputs/buttonAccept';
import status2Breadcrumb from '../assets/images/status-2.png'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import api from '../server/api';

function ParticipantsList() {

  const handleModal = () => {
    window.location.href = '/adicionar'
  }

  const participantsListStore = useSelector((state: RootState) => {
    return state.participantList;
  });

  const currentDrawId = useSelector((state: RootState) => {
    return state.idDraw;
  });

  const currentUserId = useSelector((state: RootState) => {
    return state.idUser;
  })

  const handleFinish = () => {
    api.post('/draw_users',
      {
        "owner": true,
        "suggestion": '',
        "user_id": currentUserId,
        "draw_id": currentDrawId,
      },
    )
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          window.location.href = '/sorteio_realizado'
        }
      })
      .catch(error => {
        console.error("Erro:", error);
      });
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
        <div className='message'>
          {participantsListStore.length > 0 ?
            participantsListStore.map((participant, index) => (
              <div className='message-participant' key={index}>
                <h3>{index} - {participant}</h3>
              </div>
            )) : <h3>Você não tem nenhum partipante cadastrado</h3>}
        </div>
        <div className='buttons-list'>
          <ButtonAccept
            textButton="Adicionar"
            onClick={handleModal}
          />
          <ButtonAccept
            textButton="Finalizar"
            onClick={handleFinish}
          />
        </div>
      </div>
    </>
  )

}

export default ParticipantsList