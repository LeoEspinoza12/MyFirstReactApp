import React, { Component} from 'react'
import classes from'./Person.css'


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
    console.log('[PersonData.js] Inside render')
    return (
      <div onClick={this.props.click} className={classes.Person}>
        <h5>Mi llamo es {this.props.name} y soy {this.props.age}</h5>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}




export default Person;