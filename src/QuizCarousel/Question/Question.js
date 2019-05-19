import React, { Component, Fragment } from 'react'

import "./question.scss"

export function Question ({character}) {


  return (
    <section className="question-section">
      Hello {character.hero}
    </section>
  )

}