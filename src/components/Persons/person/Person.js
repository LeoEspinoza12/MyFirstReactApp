import React, { Component} from 'react'
import propTypes from 'prop-types'
import classes from'./Person.css'
import WithClass from '../../../hoc/WithClass'
import Aux from '../../../hoc/Aux'
import {AuthContext} from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[PersonData.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[PersonData.js] Component will mount')
  }

  componentDidMount() {
    console.log('[PersonData.js] Inside componentDidMount')
    if(this.props.position === 0){
      this.inputElement.current.focus()
    }
  }

  focus() {
    this.inputElement.current.focus()
  }

  render () {
    console.log('[PersonData.js] Inside render');
    return (
      <Aux>
        <AuthContext.Consumer>
        {auth => auth ? <p>Estoy Autenticado!</p> : null }

           
        </AuthContext.Consumer>

        <h5 onClick={this.props.click}>Mi llamo es {this.props.name} y soy {this.props.age}</h5>
        <p>{this.props.children}</p>
        <input 
          ref = { this.inputElement}
          type="text"
        
          onChange={this.props.changed} 
          value={this.props.name}/>
      </Aux>
    )
  
  }
}


Person.propTypes = {
  click: propTypes.func ,
  name: propTypes.string, 
  age: propTypes.number,
  changed: propTypes.func 
}

// export default WithClass(Person, classes.Person);
export default Person;