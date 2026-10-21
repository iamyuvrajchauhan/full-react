import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-10 flex flex-col justify-between'>
          <h3 className='bg-white rounded-full h-8 w-8 flex items-center justify-center'>{props.id+1}</h3>
          <p className='mt-30 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente consequuntur voluptates. Eum, asperiores nostrum?</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 py-2 px-6 rounded-4xl text-white'>{props.tag}</button>
            <button className='bg-blue-600 py-2 px-6 rounded-full text-white'><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
  )
}

export default RightCardContent