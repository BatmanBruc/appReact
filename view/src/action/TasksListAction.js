import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constant/AppConstants';

const TasksListAction = {
	LoadTasksList(id){
		console.log('LoadTasksList');
		$.ajax({
			url: '/tasks/'+id,
			type: 'GET',
			success: function(data){
				AppDispatcher.dispatch({
	                type: AppConstants.LOAD_TASKS_SUCCESS,
	                data: data
            	});
			}
		});
	}
}

export default TasksListAction;