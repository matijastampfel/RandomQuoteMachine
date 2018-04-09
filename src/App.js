import React, { Component } from 'react';

import './App.css';
import API from './components/API';

class App extends Component {
constructor() {
  super();
  this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
}

forceUpdateHandler = ()=>{
  window.location.reload();
};




  render() {
    return (

      <div className="container App">
      <div className="row">
          <div className="col-md-4"></div>
          <div id="mainFile" className="col-md-4">
          <button onClick = {this.forceUpdateHandler} type="button" className="btn btn-danger">Get me New Random Quote</button>
          <API/>
          
          </div>
          <div className="col-md-4"></div>
      </div>
  </div>
    );
  }
}

export default App;
