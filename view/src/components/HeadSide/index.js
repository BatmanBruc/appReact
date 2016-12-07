import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var HeadSide = React.createClass({
	render: function() {
		return (
			<div className="blockMenu">
				<div className="menu">
					<ul>
						<Link className='menu-item-link' activeClassName='active' to='/about'><li>About</li></Link>
						<Link className='menu-item-link' activeClassName='active' to='/targets'><li>Targets</li></Link>
					</ul>
				</div>
			</div>
		);
	}
});

export default HeadSide;