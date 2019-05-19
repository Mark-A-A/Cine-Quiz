/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import "./SubmitModal.scss"

export function SubmitModal({modalOpen, toggle}) {
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className="submit-modal" backdrop={false}>
        <ModalHeader toggle={toggle}>Are you ready to submit your quiz?</ModalHeader>
        <ModalBody>
          <Button color="success" onClick={toggle}>Yes</Button>
          <Button color="danger" onClick={toggle}>No</Button>
        </ModalBody>
      </Modal>
    </div>
  );
}