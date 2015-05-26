var React = require('react');
var Person = require('./person.jsx'); // サブClass（Person）をロード

/* メインClass */
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

/* サブClass（Message） */
var Message = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.message}
      </p>
    );
  }
});


// メインClassを描画
React.render(
  <App />,
  document.getElementById('container')
);