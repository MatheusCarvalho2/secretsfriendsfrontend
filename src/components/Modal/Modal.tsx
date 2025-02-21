
import { ModalInterface } from '../../interface/Modal/Modal';
import './Modal.css';

const Modal = (props: ModalInterface) => {
    const { isOpen, onClose, children } = props
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;