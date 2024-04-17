// Write your code here.
import './index.css'

const NavBar = props => {
  const {setTopScore, score, playAgainValue} = props

  return (
    <div className="navbar-bg-container">
      <div className="navbar-container">
        <div className="emoji-container">
          <img
            className="navbar-icon"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        {setTopScore === 0 || playAgainValue ? (
          <div className="score-card">
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score:{setTopScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default NavBar
