import React from 'react';
import sun from './sun.svg';
import rainLight from './rain-light.svg';
import rainMed from './rain-med.svg';
import rainHeavy from './rain-heavy.svg';
import cloud from './cloud.svg';
import overcast from './overcast.svg';


class WeatherCard extends React.Component {
  
  renderSwitch(param) {
    switch(param) {
      case 'clear sky':
        return <img alt={this.props.day} className="weatherImage" src={sun}></img>;
      case 'light rain':
        return <img alt={this.props.day} className="weatherImage"src={rainLight}></img>;
      case 'moderate rain':
        return <img alt={this.props.day} className="weatherImage"src={rainMed}></img>;
      case 'heavy rain':
        return <img alt={this.props.day} className="weatherImage"src={rainHeavy}></img>;
      case 'overcast clouds':
        return <img alt={this.props.day} className="weatherImage"src={overcast}></img>;
      case 'scattered clouds':
        return <img alt={this.props.day} className="weatherImage"src={cloud}></img>;
      case 'broken clouds':
        return <img alt={this.props.day} className="weatherImage"src={cloud}></img>;
      default:
        return <img alt={this.props.day} className="weatherImage"src={cloud}></img>;
    }
  }

  dayString(date){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    return days[d.getDay()];
  }

  dayTime(date){
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    var d = new Date(date);
    return addZero(d.getHours())+':'+addZero(d.getMinutes());
  }

  render() {
    return (
    <span className="card">
      <h4><b>{this.dayString(this.props.day)}</b></h4>
    <h4>{this.dayTime(this.props.day)}</h4>
      {this.renderSwitch(this.props.image)}         
        <div className="container">        
        <p>{this.props.description}</p>
        <p>{this.props.temp}°C</p>
    </div>
    </span>
    )}
}
export default WeatherCard;