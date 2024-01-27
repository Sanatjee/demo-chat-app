import { Button } from "bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const LoginModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Join the chat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Name' />
          </Form.Group>
          <button className='btn btn-success'>Join now</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
