
import React, { Component } from 'react'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import "./navigation.scss"
export class Navigation extends Component {
  constructor(props){
    super(props)

    this.state = {
      skip: 0
    }
  }

  MAX_ITEMS_TO_RENDER = 20

  handleNavButtonClick = (val) => {
    const { characters } = this.props
    let { skip } = this.state

    if (
      skip >= 0 &&
      skip <= characters.length - this.MAX_ITEMS_TO_RENDER
    ){
      this.setState({
        skip: skip += val
      })
    }
  }

  getButtonsToRender = ()=>{
    const {
      characters,
      currentId,
      handleClick
    } = this.props
  
    const {skip} = this.state
  
    return characters.map((character, i)=>{
      const value = i+1
      if ( (currentId === i+1)){
        return (
          <button
           
            className={"active"}
            key={`character_${value}`}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        )
      } else if (i >= skip && i < this.MAX_ITEMS_TO_RENDER + skip) {
        return (
          <button 
            key={`character_${value}`}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        )
      } else {
        return null
      }
    })
  }
  
  render() {
    const {
      characters,
      currentId,
      handleClick
    } = this.props

    const { skip } = this.state
    return (
      <div className="navigation-wrapper">
        <button
          className="nav-button left"
          onClick={() => this.handleNavButtonClick(-1)}
          disabled={skip <= 0}
        >
          <FaArrowLeft />
        </button>
        { 
          this.getButtonsToRender()
        }
        <button 
          disabled={skip+this.MAX_ITEMS_TO_RENDER >= characters.length}
          className="nav-button right"
          onClick={() => this.handleNavButtonClick(1)}
        >
          <FaArrowRight/>
        </button>

      </div>
    )
  }
}