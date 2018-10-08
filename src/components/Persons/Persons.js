


import React, { Component } from  'react'
import Person from './person/Person'


class Persons extends Component {

constructor(props) {
  super(props)
  console.log('[Persons.js] Inside Constructor', props)
}

componentWillMount() {
  console.log('[Persons.js] Component will mount')
}

componentDidMount() {
  console.log('[Persons.js] Inside componentDidMount')
}

  render () {
    console.log('[Persons.js] Inseide REnder')
    return this.props.persons.map( (person, index) => {
      return  <Person 
       name={person.name} 
          age={person.age} 
            click={() => this.props.click(index)} 
          key={person.id}
        changed={(event)=> this.props.changed(event, person.id)}/>
      } )
    }
}


export default Persons