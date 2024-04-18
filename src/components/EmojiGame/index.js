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
    topScore: 0,
    isPlayAgain: false,
  }

  onClickPlayAgain = () => {
    this.setState(previousState => ({
      isPlayAgain: !previousState.isPlayAgain,
      score: 0,
      clickedEmojisList: [],
    }))
  }

  finishGameAndSetTopScore = emojisLength => {
    const initialTopScore = emojisLength
    const {topScore} = this.state
    let topMostScore

    if (initialTopScore > topScore) {
      topMostScore = initialTopScore
    } else {
      topMostScore = topScore
    }

    this.setState(() => ({
      topScore: topMostScore,
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
    const {score, isPlayAgain, topScore} = this.state
    // console.log(clickedEmojisList)
    // console.log(clickedEmojisList)
    console.log(topScore)

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="background-container">
        <NavBar
          setTopScore={topScore}
          score={score}
          playAgainValue={isPlayAgain}
        />

        {topScore !== 0 && isPlayAgain === false ? (
          <WinOrLoseCard
            totalScore={score}
            playAgain={this.onClickPlayAgain}
            playAgainValue={isPlayAgain}
            topScoreValue={topScore}
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
