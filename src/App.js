import React from 'react';
import './App.css';
import APIresult from './api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {city: '', submitted:false};
  }

  handleChange(e) {
   this.setState({city: e.target.value});
   console.log('change'+this.state.city);
  }

  handleSubmit(e) {     
    this.setState({submitted: true});
    e.preventDefault();
    console.log('submit'+this.state.city);
  }

  callAPI(city){    
    return <APIresult city={city}/>
  }

  render(){
    let city = this.state.city;
  return ( 
    <span className="App">
      <form onSubmit={this.handleSubmit}>
      <input value={this.state.city} onChange={this.handleChange}/> <br />
      <button type="submit" className="btn btn-success" >Search...</button>
      </form>     
      <header className="App-header">  
        {this.callAPI(city)}
      </header>
    </span>
    );
  }
}

export default App;