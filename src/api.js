import React from 'react';
import WeatherCard from './WeatherCard';

class APIresult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [{main:[],weather:[[]],clouds:[],wind:[]}],      
    };
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Watford,uk&units=metric&APPID=992838d6689bba64ea80c087ce5c31ce`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.list
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <span className="Block" >          
          {items.map(item => (
    <WeatherCard day={item.dt_txt}image={item.weather[0].description}description={item.weather[0].description}temp={item.main.temp}></WeatherCard>           
          ))}
        </span>
      );
    }
  }
}
export default APIresult;