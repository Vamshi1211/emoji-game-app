// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji, emojiClicked} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onEmojiClicked = () => {
    emojiClicked(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="emoji-button" onClick={onEmojiClicked}>
        <img className="emoji-image" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
