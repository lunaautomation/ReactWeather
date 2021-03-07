import React from "react";
import WeatherCard from "./WeatherCard";

class APIresult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      error: null,
      isLoaded: false,
      items: [{ main: [], weather: [[]], clouds: [], wind: [] }],
    };
  }

  componentDidMount() {
    this.setState({ error: "" });
    this.getWeather(this.props.city);
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({ error: "" });
      this.getWeather(this.props.city);
    }
  }

  handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: Location " + response.statusText);
    }
  }

  getWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&APPID=992838d6689bba64ea80c087ce5c31ce`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.list,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
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
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div>
          <tr>Error: {error.message}</tr>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <tr>Loading...</tr>
        </div>
      );
    } else {
      return (
          <span className="grid-container">
            {items ? (
              items.map((item,index) => (
                <>         
                  {(index === 0 || this.dayTime(item.dt_txt).toString() === "00:00") && (
                    <div className="breaker">
                      <h1>  
                        {this.dayString(item.dt_txt)} <br />
                      </h1>
                    </div>
                  )}
                  <WeatherCard
                    day={item.dt_txt}
                    image={item.weather[0].description}
                    description={item.weather[0].description}
                    temp={Math.round(item.main.temp)}
                    moisture={item.main.humidity}
                    feelsTemp={Math.round(item.main.feels_like)}
                    windDir={item.wind.deg}
                    windSpd={item.wind.speed}
                    pressure={item.main.pressure}
                  ></WeatherCard>
                </>
              ))
            ) : (
              <p fontSize="30px">Please select a valid location</p>
            )}
          </span>
      );
    }
  }
}
export default APIresult;
