import React from 'react'

const Card = (props) => {
    
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1790363140499-98c24fc643cd?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, laboriosam!</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card