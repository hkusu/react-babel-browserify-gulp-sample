var React = require('react');

var App = React.createClass({
  getInitialState: function() {
    return {
      person: {
        name: 'ヤマダ',
        age: 34
      },
      message: 'こんにちわ'
    };
  },

  render: function() {
    return (
      <div>
        <Person name={this.state.person.name} age={this.state.person.age} />
        <Message message={this.state.message} />
      </div>
    );
  }
});

var Person = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.name} {this.props.age}歳
      </p>
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
  document.getElementById('container')
);