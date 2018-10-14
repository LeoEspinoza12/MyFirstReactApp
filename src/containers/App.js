

import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/WithClass'; 
import Aux from '../hoc/Aux'

// import ErrorBoundery from '../components/errorBoundery/errorBoundery'


class App extends PureComponent {

  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        {name: 'Pedro', age: 41, id: '123' },
        {name: 'Carlos', age: 38, id: '456' },
        {name: 'Juan', age: 25, id: '789' },
      ],

      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,   
      authenticated: false
    }


  }

  componentWillMount() {
    console.log('[App.js] Component will mount' )
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }



/////////////////////////
// shouldComponentUpdate(nextProps, nextState) {
//   console.log('[Update APP.js] Inside shouldComponentsUpdate Persons.Js', nextProps, nextState)
//    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
//   // return true
// }
componentWillUpdate(nextProps, nextState) {
  console.log('[Update App.js] Inside componentWillUpdate Persons.Js', nextProps, nextState)
}

componentDidUpdate(nextProps, nextState) {
  console.log('[Update APP.js] Inside componentDidUpdate Persons.Js', nextProps, nextState)
}
/////////////////////////




  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex( p => {
      // console.log(p)
      return p.id === index
    })
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }


togglePersonHandler = () => {
  const stateShow = this.state.showPersons
  this.setState( (prevState, props) => {
    return {
      showPersons: !stateShow,
      toggleClicked: prevState.toggleClicked + 1
      }
    
  })
}


loginHandler = () =>{
  this.setState({authenticated: true})
}


  render() {
    console.log('[App.js] Inside Render()')
    let persons = null;


    if (this.state.showPersons){
      persons = <Persons 
                  persons={this.state.persons} 
                  click={this.deletePersonHandler}
                  chang ed={this.nameChangeHandler} />
      }




    return (
      <Aux>
  
        <Cockpit 
          showPersons={this.state.showPersons} 
          title={this.props.title}
          persons={this.state.persons}
          login={this.loginHandler}
          click={this.togglePersonHandler} />
          {persons}
      </Aux>
    );

    
  }
}

  export default withClass(App, classes.App);
