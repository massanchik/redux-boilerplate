import {combineReducers} from 'redux';
import {ADD_TODO, COMPLETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './../actions/todo';

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: true
                    });
                }
                return todo;
            });
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;