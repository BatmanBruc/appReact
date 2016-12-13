import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './app';
import About from './components/About';
import NotFound from './components/NotFound';
import session from 'jQuery.session';
import Targets from './components/Targets';
import Target from './components/Targets/Target'




console.log(About);
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='/about' component={About}></Route>
            <Route path='/targets' component={Targets} >
            	<Route path='/targets/:targetId' component={Target} />
            </Route>
            <Route path='*' component={NotFound}></Route>
        </Route>
    </Router>,
    document.getElementById('content')
);

/*function requireAuth(nextState, replace) {
    if ($.session.get('some key') === undefined) {
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}*/


