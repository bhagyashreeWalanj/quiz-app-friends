import React, { useState, useContext } from 'react'
import { Questions } from '../helpers/QuestionBank'
import { QuizContext } from '../helpers/Context'
import Logo from './Logo'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState('')
  const [error, setError] = useState('')
  const [colorChange, setColorChange] = useState('')
  const { score, setScore, setGameState } = useContext(QuizContext)

  // a method to set answer and show is answer correct or not
  const handleOption = (option: string) => {
    setError('')
    setOptionChosen(option)
    if (Questions[currentQuestion].answer === option) {
      setColorChange('correctAnswer')
    } else {
      setColorChange('selectedOption')
    }
  }

  // a common method to handle onclick option button
  const handleOptionData = (callbackFn: () => void) => {
    if (optionChosen === '') {
      setError('Please select option')
      return
    } else {
      if (Questions[currentQuestion].answer === optionChosen) {
        setScore(score + 1)
      }
      setError('')
      setOptionChosen('')
      callbackFn()
    }
  }

  // handle next question button
  const handleNextQuestion = () => {
    handleOptionData(() => {
      setCurrentQuestion(currentQuestion + 1)
    })
  }

  // handle Finish button
  const handleFinishQuiz = () => {
    handleOptionData(() => {
      setGameState('success')
    })
  }

  return (
    <div className="QuizContainer">
      <button className="homeBtn" onClick={() => setGameState('menu')}>
        Home
      </button>
      <div className="Quiz">
        <div>
          <img src="./img/friends-grp.png" alt="" className="friends-logo" />
          <Logo />
        </div>
        <div className="options">
          <h3>Question No. {currentQuestion + 1}</h3>
          <h1>{Questions[currentQuestion].prompt}</h1>
          <span className="errorSpan">{error ? error : ''}</span>

          <button
            onClick={() => handleOption('A')}
            className={optionChosen === 'A' ? colorChange : 'optionButton'}
          >
            {Questions[currentQuestion].optionA}
          </button>
          <button
            onClick={() => handleOption('B')}
            className={optionChosen === 'B' ? colorChange : 'optionButton'}
          >
            {Questions[currentQuestion].optionB}
          </button>
          <button
            onClick={() => handleOption('C')}
            className={optionChosen === 'C' ? colorChange : 'optionButton'}
          >
            {Questions[currentQuestion].optionC}
          </button>
          <button
            onClick={() => handleOption('D')}
            className={optionChosen === 'D' ? colorChange : 'optionButton'}
          >
            {Questions[currentQuestion].optionD}
          </button>
          {currentQuestion === Questions.length - 1 ? (
            <button onClick={handleFinishQuiz} className="nextBtn">
              Finish Quiz
            </button>
          ) : (
            <button onClick={() => handleNextQuestion()} className="nextBtn">
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
