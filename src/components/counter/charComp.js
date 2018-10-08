import React from 'react'

const charComp = (props) => {

const style = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
}

    
    return (
      <p style={style} key={props.key} onClick={props.click}>{props.text}</p>
    )
}

export default charComp;