import React, {Component} from 'react';

import { FaRegCopyright } from 'react-icons/fa';
import { QuizCarousel } from './QuizCarousel'

import { API } from './utils'

import './App.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      fetching: true
    })
    this.fetchAllCharacters()
  }

  fetchAllCharacters = () => {
    API.getAllCharacters()
      .then((response) => {
        this.setState({
          fetching:false,
          characters: response.data
        });
      }).catch((e) => {
        this.setState({
          fetching: false,
          error: e
        });
      })
  }

  render(){
    const {
      fetching,
      characters
    } = this.state

    return (
      <div className="App">
        <h1><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg" /><FaRegCopyright/> CineQuiz</h1>
        
        {
           fetching || !characters
           ? <div>Loading</div>
           : <QuizCarousel characters={characters}/>
        }
        <p>Created by Mark A.</p>
      </div>
    );
  }
}

export default App;
