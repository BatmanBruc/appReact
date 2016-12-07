import React from 'react';
import ReactDOM from 'react-dom';
import DaysList from './DaysList';

var Targets = React.createClass({
	getInitialState: function() {
        return {
            targets: [
            	{
            		name: '11 ноября',
            		id: 0
            	},
            	{
            		name: '11 ноября',
            		id: 1
            	},
            	{
            		name: '11 ноября',
            		id: 2
            	},
            	{
            		name: '11 ноября',
            		id: 3
            	},
            	{
            		name: '11 ноября',
            		id: 4
            	},
            	{
            		name: '11 ноября',
            		id: 5
            	},
            	{
            		name: '11 ноября',
            		id: 6
            	},
            ]
        };
    },

    addTarget: function() {
    	var targets = this.state.targets;
    	console.log(targets.lastChild);
    	var id = targets.length;
    	targets.push({name:'one',id:id});


    	this.setState({ targets: targets });
    },

	render: function() {
		return (
			
			<div className="Targets">
				<DaysList addTarget={this.addTarget} targets={this.state.targets} ></DaysList>
                <div className="TargetBlock">{this.props.children}</div>
			</div>

			
		);
	}
});

export default Targets;