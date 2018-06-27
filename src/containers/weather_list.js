import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component {
  renderWeather(cityDetails) {
    if (typeof(cityDetails) == "undefined") {
      return (
        <tr key="1">
          <td colSpan="4" className="empty-record"></td>
        </tr>
      )
    }
    const name = cityDetails.city.name
    const temps = cityDetails.list.map(weather => weather.main.temp);
    const pressures = cityDetails.list.map(weather => weather.main.pressure);
    const humidities = cityDetails.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityDetails.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /> {name}</td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={pressures} color="orange" units="hPa"/></td>
        <td><Chart data={humidities} color="yellow" units="%"/></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temprature (K)</th>
          <th>pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
// in ES6 { weather } is same as : const weather = state.weather in ES5
function mapStateToProps({ weather }) {
  // Instead of passing {weather: weather}, we can write it as {weather} in ES6
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
