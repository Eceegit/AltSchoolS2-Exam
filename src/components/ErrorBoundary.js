import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        error: null,
     };
    }
  
    componentDidCatch(error, errorInfo) {
      //Logging the error to an error reporting service
      console.log({error, errorInfo});
    }

    static getDerivedStateFromError(error) {
      // Updating the state for the next render to show the fallback UI.
      return { error };
    }
  
  
    render() {
      if (this.state.error) {
        // returning the fallback UI
        return (
          <div>
            <h1 style={{color: "red", textAlign: "center"}}>Something went wrong.</h1>
          </div>
        )
      }
  
      return this.props.children; 
    }
  }


export default ErrorBoundary