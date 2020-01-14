import React from 'react';
import sun from './sun.svg';
import rain from './rain.svg';
import logo from './logo.svg';


class WeatherCard extends React.Component {
  renderSwitch(param) {
    switch(param) {
      case 'sun':
        return <img alt={this.props.day} className={this.props.image}src={sun}></img>;
      case 'rain':
        return <img alt={this.props.day} className={this.props.image}src={rain}></img>;
      default:
        return <img alt={this.props.day} className={this.props.image}src={logo}></img>;
    }
  }
  render() {
    return (
    <span class="card">
      {this.renderSwitch(this.props.image)}         
        <div class="container">
        <h4><b>{this.props.day}</b></h4>
        <p>Bbbbbbb{this.props.day} aaaa</p>
    </div>
    </span>
    );
  }
}
export default WeatherCard;