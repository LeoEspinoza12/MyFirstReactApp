import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

  let assignedClasses = [];
  let btnClass = classes.button;
  
  if(props.showPersons) {
    btnClass = [classes.button, classes.Red].join(' ');
  }







  if (props.persons.length <= 3) {
    assignedClasses.push(classes.red); // red class
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.green); // green class
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.orange); // orange class
  }
  return (

  <Aux>
    <div >
      <h1 className="App-title">{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is the List</p>
      <button className={btnClass} onClick={props.click} >Switch Toggle</button>
      <button onClick={props.login}>Login</button>
    </div>
</Aux>

  );

}


export default cockpit