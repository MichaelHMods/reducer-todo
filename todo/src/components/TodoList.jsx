import React, { useState, useReducer } from 'react';
import {reducer, initialState} from '../reducers/Reducer';

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [state, dispatch] = useState(reducer, initialState)
    

    return (
        
        <div>
        <h4>Let's get this done.</h4>
        </div>
    )
}
export default TodoList