import '../style/home.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import ButtonAccept from '../components/inputs/buttonaccept';

function ParticipantsList() {

  return (
    <>
      <div className='home-content'>
        <div className='register-header'>
          <Link to="/home" className='back-arrow'>
            <FaArrowLeft size={20} />
          </Link>
          <h2>Adicionar Participantes</h2>
          <Link to="/home" className='back-arrow'>
            <FaXmark size={20} />
          </Link>
        </div>
        <ButtonAccept
          textButton="Adicionar"
          onClick={() => { window.location.href = '/adicionar' }}
        />
      </div>
    </>
  )

}

export default ParticipantsList