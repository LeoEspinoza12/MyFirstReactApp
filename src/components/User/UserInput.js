import React, { Component } from 'react'
import './user.css'

const UserInput = (props) => {
  
    return (
      <div className="userInput">
        <input type="text" onChange={props.change} value={props.username}/>
      </div>
    )
  
}


export default UserInput