import React, { Component } from "react";

class CurrencyError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Could not display this currency.</h2>;
    }
    return this.props.children;
  }
}

export default CurrencyError;

/*====== Creating error boundaries (#4)====== */
//Creating the error boundary now:
//Initialized state with  single property hasError which defaults to false
//We'll use hasError to conditionally render an error UI
//If true - it will mean no error has occured & we should display the error UI
//otherwise -  just display the normal children

/*====== Creating error boundaries (#5)====== */
//Add the getDerivedStateFromError() method
//We simply set the hasError state to true

/*====== Creating error boundaries (#6)====== */
//Finally in render - conditionally render an error message if hasError is true - otherwise just display the children as normal
//CurrencyError.js ===> App.js
