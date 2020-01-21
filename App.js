import React from 'react';
import './App.css';
import APIresult from './api.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {city: '',search:''};
  }

  handleChange(e) {
    this.setState({search: e.target.value});
   console.log('change'+this.state.city);
  }

  handleSubmit(e) {      
    this.setState({city: this.state.search});
    e.preventDefault();
    console.log('submit'+this.state.search);
  }

  callAPI(){    
    return <APIresult city={this.state.city}/>
  }

  render(){
  return ( 
    <span className="App">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} /> <br />
      <button type="submit" className="btn btn-success" >Search...</button>
      </form>     
      <header className="App-header">  
        {this.callAPI()}
      </header>
    </span>
    );
  }
}

export default App;