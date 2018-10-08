import React from 'react'

const counter = (props) => {

  let min = 5;
  let max = 25;
  let outPut = props.output;
    if (props.typeLength <= min){
      outPut = 'Text is too short'
    } else if (props.typeLength >= 6 && props.typeLength <= max){
      outPut = props.typeLength
    } else if (props.typeLength > max) {
      outPut = 'Text is too long'
    } 


    
    return (
    <div className="person" onClick={props.click}>
      
      <p>{outPut}</p>
    </div>


  )
}

export default counter;