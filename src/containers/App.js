

import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// import ErrorBoundery from '../components/errorBoundery/errorBoundery'


class App extends Component {

  state = {
    persons: [
      {name: 'Pedro', age: 41, id:'123'},
      {name: 'Carlos', age: 38, id:'456'},
      {name: 'Juan', age: 25, id:'789'},

    ],

    otherState: 'some other value',
    showPersons: false
  }

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
  this.setState({showPersons: !stateShow})
}

  render() {

    let persons = null;


    if (this.state.showPersons){
      persons = <Persons 
                  persons={this.state.persons} 
                  click={this.deletePersonHandler}
                  changed={this.nameChangeHandler} />
      }




    return (

      <div className={styles.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          click={this.togglePersonHandler} />
          {persons}
      </div>
    );

    
  }
}

  export default App;