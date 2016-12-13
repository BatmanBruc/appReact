import React from 'react';
import ReactDOM from 'react-dom';
import masonry from 'masonry-layout';
import { Link } from 'react-router';
import DaysListAction from '../../../action/DaysListAction.js';
import DaysListStore from '../../../store/DaysListStore.js'

function getStateFromFlux() {
    return {
        daysLists: DaysListStore.getDaysList()
    };
}

var DaysList = React.createClass({

	getInitialState() {
        return {
            ...getStateFromFlux()
        };
    },
    
    componentWillMount() {
    	$(window).bind('hashchange', function() {
		    alert('changed');
		});

        DaysListAction.LoadDaysList();
    },

	componentDidMount() {
		DaysListStore.addChangeListener(this._onChange);
        this.designBlocks();
    },

    componentDidUpdate() {
		this.designBlocks();
    },

    componentWillUnmount() {
        DaysListStore.removeChangeListener(this._onChange);
    },

    designBlocks(){
    	var count_targ = $('.count-targ')[0].childElementCount;
		var targets = $('.TargetItem');

		console.log(count_targ);

		var calc = 50;

		if(count_targ>=19){
			console.log('ok');
			calc = 1000/count_targ;
			targets.css('width',calc);
			
		}

		var msnry = new masonry( $('.count-targ')[0], {
		  itemSelector: '.TargetItem',
		  columnWidth: calc,
		  isFitWidth: true,
		  gutter: 3
		});
    },
	render() {
		return (
			<div className="TargetsList">
				<div className="count-targ" >
				{
					this.state.daysLists.map(function(day){
						return(
							<Link className='TargetItem' key={day.id} activeClassName='active' to={'/targets/'+day.id}>{day.day+day.month}</Link>
						);
					})
				}								
				</div>
				
				<div></div>
			</div>
			
		);
	},

	_onChange() {
        this.setState(getStateFromFlux());
    }
});

export default DaysList;