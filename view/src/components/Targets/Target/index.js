import React from 'react';
import ReactDOM from 'react-dom';
import masonry from 'masonry-layout';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/sortable';
import TasksListAction from '../../../action/TasksListAction.js';
import TasksListStore from '../../../store/TasksListStore.js'

function getStateFromFlux() {
	var result = TasksListStore.getTasksList();
    return {
        notPerfTask: TasksListStore.getTasksList().notPerfTask,
        PerfTask: TasksListStore.getTasksList().PerfTask
    };
}

var Target = React.createClass({
	getInitialState() {
        return {
            ...getStateFromFlux()
        };
	},


	componentWillMount() {
        TasksListAction.LoadTasksList(this.props.params.targetId);
    },

    componentDidMount() {
    	this.sortable();
    	TasksListStore.addChangeListener(this._onChange);
    },

	componentDidUpdate(){
		this.sortable();
    },

    sortable() {
    	$( "#notPerfTask, #PerfTask" ).sortable({
		    connectWith: ".connectedSortable",
		    receive: (event,ui)=>{

	      		var id = Number(ui.item[0].id);
		    	this.executionTask(id); 	
		    }
	    });
    },

    componentWillUnmount() {
        TasksListStore.removeChangeListener(this._onChange);
    },

	executionTask(id){


		var notPerfTask = this.state.notPerfTask;
		var PerfTask = this.state.PerfTask;

		var task = this.state.notPerfTask.filter(task=>{
			console.log(task.id);
			console.log(id);
			if(id == task.id){

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
		console.log(task);
		this.setState({
			notPerfTask:notPerfTask,
			PerfTask:PerfTask
		});
		console.log(PerfTask);
	},

	render() {
		return (
			<div className="Target">
				
				<ul id="notPerfTask" >
					{
						this.state.notPerfTask.map(task=>{
							return(
								<li key={task.id} className="Task" id={task.id}>{task.description}</li>
							)
						})
					}
				</ul>
				
				
				<ul id="PerfTask" className="connectedSortable">
					{	
						this.state.PerfTask.map(task=>{
							if(task!=undefined){
								return(
									<li key={task.id} className="Task" id={task.id}>{task.desc_task}</li>
								)
							}
						})
					}
				</ul>
				
			</div>
		);
	},

	_onChange() {
        this.setState(getStateFromFlux());
    }
});

export default Target;