const answerKey = require('../config/seeds/answerKey')
const { characters } = require('../config/seeds/marvel.json')

export const handleQuizSubmission = (req, res) => {
  console.log("handling Quiz Submission")
  const { body } = req
  console.dir(body)
  
  const reducer = (acc, value, ind) => {
    const { question } = value
    const userAnswer = body[ind+1]
    const correctAnswer = answerKey[ind+1]
    
    let status = {
      value: null,
      text: "Unanswered"
    }

    if (!(userAnswer === null)) {
      acc.totalAnswered +=1
    }else {
      acc.totalUnanswered +=1
    }
    
    if (userAnswer === correctAnswer){
      status = {
        value: 1,
        text: "Correct"
      }
      acc.correct +=1 
    }else{
      status = {
        value: 0,
        text: "Incorrect"
      }
      acc.incorrect +=1 
    }

    const questionObj = {
      question,
      userAnswer,
      correctAnswer,
      status
    }
    acc.questions.push(questionObj)
    return acc
  }

  const accum = {
    questions: [],
    totalAnswered: 0,
    totalUnanswered: 0,
    correct: 0,
    incorrect: 0,
  }

  const results = characters.reduce(reducer, accum)

  console.log("results for =======")
  console.dir(results)
  res.json(results)
}