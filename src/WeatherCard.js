import React from "react";
import sun from "./svgs/sun.svg";
import rainLight from "./svgs/rain-light.svg";
import rainMed from "./svgs/rain-med.svg";
import rainHeavy from "./svgs/rain-heavy.svg";
import cloud from "./svgs/cloud.svg";
import brokenCloud from "./svgs/brokencloud.svg";
import scatteredCloud from "./svgs/scatteredcloud.svg";
import fewCloud from "./svgs/fewcloud.svg";
import snowLight from "./svgs/snow-light.svg";
import snow from "./svgs/snow.svg";
import snowHeavy from "./svgs/snow-heavy.svg";
import overcast from "./svgs/overcast.svg";
import arrow from "./svgs/arrow-thin.svg";
import moisture from "./svgs/moisture.svg";

class WeatherCard extends React.Component {
  renderSwitch(param) {
    switch (param) {
      case "clear sky":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={sun}
          ></img>
        );
      case "light rain":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={rainLight}
          ></img>
        );
      case "moderate rain":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={rainMed}
          ></img>
        );
      case "heavy rain":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={rainHeavy}
          ></img>
        );
      case "overcast clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={overcast}
          ></img>
        );
      case "scattered clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={scatteredCloud}
          ></img>
        );
      case "broken clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={brokenCloud}
          ></img>
        );
      case "few clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={fewCloud}
          ></img>
        );
      case "light snow":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={snowLight}
          ></img>
        );
      case "snow":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={snow}
          ></img>
        );
      case "heavy snow":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={snowHeavy}
          ></img>
        );
      default:
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={cloud}
          ></img>
        );
    }
  }
  cardColourSwitch(param) {
    switch (param) {
      case "03:00":
        return `#000066`;
      case "06:00":
        return "#0000cc";
      case "09:00":
        return "#1a1aff";
      case "12:00":
        return "#8080ff";
      case "15:00":
        return "#1a1aff";
      case "18:00":
        return "#0000cc";
      case "21:00":
        return "#000066";
      default:
        return "#000066";
    }
  }
  winSpeedSwitch(input) {
    var param = parseInt(input);
    if (param <= 2) {
      return 0.3;
    } else if (param <= 5) {
      return 0.4;
    } else if (param <= 8) {
      return 0.5;
    } else if (param <= 10) {
      return 0.6;
    } else if (param <= 15) {
      return 0.7;
    } else if (param <= 20) {
      return 1;
    } else if (param <= 30) {
      return 1.2;
    }
  }
  moistureSwitch(input) {
    var param = parseInt(input);
    if (param <= 2) {
      return 0.2;
    } else if (param <= 20) {
      return 0.4;
    } else if (param <= 30) {
      return 0.5;
    } else if (param <= 55) {
      return 0.7;
    } else if (param <= 60) {
      return 0.8;
    } else if (param <= 90) {
      return 1;
    }
  }
  dayString(date) {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var d = new Date(date);
    return days[d.getDay()];
  }

  dayTime(date) {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    var d = new Date(date);
    return addZero(d.getHours()) + ":" + addZero(d.getMinutes());
  }

  render() {
    return (
      <td
        className="card"
        style={{
          backgroundColor: this.cardColourSwitch(this.dayTime(this.props.day)),
        }}
      >
        <h4>{this.dayTime(this.props.day)}</h4>

        <table className="container">
          {this.renderSwitch(this.props.image)}
          <tr>{this.props.temp}°C</tr>
          <tr className="feelsLikeTemp"> feels ({this.props.feelsTemp}°C)</tr>
          <img
            className="windDirection"
            title={`${this.props.windSpd} m/sec`}
            alt={this.props.windSpd}
            src={arrow}
            style={{
              transform: `scale(${this.winSpeedSwitch(
                this.props.windSpd
              )}) rotate(${this.props.windDir}deg)`,
            }}
          ></img>
          <tr>Moisture {this.props.moisture} </tr>
          <tr>Pressure {this.props.pressure} </tr>
        </table>
      </td>
    );
  }
}
export default WeatherCard;
