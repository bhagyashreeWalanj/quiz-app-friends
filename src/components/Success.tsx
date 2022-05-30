import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import { Questions } from '../helpers/QuestionBank'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import '../App.css'

function Success() {
  const { score, setScore, setGameState } = useContext(QuizContext)

  const handleRestartQuiz = () => {
    setScore(0)
    setGameState('menu')
  }

  return (
    <div className="EndScreen">
      <h1>Quiz Successfully Submitted!</h1>
      <IoMdCheckmarkCircleOutline className="checkmark" />
      <h1>
        {' '}
        SCORE : {score} / {Questions.length}{' '}
      </h1>
      <button className="nextBtn" onClick={() => handleRestartQuiz()}>
        Restart Quiz
      </button>
      {score > 1 ? (
        <img src="./img/chandler-joey.gif" alt="" />
      ) : (
        <img src="./img/friends-joey-tribbiani.gif" alt="" />
      )}
    </div>
  )
}

export default Success
