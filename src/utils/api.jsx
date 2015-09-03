var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = process.env.IMGUR_API_KEY;

module.exports = window.api = {
    get: function(url) {
        // make the ajax request with the `fetch` library
        // pass the library `fetch` the absolute url you want to make a request to
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID' + apiKey
            }
        })
        .then(function(response){
            return response.json()
        })
    }
};

