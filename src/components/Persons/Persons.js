


import React, { PureComponent } from  'react'
import Person from './person/Person'


class Persons extends PureComponent {

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

componentWillReceiveProps(nextProps) {
  console.log('[Update Persons.js] Inside componentWillReceive', nextProps)
}

// shouldComponentUpdate(nextProps, nextState){
//   console.log('[Update Persons.js] Inside shouldComponentsUpdate Persons.Js', nextProps, nextState)
//   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.click !== this.props.click
//   // return true
// }

componentWillUpdate(nextProps, nextState) {
  console.log('[Update Persons.js] Inside componentWillUpdate Persons.Js', nextProps, nextState)
}

componentDidUpdate(nextProps, nextState) {
  console.log('[Update Persons.js] Inside componentDidUpdate Persons.Js', nextProps, nextState)
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