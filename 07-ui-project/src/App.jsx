import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [{
    img:'https://i.pinimg.com/1200x/40/44/c0/4044c0a73b34553db722945869b1f2ee.jpg',
    intro: '',
    tag:'Satisfied'
  },
  {
    img:'https://i.pinimg.com/736x/19/a2/cb/19a2cb248436651b1ec7166472b1a1d5.jpg',
    intro: '',
    tag: 'Underserved'
  },
  {
    img: 'https://i.pinimg.com/736x/31/d5/34/31d534d0f3672f32626855f8feed9e47.jpg',
    intro:'',
    tag:'Underbanked'
  },
  {
    img: 'https://i.pinimg.com/1200x/64/f3/60/64f360a8730c8f7cd9a6773663f7edb6.jpg',
    intro:'',
    tag:'Underrated'
  }
]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App