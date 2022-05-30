import React, { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Success from './components/Success'

import { QuizContext } from './helpers/Context'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === 'menu' && <Menu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'success' && <Success />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
