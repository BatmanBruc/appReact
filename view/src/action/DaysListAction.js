import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constant/AppConstants';

const DaysListAction = {
	LoadDaysList(){
		$.ajax({
			url: '/days',
			success: function(data){
				AppDispatcher.dispatch({
	                type: AppConstants.LOAD_DAYS_SUCCESS,
	                data: data
            	});
			}
		});
	}
}

export default DaysListAction;