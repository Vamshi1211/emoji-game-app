import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    score: 0,
    initialTopScore: 0,
    topScore: [],
    isPlayAgain: false,
  }

  onClickPlayAgain = () => {
    const {topScore} = this.state
    this.setState(previousState => ({
      isPlayAgain: !previousState.isPlayAgain,
      score: 0,
      clickedEmojisList: [],
      topScore: [],
      initialTopScore: Math.max(topScore),
    }))
  }

  finishGameAndSetTopScore = emojisLength => {
    this.setState(previousState => ({
      topScore: [...previousState.topScore, emojisLength],
      initialTopScore: previousState.initialTopScore + emojisLength,
      isPlayAgain: false,
    }))
  }

  clickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojisList} = this.state

    // console.log(clickedEmojisList)

    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
        score: previousState.score + 1,
      }))
    }
  }

  render() {
    const {score, isPlayAgain, initialTopScore, clickedEmojisList} = this.state
    // console.log(clickedEmojisList)
    console.log(clickedEmojisList)

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="background-container">
        <NavBar
          setTopScore={initialTopScore}
          score={score}
          playAgainValue={isPlayAgain}
          topScoreValue={initialTopScore}
        />

        {initialTopScore !== 0 && isPlayAgain === false ? (
          <WinOrLoseCard
            totalScore={score}
            playAgain={this.onClickPlayAgain}
            playAgainValue={isPlayAgain}
            topScoreValue={initialTopScore}
          />
        ) : (
          <ul className="emoji-card-container">
            {shuffledEmojisList().map(eachEmojiItem => (
              <EmojiCard
                key={eachEmojiItem.id}
                eachEmoji={eachEmojiItem}
                emojiClicked={this.clickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
