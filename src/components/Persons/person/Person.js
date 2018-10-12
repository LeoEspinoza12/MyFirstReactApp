import React, { Component} from 'react'
import classes from'./Person.css'
import WithClass from '../../../hoc/WithClass'
import Aux from '../../../hoc/Aux'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[PersonData.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[PersonData.js] Component will mount')
  }

  componentDidMount() {
    console.log('[PersonData.js] Inside componentDidMount')
  }
  render () {
    console.log('[PersonData.js] Inside render');
    return (
      <Aux>
        <h5 onClick={this.props.click}>Mi llamo es {this.props.name} y soy {this.props.age}</h5>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  
  }
}




export default WithClass(Person, classes.Person);