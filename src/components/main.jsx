var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({
    render: function() {
        return <div>
            <Header />
            {this.content()}
        </div>
    },
    content: function() {
        if(this.props.children) { // if children are being passed
            return this.props.children
        } else {
            return <TopicList /> // replace <TopicList /> with the children we got passed
        }
    }
});