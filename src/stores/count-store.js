import constants from "../constants/app-constants";
import dispatcher from "../dispatcher/dispatcher";
import {EventEmitter} from 'events';

let _count = 0;

function getCount() {
    return _count;
}

function incrementCount() {
    _count = _count + 1;
}

let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,

    emitChange: function() {
        this.emit('CHANGE_EVENT');
    },

    addChangeListener: function(cb) {
        this.on('CHANGE_EVENT', cb);
    },

    removeChangeListener: function(cb) {
        this.removeListener('CHANGE_EVENT', cb);
    }
});

dispatcher.register(action => {
    // console.log('inside cb: ' + action);
    switch(action.actionType) {
    case constants.INCREMENT:
        console.log('inside switch cb: ' + action);
        incrementCount();
        TodoStore.emitChange();
        break;
    };
});

export default TodoStore;
