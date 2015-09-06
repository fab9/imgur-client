var React = require('react');

module.exports = React.createClass({
    render: function() {
      return <div>
          {this.image()}
      </div>
    },
    image: function() {
        var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

        return (
            <div className="row">
                <a className="thumbnail" width="150" height="150">
                    <div className="caption">
                        <h4>asdf adfsad</h4>
                    </div>

                    <img src={link} className="img-responsive" />
                </a>
            </div>
        )
    }
});