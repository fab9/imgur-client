//  a store is in charge of fetching and storing our data
var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    // triggering the action `getTopics` will run the method `getTopics`
    // running `getTopics` fires off an ajax request
    getTopics: function() {
        return Api.get('topics/defaults')
            .then(function(json){
                // whenever we successfully fetch data
                this.topics = json.data;
                // call the function `triggerChange()`
                this.triggerChange();
        }.bind(this));
    },
    // Define `triggerChange()` function
    triggerChange: function() {
        // `trigger` is a method provided by reflux
        this.trigger('change', this.topics);
    }
});