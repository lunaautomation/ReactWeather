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
import scatteredCloudNight from "./svgs/scatteredcloud_night.svg";
import moon from "./svgs/moon.svg";
import brokenCloudNight from "./svgs/brokencloudnight.svg";
import fewCloudNight from "./svgs/fewcloudnight.svg";

class WeatherCard extends React.Component {
  nightrenderSwitch(param) {
    switch (param) {
      case "clear sky":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={moon}
          ></img>
        );
      case "scattered clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={scatteredCloudNight}
          ></img>
        );
      case "broken clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={brokenCloudNight}
          ></img>
        );
      case "few clouds":
        return (
          <img
            alt={this.props.description}
            title={this.props.description}
            className="weatherImage"
            src={fewCloudNight}
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
            src={scatteredCloudNight}
          ></img>
        );
    }
  }

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

  cardClassSwitch(param) {
    switch (param) {
      case "00:00":
        return "Midnight";
      case "03:00":
        return "Threeam";
      case "06:00":
        return "Sixam";
      case "09:00":
        return "Nineam";
      case "12:00":
        return "Noon";
      case "15:00":
        return "Threepm";
      case "18:00":
        return "Sixpm";
      case "21:00":
        return "Ninepm";
      default:
        return "busted";
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

  isItDark(time) {
    if ((time === "00:00") | (time === "03:00") | (time === "21:00")) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className={`${this.props.className} ${"itemGrid"}`}>
        <h1>{this.dayTime(this.props.day)}</h1>
        {this.isItDark(this.dayTime(this.props.day))
          ? this.nightrenderSwitch(this.props.image)
          : this.renderSwitch(this.props.image)}
        <p>
          {this.props.temp}°C feels {this.props.feelsTemp}°C
        </p>
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
        <p>Moisture {this.props.moisture} </p>
        <p>Pressure {this.props.pressure} </p>
      </div>
    );
  }
}
export default WeatherCard;
