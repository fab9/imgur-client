var React = require('react');
var Routes = require('./Routes');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function() {
    return <h1>
        I'm child 1
        {this.props.children}
    </h1>
  }
});

var Child2 = React.createClass({
  render: function() {
    return <h1>I'm the other child, child 2</h1>
  }
});

//var element = React.createElement(Hello, {});
React.render(Routes, document.querySelector('.container'));
