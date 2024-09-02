import '../style/home.css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

function AddParticipant() {

  return (
    <>
      <div className='home-content'>
        <div className='register-header'>
          <Link to="/lista" className='back-arrow'>
            <FaArrowLeft size={20} />
          </Link>
          <h2>Modal</h2>
          <Link to="/home" className='back-arrow'>
            <FaXmark size={20} />
          </Link>
        </div>
      </div>
    </>
  )

}

export default AddParticipant