import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from 'reactstrap';

import "./ResultsModal.scss"

export function ResultsModal({
  results,
  modalOpen,
  toggle,
  handleResetQuiz
}) {
  const {
    correct,
    incorrect,
    questions,
    totalAnswered,
    totalUnanswered,
  } = results
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className="submit-modal" backdrop={true} size={'lg'}>
        <ModalHeader toggle={toggle}>Results</ModalHeader>
        <ModalBody>
        <div className="results-tables">
          <section className="summary-table">
            <Table size="sm">
              <thead>
                <tr>
                  <th>Total Answered</th>
                  <th>Total Unanswered</th>
                  <th>Correct Answers</th>
                  <th>Incorrect Answers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{totalAnswered}</td>
                  <td>{totalUnanswered}</td>
                  <td>{correct}</td>
                  <td>{incorrect}</td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className="questions-answers-table">
            <Table size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Question</th>
                  <th>Correct Answer</th>
                  <th>Your Answer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {buildRows(questions)}
              </tbody>
            </Table>
          </section>
        </div>
        </ModalBody>
        <ModalFooter toggle={toggle}>
          <h6>Would you like to try again?</h6>
          <Button color="success" onClick={handleResetQuiz}>Yes</Button>
          <Button color="danger" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

function buildRows(quizResults){
  return quizResults.map((currentQuestion,i) => {
    const {
      question,
      userAnswer,
      correctAnswer,
      status: {
        value,
        text: statusText
      }
    } = currentQuestion

    return (
      <tr key={`question_${i}`}>
        <td>{i+1}</td>
        <td>{question}</td>
        <td>{correctAnswer}</td>
        <td>{userAnswer}</td>
        <td className={`status-${value}`}>{statusText}</td>
      </tr>
    )
  })


}