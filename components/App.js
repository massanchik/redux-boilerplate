import React, {PropTypes} from 'react';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = ({active, children, onClick}) => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App;