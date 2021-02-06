interface OwnProps {
  type: string
  description: string
}

export default ({type, description}: OwnProps) => {
  return (
    <div>
      <h1>당신의 결과는 {type} 입니다!</h1>
      <p>
        { description }
      </p>
      <div>
        <button>결과 공유하기</button>
        <button>다시 하기</button>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  console.log(Object.keys(results))
  return { paths: Object.keys(results).map(t => ({params: {result: t}})), fallback: false}
}

export async function getStaticProps({params}) {
  const type = params.result
  console.log('================>>>>?>>>>')
  console.log(results[type])
  return { props: {
    type: results[type].type,
    description: results[type].description,
   } }
}

const results = {
   estj: {
     type: 'ESTJ',
     description: '중얼중얼 당신은 estj.....'
   }, 
   estp: {
    type: 'ESTP',
    description: '중얼중얼 당신은 estj.....'
  },
  esfp: {
    type: 'ESFP',
    description: '중얼중얼 당신은 estj.....'
  },
  esfj: {
    type: 'ESFJ',
    description: '중얼중얼 당신은 estj.....'
  },
  istj: {
    type: 'ISTJ',
    description: '중얼중얼 당신은 estj.....'
  },
  istp: {
    type: 'ISTP',
    description: '중얼중얼 당신은 estj.....'
  },
  isfp: {
    type: 'ISFP',
    description: '중얼중얼 당신은 estj.....'
  },
  isfj: {
    type: 'ISFJ',
    description: '중얼중얼 당신은 estj.....'
  },
  intj: {
    type: 'INTJ',
    description: '중얼중얼 당신은 estj.....'
  },
  intp: {
    type: 'INTP',
    description: '중얼중얼 당신은 estj.....'
  },
  infp: {
    type: 'INFP',
    description: '중얼중얼 당신은 estj.....'
  },
  infj: {
    type: 'INFJ',
    description: '중얼중얼 당신은 estj.....'
  },
  entj: {
    type: 'ENTJ',
    description: '중얼중얼 당신은 estj.....'
  },
  entp: {
    type: 'ENTP',
    description: '중얼중얼 당신은 estj.....'
  },
  enfp: {
    type: 'ENFP',
    description: '중얼중얼 당신은 estj.....'
  },
  enfj: {
    type: 'ENFJ',
    description: '중얼중얼 당신은 estj.....'
  },
}