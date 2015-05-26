var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return { message: "" };
  },

  updateMessage: function(message) {
    this.setState({ message: message })
  },

  render: function() {
    return (
      <div>
        <MessageInput onChange={this.updateMessage} />
        <Message message={this.state.message} />
      </div>
    );
  }
});

var MessageInput = React.createClass({
  _onChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return (
      <input type="text"
             onChange={this._onChange}
        />
    );
  }
});

var Message = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.message}
      </p>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app-container')
);