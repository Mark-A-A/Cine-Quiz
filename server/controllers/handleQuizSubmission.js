const answerKey = require('../config/seeds/answerKey')
const { characters } = require('../config/seeds/marvel.json')

export const handleQuizSubmission = (req, res) => {
  const { body } = req

  const reducer = (acc, value, ind) => {
    const { question } = value
    const userAnswer = body[ind+1]
    const correctAnswer = answerKey[ind+1]
    
    if (!(userAnswer === null)) acc.totalAnswered +=1
    
    if (userAnswer === correctAnswer){
      acc.correct +=1 
    }else{
      acc.incorrect +=1 
    }

    const questionObj = {
      question,
      userAnswer,
      correctAnswer
    }
    acc.questions.push(questionObj)
    return acc
  }

  const accum = {
    questions: [],
    totalAnswered: 0,
    correct: 0,
    incorrect: 0,
  }

  const results = characters.reduce(reducer, accum)

  console.log("handleQuizSubmission =======")
  console.dir(results)
  res.json(results)
}