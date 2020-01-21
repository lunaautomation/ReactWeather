import React from 'react';
import WeatherCard from './WeatherCard';

class APIresult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      error: null,
      isLoaded: false,
      items: [{main:[],weather:[[]],clouds:[],wind:[]}],      
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
    console.log('HERE'+city)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&APPID=992838d6689bba64ea80c087ce5c31ce`)
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
    console.log('API Render'+this.props.city);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
     else {
      return (
        <span className="Block" >          
          {items ? items.map(item => (
    <WeatherCard day={item.dt_txt}image={item.weather[0].description}description={item.weather[0].description}temp={item.main.temp}></WeatherCard>           
          )):<p fontSize="30px">OH NO ITS EMPTY!</p>}
        </span>
      );
    }
  }
}
export default APIresult;