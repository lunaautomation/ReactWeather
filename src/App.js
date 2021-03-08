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
  }

  handleSubmit(e) {      
    this.setState({city: this.state.search});
    e.preventDefault();
  }

  callAPI(){    
    return <APIresult city={this.state.city}/>
  }

  render(){
  return ( 
    <span className="App">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} /> 
      <button type="submit" className="btn btn-success" >Go</button>
      </form>     
      <span className="weatherContainer">  
        {this.state.city? (this.callAPI()):(
<span className="container">
            <h4 color='white' className="Breaker">Please select a location</h4>
            </span>
          )}
      </span>
    </span>
    );
  }
}

export default App;