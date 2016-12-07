import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';


import HeadSide from './components/HeadSide';

var App = React.createClass({

	 

	login: function() {
		$.session.set('nam', 'a value');
		browserHistory.push(window.location.pathname);
	},

	logout: function(){
		$.session.clear();
		browserHistory.push(window.location.pathname);
	},
	render: function() {
		return (
			<div className="mainBlock">
				<header><HeadSide></HeadSide></header>

				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default App;