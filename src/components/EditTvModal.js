import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditTvForm from './EditTvForm';

// Modal that pops up center of screen when edit button is clicked
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton className='edit-modal-header'>
        <Modal.Title id='contained-modal-title-vcenter '>
          EDIT TV FORM{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditTvForm />
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center align-items-center'>
        <Button
          className='w-50 fs-4'
          onClick={props.onHide}
          variant='danger'
          type='submit'
        >
         SAVE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

// Button to activate the edit modal the tv show selected
export function EditButton() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant='success' onClick={() => setModalShow(true)}>
        Edit{' '}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
