var React = require('react');
var GreeterOutput = require('GreeterOutput');
var GreeterInput = require('GreeterInput');

var GreeterContainer = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default message.'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleUpdate: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterOutput name={name} message={message}/>
        <GreeterInput onUpdate={this.handleUpdate}/>
      </div>
    );
  }
});

module.exports = GreeterContainer;
