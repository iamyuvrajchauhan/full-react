import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-[80%] overflow-x-auto p-5 w-3/4 flex gap-7 flex-nowrap'>
      {
        props.users.map(function(ele, idx){
          return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} />
          
        })
      }
    </div>
  )
}

export default RightContent