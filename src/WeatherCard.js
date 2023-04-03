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
import moisture from "./svgs/moisture.svg"

class WeatherCard extends React.Component {
  nightrenderSwitch(param) {
    const images = {
      "clear sky": moon,
      "scattered clouds": scatteredCloudNight,
      "broken clouds": brokenCloudNight,
      "few clouds": fewCloudNight,
      "light snow": snowLight,
      "snow": snow,
      "heavy snow": snowHeavy,
    }
    const imageSrc = images[param] || scatteredCloudNight;
    return (
      <img
        alt={this.props.description}
        title={this.props.description}
        className="weatherImage"
        src={imageSrc}
      ></img>
    );
  }

  renderSwitch(condition) {
    const images = {
      "clear sky": sun,
      "light rain": rainLight,
      "moderate rain": rainMed,
      "heavy rain": rainHeavy,
      "overcast clouds": overcast,
      "scattered clouds": scatteredCloud,
      "broken clouds": brokenCloud,
      "few clouds": fewCloud,
      "light snow": snowLight,
      "snow": snow,
      "heavy snow": snowHeavy
    };

    const imgSrc = images[condition] || cloud;

    return (
      <img
        alt={this.props.description}
        title={this.props.description}
        className="weatherImage"
        src={imgSrc}
      />
    );
  }

  cardClassSwitch(time) {
    const timeClassMap = {
      "00:00": "midnight",
      "03:00": "early-morning",
      "06:00": "morning",
      "09:00": "late-morning",
      "12:00": "noon",
      "15:00": "afternoon",
      "18:00": "evening",
      "21:00": "night",
    };
    return timeClassMap[time] || "busted";
  }

  
   winSpeedSwitch(input) {
    const speed = parseInt(input);
  
    switch(true) {
      case (speed <= 2):
        return 0.3;
      case (speed <= 5):
        return 0.4;
      case (speed <= 8):
        return 0.5;
      case (speed <= 10):
        return 0.6;
      case (speed <= 15):
        return 0.7;
      case (speed <= 20):
        return 1;
      case (speed <= 30):
        return 1.2;
      default:
        return null; // or whatever is appropriate for the use case
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
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(date);
    return days[d.getUTCDay()];
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
        <h2>
          {this.props.temp}°C</h2><h2> (feels {this.props.feelsTemp}°C)
        </h2>
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
        <img
          src={moisture}
          title={`moisture ${this.props.moisture}`}
          alt={this.props.moisture}
          style={{
            padding: 0,
            height: 15,
            transform: `scale(0.5)`,
          }}
        ></img>
        <h2>Pressure</h2> <p> {this.props.pressure} </p>
      </div>
    );
  }
}
export default WeatherCard;
