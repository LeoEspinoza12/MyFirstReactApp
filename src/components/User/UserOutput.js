import React from 'react'
import './user.css'

const userOutput = (props) => {
  
    return (
      <div className="userOutput">
        <h1>The username is {props.username}</h1>    
      </div>
    ) 
  
}

export default userOutput