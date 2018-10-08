import React from  'react'
import Person from './person/Person'

const persons = (props) => props.persons.map( (person, index) => {
    return  <Person 
              name={person.name} 
              age={person.age} 
              click={() => props.click(index)} 
              key={person.id}
              changed={(event)=> props.changed(event, person.id)}/>
          } );

export default persons