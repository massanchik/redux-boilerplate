import {createStore} from 'redux';
import todoApp from './reducers/todo';


export default createStore(todoApp, {}, window.devToolsExtension ? window.devToolsExtension() : undefined);