import React, {PropTypes} from 'react';
import styles from './style/todo.css';

const Todo = ({todo, onClick}) => (
    <li
        onClick={onClick}
        className={todo.completed ? styles.completed : styles.active}>
        {todo.text}
    </li>
);

Todo.PropTypes = {
    todo: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Todo;