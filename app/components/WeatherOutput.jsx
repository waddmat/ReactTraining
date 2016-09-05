var React = require('react');

var WeatherOutput = ({temp, location}) => {
  return (
    <h3>It is {temp} in {location}</h3>
  );
};

module.exports = WeatherOutput;
