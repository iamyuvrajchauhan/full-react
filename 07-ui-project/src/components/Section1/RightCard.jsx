import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='overflow-hidden shrink-0 h-full relative rounded-4xl w-80'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard