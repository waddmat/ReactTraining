var React = require('react');
var ReactDOM = require('react-dom');
var GreeterContainer = require('GreeterContainer');

var firstName = 'React';

ReactDOM.render(
  <GreeterContainer name={firstName}/>,
  document.getElementById('app')
);
