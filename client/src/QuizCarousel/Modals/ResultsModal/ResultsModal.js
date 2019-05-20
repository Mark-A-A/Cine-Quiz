import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import "./ResultsModal.scss"

export function ResultsModal({ modalOpen, toggle, handleResetQuiz }) {
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className="submit-modal" backdrop={true}>
        <ModalHeader toggle={toggle}>Results</ModalHeader>
        <ModalBody>
         Table Here
        </ModalBody>
        <ModalFooter toggle={toggle}>
          <h2>Would you like to try again?</h2>
          <Button color="success" onClick={handleResetQuiz}>Yes</Button>
          <Button color="danger" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}