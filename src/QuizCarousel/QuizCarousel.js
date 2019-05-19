
import React, { Component, Fragment } from 'react'

import { Navigation } from "./Navigation"

import characters from './marvel.json'

import "./carousel.scss"

export class QuizCarousel extends Component {
  state = {
    currentId: 1,
    characters: characters,
  }
  
  handleMainArrowClick = (val) => {
    const {
      currentId,
      characters
    } = this.state
    
    const nextValue = currentId + val
    
    this.setState({
      currentId: nextValue
    })
  }

  setCharacter=(id)=>{

    console.log("setting character =>", id)
    this.setState({
      currentId: id
    })
  }
  
  render() {
    const {
      currentId,
      characters,
      // currentCharacter
    } = this.state
    const currentCharacter = characters[currentId - 1]

    return (
      <div className="quiz-carousel">
        <div className="arrow-button-wrapper left">
          <button disabled={currentId === 1} onClick={() => this.handleMainArrowClick(-1)}>
            <img className="arrow-button-left" src="./assets/arrow.png" />
          </button>
        </div>
        <div className="quiz-body">
          <Navigation currentId={currentId} characters={characters} handleClick={this.setCharacter} />
          currentCharacter && <Question characters={characters} />
          

        </div>
        <div className="arrow-button-wrapper right">
          <button disabled={currentId === characters.length} onClick={() => this.handleMainArrowClick(1)}>
            <img className="arrow-button-right" src="./assets/arrow.png" />
          </button>
        </div>
      </div>
    )
  }
}