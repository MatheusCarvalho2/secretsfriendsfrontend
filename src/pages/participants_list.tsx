import '../style/participants_list.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import ButtonAccept from '../components/inputs/buttonaccept';
import status2Breadcrumb from '../assets/images/status-2.png'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// import api from '../server/api';

function ParticipantsList() {

  const handleModal = () => {
    window.location.href = '/adicionar'
  }

  const participantsListStore = useSelector((state: RootState) => {
    console.log(state.participant_list);
    return state.participant_list;
  });

  // const handleDrawUser = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   api.post('/draw_users',
  //     {
  //       "owner": true,
  //       "suggestion": '',
  //       "user_id": "user.id", //store
  //       "draw_id": "draw.id", //store
  //     },
  //   )
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Erro:", error);
  //     });
  // };

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
        <div className='mensagem'>
          {participantsListStore ? <h3>Tem coisa</h3> : <h3>Você não tem nenum partipante cadastrado</h3>}
        </div>
        <ButtonAccept
          textButton="Adicionar"
          onClick={handleModal}
        />
      </div>
    </>
  )

}

export default ParticipantsList