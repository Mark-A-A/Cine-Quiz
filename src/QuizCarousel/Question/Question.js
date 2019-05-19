import React, { Component, Fragment } from 'react'

import "./question.scss"

export function Question({
  img: src,
  currentId,
  question,
  choices,
}){
  const [choice1, choice2, choice3] = choices

  return (
    <section className="question-section">
      <poster>
        <img src={src}/>
      </poster>
      <question>
        <h4>{question}</h4>
        <choices>
          <choice> 
            <input type="radio" name={currentId} value={choice1}/> {choice1}<br/>
          </choice>
          <choice> 
            <input type="radio" name={currentId} value={choice2}/> {choice2}<br/>
          </choice>
          <choice> 
            <input type="radio" name={currentId} value={choice3}/> {choice3}<br/>
          </choice>
        </choices>
      </question>
    </section>
  )

}