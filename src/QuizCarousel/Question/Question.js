import React from 'react'

import "./question.scss"

export function Question({
  currentId,
  character,
  img: src,
  question,
  choices,
  userAnswer,
  handleAnswer
}){
  const [choice1, choice2, choice3] = choices

  const onChooseAnswer = (e) => {
    const { value } =(e.target);
    handleAnswer(currentId, value)
  } 
  
  return (
    <section className="question-section">
      <div className="poster">
        <img src={src} alt={character}/>
      </div>
      <div className="question">
        <h4>{question}</h4>
        <ul className="answer-choices">
          <li className="choice">
            <input type="radio" name={currentId} value={choice1} onChange={onChooseAnswer} checked={userAnswer === choice1 }/> {choice1}<br/>
          </li>
          <li className="choice">
            <input type="radio" name={currentId} value={choice2} onChange={onChooseAnswer} checked={userAnswer === choice2} /> {choice2}<br/>
          </li>
          <li className="choice">
            <input type="radio" name={currentId} value={choice3} onChange={onChooseAnswer} checked={userAnswer === choice3} /> {choice3}<br/>
          </li>
        </ul>
      </div>
    </section>
  )

}