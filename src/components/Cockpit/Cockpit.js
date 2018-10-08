import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

  let assignedClasses = [];
  let btnClass = '';
  
  if(props.showPersons) {
    btnClass = classes.Red;
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
    <div className={classes.Cockpit}>
      <h1 className="App-title">{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is the List</p>
      <button className={btnClass} onClick={props.click} >Switch Toggle</button>
    </div>


  );

}


export default cockpit