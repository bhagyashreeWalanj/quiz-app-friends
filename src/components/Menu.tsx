import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import '../App.css'
import Logo from './Logo'

function Menu() {
  const { setGameState } = useContext(QuizContext)

  return (
    <div className="Menu">
      <div className="menuGrid-1">
        <img
          src="./img/turkey.png"
          alt="turkey"
          style={{ marginTop: '4rem', marginLeft: '5rem' }}
        />
        <img src="./img/friends-quote.png" alt="turkey" />
      </div>
      <div>
        <Logo />
        <img src="./img/couch.png" alt="" style={{ width: '25rem' }} />

        <button className="startQuizBtn" onClick={() => setGameState('quiz')}>
          Take A Quiz
        </button>
        <h2 className="headertitle" style={{ fontSize: '1rem' }}>
          I'LL <label className="dot1">.</label> BE{' '}
          <label className="dot2">.</label>
          THERE <label className="dot3">.</label>FOR{' '}
          <label className="dot1">.</label>YOU
        </h2>
      </div>
      <div className="menuGrid-3">
        <img
          src="./img/howYouDoin.png"
          alt="howYouDoin"
          style={{ marginTop: '8rem' }}
        />
        <img
          src="./img/doorframe.png"
          alt="door-frame"
          style={{ marginTop: '8rem', width: '10rem' }}
        />
      </div>
    </div>
  )
}

export default Menu
