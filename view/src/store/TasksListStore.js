import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constant/AppConstants';

const CHANGE_EVENT = 'change';

let _tasksList;
let _error = null;

var _tasksListPerfTask = [];
var _tasksListnotPerfTask = [];

function returnTasks() {
    return {
        id: data.id,
        id_day: data.id_day,
        title: data.title,
        description: data.description,
        date: data.date,
        status: data.status
    };
}

function sortBynotPerfTask(data) {
    if(data.status === 'notPerfTask'){
        return {
            id: data.id,
            id_day: data.id_day,
            title: data.title,
            description: data.description,
            date: data.date,
            status: data.status
        };
    }else{
        return false;
    }
}

function sortByPerfTask(data) {
    if(data.status === 'PerfTask'){
        return {
            id: data.id,
            id_day: data.id_day,
            title: data.title,
            description: data.description,
            date: data.date,
            status: data.status
        };
    }else{
        return false;
    }
}

const TasksListStore = Object.assign({}, EventEmitter.prototype, {
    getTasksList() {

        return {
            PerfTask: _tasksListPerfTask,
            notPerfTask: _tasksListnotPerfTask
        };
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        console.log('ok');
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_TASKS_SUCCESS: {
            var result = JSON.parse(action.data);

            _tasksListnotPerfTask = result.filter(sortBynotPerfTask);
            _tasksListPerfTask = result.filter(sortByPerfTask);
            console.log(_tasksListPerfTask);
            TasksListStore.emitChange();
            break;
        }
    }
});

export default TasksListStore;