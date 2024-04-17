// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {playAgain, totalScore} = props

  //   console.log(playAgainValue)

  const playAgainClicked = () => {
    playAgain()
  }

  return (
    <div className="win-lose-bg-container">
      {totalScore < 12 ? (
        <div className="win-or-lose-container">
          <img
            className="lose-image"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          />
          <div className="result-container">
            <h1 className="result-heading">You Lose</h1>
            <p className="best-score">Score</p>
            <p className="score-value">{`${totalScore}/12`}</p>
            <button
              type="button"
              className="play-again-button"
              onClick={playAgainClicked}
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div className="win-or-lose-container">
          <img
            className="lose-image"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
          <div className="result-container">
            <h1 className="result-heading">You Won</h1>
            <p className="best-score">Best Score</p>
            <p className="score-value">{`${totalScore}/12`}</p>
            <button
              type="button"
              className="play-again-button"
              onClick={playAgainClicked}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
