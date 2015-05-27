// React をロード
var React = require('react');
// 外部ファイルへ分割した Message クラスをロード
var Message = require('./message.jsx');

// このアプリケーションのメインとなる App クラス
var App = React.createClass({
  getInitialState: function() {
    return {
      person: {
        name: 'ヤマダ',
        age: 34
      }
    };
  },
  handleChange: function(event) {
    this.setState({
      person: {
        name: event.target.value,
        age: this.state.person.age
      }
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.person.name} onChange={this.handleChange} />
        <Message name={this.state.person.name} age={this.state.person.age} />
      </div>
    );
  }
});

// app クラスを描画
React.render(
  <App />,
  document.getElementById('container')
);