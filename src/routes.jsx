var React = require('react');
var ReactRouter = require('react-router');
// Object that tells the router how we'll be keeping track of what page the user is on at any given time.
var HashHistory = require('react-router/lib/hashhistory');
// Will be deciding what content to show at any given time.
var Router = ReactRouter.Router;
// Object used to configure the Router.
var Route = ReactRouter.Route;


module.exports = (
    <Router history={new HashHistory}>
        <Route path="/" component={Hello}>
            <Route path="1" component={Child1} >
                <Route path="2" component={Child2} />
            </Route>
            <Route path="2" component={Child2} />
        </Route>
    </Router>
)