//  a store is in charge of fetching and storing our data
var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');



module.exports = Reflux.createStore({
    // tells our reflux store that if any action comes in it needs to be listening to it,
    // and if it receives an action with a name identical a method on the store,
    // it's going to run that method, in this case `getImages`.
    listenables: [Actions],
    // triggering the action `getTopics` will run the method `getTopics`
    // running `getTopics` fires off an ajax request
    getImages: function(topicId) {
         Api.get('topics/' + topicId)
            .then(function(json){
                // (now `this.images` is going to be an array of objects where each object represents a single image)
                // whenever we successfully fetch data ...
                this.images = json.data;
                // ... call the function `triggerChange()`
                this.triggerChange();
        }.bind(this));
    },
    // Define `triggerChange()` function
    triggerChange: function() {
        // `trigger` is a method provided by reflux
        this.trigger('change', this.images);
    }
});