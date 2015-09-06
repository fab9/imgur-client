var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');


module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore,'onChange')
    ],
    getInitialState: function() {
        return {
            images: []
        }
    },
    componentWillMount: function(){
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function(nextProps){
        Actions.getImages(nextProps.params.id);
    },
    render: function() {
        return <div>
            {this.renderImages()}
        </div>
    },
    renderImages: function() {
        return this.state.images.slice(0, 4).map(function(image){
            return <div className="col-sm-6 col-md-3">
                <ImagePreview key={image.id} {...image} />
            </div>
        });
    },
    onChange: function(event, images) {
        this.setState({images: images})
    }

});