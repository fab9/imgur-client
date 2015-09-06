var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';

module.exports = {
    get: function(url) {
        // make the ajax request with the `fetch` library
        // pass the library `fetch` the absolute url you want to make a request to
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID a664546fb030d49'
            }
        })
        .then(function(response){
            return response.json()
        })
    }
};

