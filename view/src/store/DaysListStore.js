import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constant/AppConstants';

const CHANGE_EVENT = 'change';

let _daysList = [];
let _error = null;

function formatDaysList(data) {
    return {
        id: data.id,
        day: data.day,
        month: data.month,
        task: data.task
    };
}

const DaysListStore = Object.assign({}, EventEmitter.prototype, {
    getDaysList() {
        return _daysList;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_DAYS_SUCCESS: {
            var result = JSON.parse(action.data);

            _daysList = result.map(formatDaysList);

            DaysListStore.emitChange();
            break;
        }
    }
});

export default DaysListStore;