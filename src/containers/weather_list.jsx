import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render(){
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

// ES6 sugar: ({ weather }) is from `state` and pulls `state.weather`
// ES6 sugar: `return { weather };` is return { weather: weather }
function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
