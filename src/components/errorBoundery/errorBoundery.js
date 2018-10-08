import React, { Component } from 'react'


class errorBoundery extends Component {

  // first we will create a state that will 
  // initialize the value of our error
  // then we are going to initaliaze the error value
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })

  }

  // then we will catch the error

  render() {
    if(this.state.hasError){
      return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children 
    }
  }
}


export default errorBoundery