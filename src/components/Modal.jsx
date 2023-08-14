// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComp = ({show,setShow,children}) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>New Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalComp;