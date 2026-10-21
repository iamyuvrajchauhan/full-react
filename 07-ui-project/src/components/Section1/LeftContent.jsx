import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-[80%] w-1/4 flex flex-col justify-between'>
      <HeroText/>
      <Arrow/>
    </div>
  )
}

export default LeftContent