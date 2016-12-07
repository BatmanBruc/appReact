import React from 'react';
import ReactDOM from 'react-dom';
import masonry from 'masonry-layout';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/sortable';

var Target = React.createClass({
	getInitialState: function() {
        	return {
            	notPerfTask: [
            		{
        				id:4,
        				desc_task:"написать приложение"
        			},
        			{
        				id:5, 
        				desc_task:"написать приложение"
        			},
        			{
        				id:6,
        				desc_task:"написать приложение"
        			},
        			{
        				id:7,
        				desc_task:"написать приложение"
        			},
        			{
        				id:8,
        				desc_task:"написать приложение"
        			},
        			{
        				id:9,
        				desc_task:"написать приложение"
        			},
        			{
        				id:10,
        				desc_task:"написать приложение"
        			},
        			{
        				id:11,
        				desc_task:"написать приложение"
        			},
        			{
        				id:12,
        				desc_task:"написать приложение"
        			},
        			{
        				id:13,
        				desc_task:"написать приложение"
        			},
        			{
        				id:14,
        				desc_task:"написать приложение"
        			},
        			{
        				id:15,
        				desc_task:"написать приложение"
        			},        	
        		],
        		PerfTask: [
            		          	
        		],
	        };
	    },

    componentDidMount: function() {
    	this.sortable();
    },

	componentDidUpdate: function(){
		this.sortable();
    },

    sortable: function() {
    	$( "#notPerfTask, #PerfTask" ).sortable({
		    connectWith: ".connectedSortable",
		    receive: (event,ui)=>{

	      		var id = Number(ui.item[0].id);
		    	this.executionTask(id); 	
		    }
	    });
    },

	executionTask: function(id){


		var notPerfTask = this.state.notPerfTask;
		var PerfTask = this.state.PerfTask;

		var task = this.state.notPerfTask.filter(task=>{

			if(id === task.id){

				notPerfTask.find((taskX, index, array)=>{

					if(taskX.id === task.id){

						delete notPerfTask[index];
						notPerfTask.sort();
						return true;
					}else return false;
				});
				return true;
			}
			else return false;
		})[0];
		
		PerfTask.push(task);
		
		this.setState({
			notPerfTask:notPerfTask,
			PerfTask:PerfTask
		});
	},

	render: function() {
		return (
			<div className="Target">
				
				<ul id="notPerfTask" >
					{
						this.state.notPerfTask.map(task=>{
							return(
								<li key={task.id} className="Task" id={task.id}>{task.desc_task}</li>
							)
						})
					}
				</ul>
				
				
				<ul id="PerfTask" className="connectedSortable">
					{
						this.state.PerfTask.map(task=>{

							return(
								<li key={task.id} className="Task" id={task.id}>{task.desc_task}</li>
							)
						})
					}
				</ul>
				
			</div>
		);
	}
});

export default Target;