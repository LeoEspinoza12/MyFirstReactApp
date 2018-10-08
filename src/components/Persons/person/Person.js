import React from 'react'
import classes from'./Person.css'

const person = (props) => {

  return (


    <div onClick={props.click} className={classes.Person}>
      <h5>Mi llamo es {props.name} y soy {props.age}</h5>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>


  )
}

export default person;