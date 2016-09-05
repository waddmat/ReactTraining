var React = require('react');

var GreeterInput = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (typeof name === 'string' && name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (typeof message === 'string' && message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onUpdate(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder='Enter Name'/>
        </div>
        <div>
          <textarea ref="message" placeholder='Enter Message'></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterInput;
