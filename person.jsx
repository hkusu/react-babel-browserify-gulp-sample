// これはクラスを CommonJS スタイルで外部ファイルへ分割する例

var React = require('react');

/* サブClass（Person） */
var Person = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.name} {this.props.age}歳
      </p>
    );
  }
});

module.exports = Person;