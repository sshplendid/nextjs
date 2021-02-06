import { MBTI } from "../mbti"

interface OwnProps {
  question: string
  leftAnswer: string
  rightAnswer: string
  onClickAnswer: (type: MBTI) => (b: boolean) => void
  type: MBTI
}

export default ({question, leftAnswer, rightAnswer, type, onClickAnswer}: OwnProps) => {
  return (
    <div>
      <h3>{question}</h3>
      <div>
        <button onClick={() => onClickAnswer(type)(true)}>{leftAnswer}</button>
        <button onClick={() => onClickAnswer(type)(false)}>{rightAnswer}</button>
      </div>
      
    </div>
  )
}