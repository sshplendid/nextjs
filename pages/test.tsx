import { useState } from "react"
import Link from 'next/link'
import Question from "../components/Question"
import { MBTI } from "../mbti"

interface OwnProps {
  
}

export default () => {
  const [phase, setPhase] = useState<number>(0)
  const [ei, setEi] = useState<number>(0)
  const [sn, setSn] = useState<number>(0)
  const [tf, setTf] = useState<number>(0)
  const [jp, setJp] = useState<number>(0)

  const handleMbti = (type: MBTI) => (isLeft: boolean) => {
    const getHandler = (): [number, (n: number) => void] =>  {
      switch (type) {
        case MBTI.EI: 
        return [ei,  setEi]
        case MBTI.SN:
        return [sn, setSn]
        case MBTI.TF:
        return [tf, setTf];
        case MBTI.JP:
        return [jp, setJp]
      }
    }
    
    const [score, handler] = getHandler()
    isLeft?handler(score+1):handler(score-1)
    setPhase(phase+1)
  }

  return (
    <div>
      <h4>
      {phase} 번 문항
      </h4>
      <span>
      {ei}, {sn}, {tf}, {jp}
      </span>
      {phase < questions.length ? (
        <Question 
          {...questions[phase]}
          onClickAnswer={handleMbti}
        />
        ): (
          <Link href={`/results/${resolveMbti(ei,sn,tf,jp)}`}>결과 보러 가기</Link>
        )
      }
    </div>
  )
}
    
const resolveMbti = (ei: number, sn: number, tf: number, jp: number): string => {
  let result = ''
  result += ei>0?'e':'i'
  result += sn>0?'s':'n'
  result += tf>0?'t':'f'
  result += jp>0?'j':'p'

  return result
}
const questions = [
  {
    question: '1 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.EI,
  },
  {
    question: '2 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.SN,
  },
  {
    question: '3 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.TF,
  },
  {
    question: '4 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.JP,
  },
  {
    question: '1 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.EI,
  },
  {
    question: '2 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.SN,
  },
  {
    question: '3 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.TF,
  },
  {
    question: '4 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.JP,
  },
  {
    question: '1 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.EI,
  },
  {
    question: '2 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.SN,
  },
  {
    question: '3 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.TF,
  },
  {
    question: '4 처음 보는 친구들에게 나는?',
    leftAnswer: '내가 먼저 말을 건낸다.',
    rightAnswer: '대부분 다른 친구가 먼저 말을 건낸다.',
    type: MBTI.JP,
  },
]