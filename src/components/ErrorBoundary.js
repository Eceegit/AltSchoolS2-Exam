import React, { Component } from 'react'


let url = "https://second-semes-exam.web.app/"

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
          <div className='errorbound'>
            <h1 style={{textAlign: "center", marginTop: "13rem", color: "red"}}>Something went wrong.</h1>
            <p style={{color: "#232323",fontWeight: 500, fontSize: "25px"}}>Please reload the page!</p>
            <p><a href={url}>AfriNat</a></p>
          </div>
        )
      }
  
      return this.props.children; 
    }
  }


export default ErrorBoundary