/*
 これはクラスを CommonJS スタイルで外部ファイルへ分割する例です
*/

// React をロード
var React = require('react');

// Message クラス
var Message = React.createClass({
  render: function() {
    return (
      <p>
        こんにちは。{this.props.name} さん {this.props.age} 歳ですね！
      </p>
    );
  }
});

// エクスポート
module.exports = Message;